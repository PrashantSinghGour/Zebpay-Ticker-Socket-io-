import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventService } from './services/event.service';
import { MainService } from './services/main.service';
import { ThemeService } from './services/theme.service';
import { keyBy } from 'lodash';
import { Feeds } from './utils/feeds';
import { logoMaps } from 'src/assets/logo-maps';
import { formatMarketPrice } from './utils/formatter';
import { initializeFirebase } from './utils/firebase';
import { initializeNotification } from './services/service-worker';
import { NavigationEnd, Router } from '@angular/router';
import { get } from 'lodash';
import { HapticService } from './services/haptic.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isDark = false;
  public isBackAllowed = false;
  constructor(
    private eventService: EventService,
    private httpClient: HttpClient,
    private mainService: MainService,
    private theme: ThemeService,
    private haptic: HapticService,
    public router: Router
  ) {
    router.events.subscribe((res) => {
      if (res instanceof NavigationEnd) {
        this.isBackAllowed = get(res, 'urlAfterRedirects', '').includes('chart');
      }
    });
  }

  ngOnInit() {
    initializeNotification();
    initializeFirebase();
    const isDark: string = localStorage.getItem('isDark') || '';
    const isDarkTheme = isDark ? JSON.parse(isDark) : false;
    this.isDark = isDarkTheme;
    this.theme.setTheme(isDarkTheme);
    this.getPairs();
  }

  getPairs() {
    let marketPricePairs: any = {}
    this.httpClient
      .get('https://www.zebapi.com/pro/v1/market')
      .toPromise().then((res: any) => {
        res = res && res.length && res.filter((price: any) => price?.currency === 'INR' && +price?.buy);
        marketPricePairs = keyBy(res, 'virtualCurrency');
        return this.httpClient
          .get('https://www.zebapi.com/api/v1/tradepairs/IN')
          .toPromise();
      }).then((res: any) => {
        let tradePair: any[] = [];
        let bookmarks: string[] = JSON.parse(localStorage.getItem('bookmarks') || '[]');
        let notifications: string[] = JSON.parse(localStorage.getItem('notifications') || '[]');
        tradePair = res?.data?.length ? res.data : [];
        tradePair = tradePair.map((tradePairs: any) => {
          tradePairs.url = logoMaps[tradePairs?.tradeVolumeCurrency];
          tradePairs.code = tradePairs?.tradeVolumeCurrency;
          tradePairs.isNotification = notifications.includes(tradePairs?.tradeVolumeCurrency) || false;
          tradePairs.isBookmarked = bookmarks.includes(tradePairs?.tradeVolumeCurrency) || false;
          tradePairs.prices = formatMarketPrice(marketPricePairs[tradePairs?.tradeVolumeCurrency])
          return tradePairs;
        });

        tradePair = tradePair.filter((pair: any) => pair?.prices && pair?.tradeDenominationCurrency === 'INR');


        this.mainService.tradePairsWithCode = keyBy(
          this.mainService.tradePair,
          'tradeVolumeCurrency'
        );

        this.mainService.tradePair = tradePair;
        const feeds = new Feeds(this.eventService, this.mainService);
        feeds.getFeeds();
        this.eventService.broadcast(
          this.eventService.eventNames.TICKERVALUELOADED,
          {}
        );
      });
  }

  backToHome() {
    this.haptic.vibrate(50);
    this.router.navigate(['home']);
  }

  changeThemeMode() {
    this.theme.setTheme(this.isDark);
  }
}
