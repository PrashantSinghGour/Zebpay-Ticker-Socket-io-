// Get LOGOs from https://coinmarketcap.com/
// const data = document.getElementsByClassName('coin-logo');
// let imgData = {};
// for (var i = 0, max = data.length; i < max; i++) {
//   imgData[data[i].alt.split(' ')[0]] = data[i].src;
// }
// console.log(imgData);

//top 500
export const logoMaps: any = {
  undefined: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20676.png',
  BTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
  ETH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
  USDT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
  USDC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png',
  BNB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
  BUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4687.png',
  ADA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png',
  XRP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png',
  SOL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
  DOGE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/74.png',
  PUSH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9111.png',
  DOT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png',
  DAI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png',
  FARM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6859.png',
  GARI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12969.png',
  AGLD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11568.png',
  TRX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png',
  WBTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3717.png',
  LEO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png',
  AVAX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
  SHIB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png',
  LTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2.png',
  FTT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4195.png',
  LINK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png',
  MATIC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png',
  UNI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png',
  CRO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png',
  XLM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/512.png',
  NEAR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png',
  BCH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png',
  ETC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png',
  ALGO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4030.png',
  XMR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/328.png',
  ATOM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png',
  VET: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png',
  MANA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1966.png',
  HBAR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4642.png',
  FLOW: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4558.png',
  ICP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png',
  APE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18876.png',
  HNT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5665.png',
  XTZ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2011.png',
  EGLD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6892.png',
  THETA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png',
  BSV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3602.png',
  TUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2563.png',
  FIL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png',
  AXS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6783.png',
  SAND: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6210.png',
  KCS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2087.png',
  ZEC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1437.png',
  USDP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3330.png',
  EOS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1765.png',
  MKR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png',
  AAVE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7278.png',
  HT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png',
  USDN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5068.png',
  MIOTA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1720.png',
  BTT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16086.png',
  GRT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png',
  XEC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10791.png',
  KLAY: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4256.png',
  USDD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19891.png',
  QNT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3155.png',
  OKB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3897.png',
  NEO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1376.png',
  FTM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3513.png',
  PAXG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4705.png',
  RUNE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4157.png',
  CHZ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4066.png',
  BAT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1697.png',
  WAVES: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1274.png',
  LRC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1934.png',
  DASH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/131.png',
  STX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4847.png',
  GMT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18069.png',
  CAKE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7186.png',
  KSM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5034.png',
  ZIL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2469.png',
  FEI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8642.png',
  CELO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5567.png',
  ENJ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2130.png',
  GALA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7080.png',
  XDC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2634.png',
  NEXO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2694.png',
  AMP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6945.png',
  XEM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/873.png',
  CRV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6538.png',
  '1INCH': 'https://s2.coinmarketcap.com/static/img/coins/64x64/8104.png',
  HOT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2682.png',
  KAVA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4846.png',
  SNX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2586.png',
  MINA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8646.png',
  ONE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3945.png',
  DCR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1168.png',
  KDA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5647.png',
  GT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4269.png',
  AR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5632.png',
  GNO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1659.png',
  QTUM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1684.png',
  XYM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8677.png',
  BTG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2083.png',
  TFUEL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3822.png',
  BORA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3801.png',
  CVX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9903.png',
  STORJ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1772.png',
  IOST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2405.png',
  ICX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2099.png',
  OMG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1808.png',
  IOTX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2777.png',
  TWT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5964.png',
  ANKR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3783.png',
  ROSE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7653.png',
  ZRX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1896.png',
  GLM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1455.png',
  KNC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9444.png',
  SRM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6187.png',
  AUDIO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7455.png',
  RVN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2577.png',
  JST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5488.png',
  SC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1042.png',
  GLMR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6836.png',
  LPT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3640.png',
  SXP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4279.png',
  ONT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2566.png',
  COMP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5692.png',
  LDO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8000.png',
  XCH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9258.png',
  IMX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10603.png',
  YFI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5864.png',
  SKL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5691.png',
  WOO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7501.png',
  WAXP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2300.png',
  BAL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5728.png',
  ENS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13855.png',
  MXC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3628.png',
  ZEN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1698.png',
  NFT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9816.png',
  HIVE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5370.png',
  GUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3306.png',
  POLY: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2496.png',
  UMA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5617.png',
  CHSB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2499.png',
  SCRT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5604.png',
  VGX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1817.png',
  DGB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/109.png',
  SUSHI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6758.png',
  PLA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7461.png',
  ELON: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9436.png',
  BNT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1727.png',
  BTRST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11584.png',
  MX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4041.png',
  KEEP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5566.png',
  CSPR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5899.png',
  LSK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1214.png',
  EPS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8938.png',
  RENBTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5777.png',
  PEOPLE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14806.png',
  RSR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3964.png',
  OCEAN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3911.png',
  ORBS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3835.png',
  REV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2135.png',
  CEEK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2856.png',
  REN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2539.png',
  ACA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6756.png',
  NU: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4761.png',
  RNDR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png',
  MED: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2303.png',
  FLUX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3029.png',
  ONG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3217.png',
  CHR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3978.png',
  ILV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8719.png',
  CELR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3814.png',
  WIN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4206.png',
  XNO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1567.png',
  WXT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4090.png',
  HEX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5015.png',
  WTRX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18579.png',
  YOUC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7321.png',
  stETH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8085.png',
  BTCB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4023.png',
  XCN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18679.png',
  FRAX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6952.png',
  TON: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png',
  WBNB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7192.png',
  HBTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6941.png',
  LUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9566.png',
  DFI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5804.png',
  BTTOLD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3718.png',
  XAUT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5176.png',
  FRTS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12131.png',
  LUNC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4172.png',
  WEMIX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7548.png',
  CCXX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5482.png',
  SAFE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3918.png',
  T: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17751.png',
  HUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4779.png',
  TTT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5514.png',
  BNX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9891.png',
  LUNA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/20314.png',
  BIT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11221.png',
  NXM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5830.png',
  TITAN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7206.png',
  LN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4512.png',
  OSMO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12220.png',
  ASTR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12885.png',
  LOOKS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17081.png',
  EVER: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7505.png',
  BabyDoge: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10407.png',
  CBG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11498.png',
  HUM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3600.png',
  BEST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4361.png',
  EURS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2989.png',
  PLTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3753.png',
  MCT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16946.png',
  RACA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11346.png',
  VVS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14519.png',
  AMA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9935.png',
  '1ECO': 'https://s2.coinmarketcap.com/static/img/coins/64x64/16604.png',
  AVINOC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3089.png',
  NEST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5841.png',
  XSGD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8489.png',
  DEP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5429.png',
  vUSDC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7958.png',
  GAL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11877.png',
  RPL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2943.png',
  WVLX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19076.png',
  MVL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2982.png',
  KOK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5185.png',
  USDX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6651.png',
  HXRO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3748.png',
  MTL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1788.png',
  RAY: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png',
  XYO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2765.png',
  UOS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4189.png',
  ARRR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3951.png',
  REQ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2071.png',
  STEEM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1230.png',
  MOB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7878.png',
  SURE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5113.png',
  PYR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9308.png',
  SOLO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5279.png',
  HYN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3695.png',
  BICO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9543.png',
  LOCUS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3855.png',
  METIS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9640.png',
  EWT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5268.png',
  INJ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png',
  LQTY: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7429.png',
  WRX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5161.png',
  ELF: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2299.png',
  ASD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3673.png',
  SPELL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11289.png',
  MAID: 'https://s2.coinmarketcap.com/static/img/coins/64x64/291.png',
  MDX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8335.png',
  BSW: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10746.png',
  TRIBE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9025.png',
  ALICE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8766.png',
  XCAD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9868.png',
  REEF: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6951.png',
  STMX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2297.png',
  ABBC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3437.png',
  LYXe: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5625.png',
  PRO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1974.png',
  MPL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9417.png',
  DESO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10442.png',
  FX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3884.png',
  ETN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2137.png',
  VTHO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3012.png',
  ZEON: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3795.png',
  ANT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1680.png',
  NKN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2780.png',
  SUN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10529.png',
  OXT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5026.png',
  CTK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4807.png',
  ANY: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5892.png',
  JOE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11396.png',
  BTCST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8891.png',
  RBTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3626.png',
  HEDG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3662.png',
  STRAX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1343.png',
  TLM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9119.png',
  STRK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8911.png',
  DAR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11374.png',
  RGT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7486.png',
  PROM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4120.png',
  FET: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3773.png',
  TRAC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2467.png',
  API3: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7737.png',
  CTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5198.png',
  ERG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1762.png',
  QKC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2840.png',
  STPT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4006.png',
  ACH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6958.png',
  GHST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7046.png',
  OUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7189.png',
  DAWN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5618.png',
  BRG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7096.png',
  UQC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2273.png',
  XVS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png',
  GTN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3914.png',
  SSX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5612.png',
  SUPER: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8290.png',
  CORE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7242.png',
  META: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3418.png',
  UTK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2320.png',
  ARK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1586.png',
  RLC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1637.png',
  MOVR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9285.png',
  WMT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13769.png',
  vBUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7959.png',
  CFG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6748.png',
  CUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
  VAI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7824.png',
  LOOM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2588.png',
  ADS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1883.png',
  ALEPH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5821.png',
  BFC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7817.png',
  DMCH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5622.png',
  ORC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5326.png',
  BAND: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4679.png',
  HOO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7543.png',
  MNGO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11171.png',
  ALPHA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7232.png',
  AURORA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14803.png',
  TLOS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4660.png',
  BOBA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14556.png',
  RKN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5072.png',
  DERO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2665.png',
  NMR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1732.png',
  EXRD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7692.png',
  WOZX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7882.png',
  XVG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/693.png',
  LCX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4950.png',
  SSV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12999.png',
  DUSK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4092.png',
  DKA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5908.png',
  JASMY: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8425.png',
  MBOX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9175.png',
  AGIX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2424.png',
  RAD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6843.png',
  BAKE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7064.png',
  XWC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/268.png',
  PERP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6950.png',
  VERI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1710.png',
  AXEL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6216.png',
  HI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11240.png',
  SNL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3977.png',
  CENNZ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2585.png',
  ZB: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3351.png',
  RIF: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3701.png',
  FWT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7585.png',
  POLS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7208.png',
  YGG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10688.png',
  BETA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11307.png',
  ONUS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15261.png',
  MLN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1552.png',
  TT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3930.png',
  MASK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8536.png',
  HUNT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5380.png',
  FORTH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9421.png',
  COCOS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4275.png',
  POND: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7497.png',
  HERO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10778.png',
  MV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17704.png',
  TOMO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2570.png',
  ANC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8857.png',
  IQ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2930.png',
  NSBT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7320.png',
  FLETA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4103.png',
  AERGO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3637.png',
  RBN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12387.png',
  DPI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7055.png',
  KAI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5453.png',
  XNC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5060.png',
  QC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2319.png',
  BADGER: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7859.png',
  SOS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16463.png',
  ORN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5631.png',
  MUSD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5747.png',
  MBL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4038.png',
  SPS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11035.png',
  GENE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13632.png',
  BEL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6928.png',
  H2O: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19091.png',
  SFP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8119.png',
  TIFI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19476.png',
  FLM: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7150.png',
  KLV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6724.png',
  CULT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17742.png',
  GTC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10052.png',
  ARPA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4039.png',
  IDEX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3928.png',
  XPR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5350.png',
  CRE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3946.png',
  VELO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7127.png',
  DPR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8894.png',
  STARL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10821.png',
  LAT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9720.png',
  MFT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2896.png',
  CON: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3866.png',
  WAN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2606.png',
  RMRK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12140.png',
  AMPL: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4056.png',
  BMX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2933.png',
  MONA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/213.png',
  LIT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6833.png',
  NOIA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4191.png',
  SBD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1312.png',
  DVF: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10759.png',
  ATA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10188.png',
  AQT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7460.png',
  YOOSHI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9892.png',
  CLV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8384.png',
  STAKE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5601.png',
  SERO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4078.png',
  LINA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7102.png',
  ALI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16876.png',
  AIOZ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9104.png',
  ATOLO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/15388.png',
  QRDO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10750.png',
  UBT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2758.png',
  GST: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16352.png',
  HTR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5552.png',
  MC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13523.png',
  GXC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1750.png',
  LTO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3714.png',
  ALT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10897.png',
  PRE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2245.png',
  BNANA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3742.png',
  CUDOS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8258.png',
  vUSDT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7957.png',
  UPP: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2866.png',
  TRU: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7725.png',
  MOC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2915.png',
  DVI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7590.png',
  HNS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5221.png',
  BIFI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7311.png',
  EGG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4467.png',
  CRTS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12064.png',
  aETHc: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8100.png',
  TKO: 'https://s2.coinmarketcap.com/static/img/coins/64x64/9020.png',
  VRSC: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5049.png',
  BCD: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2222.png',
  MLK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5266.png',
  TROY: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5007.png',
  ALPACA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8707.png',
  NRG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/3218.png',
  BLZ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2505.png',
  REI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/19819.png',
  ELA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2492.png',
  CLT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5401.png',
  PHA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6841.png',
  AE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1700.png',
  CBK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8107.png',
  BTS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/463.png',
  LOG: 'https://s2.coinmarketcap.com/static/img/coins/64x64/859.png',
  ZASH: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5610.png',
  BLOK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11206.png',
  BZZ: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10293.png',
  USDK: 'https://s2.coinmarketcap.com/static/img/coins/64x64/4064.png',
  RSV: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6727.png',
  VR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/14822.png',
  RFR: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2553.png',
  AVA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/2776.png',
  ALPINE: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18112.png',
  GRS: 'https://s2.coinmarketcap.com/static/img/coins/64x64/258.png',
  DIA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6138.png',
  CTCN: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5313.png',
  ALCX: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8613.png',
  'FCT,FCT2': 'https://s2.coinmarketcap.com/static/img/coins/64x64/4953.png',
  LON: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8083.png',
  CQT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7411.png',
  BLCT: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5280.png',
  VEGA: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10223.png',
};
