
/*
 * Certain browsers might have issues with
 * Four-value syntax, such as Safari 6
 *
 * The following check is used to alter the 
 * expected result when four-value syntax
 * is not supported
 */
var div = document.createElement('div');
div.style.backgroundPosition = 'right 10% bottom 20%';
var fourValueSyntax = div.style.backgroundPosition !== "" ? true : false;


/*
 * Expected results
 */
var CSS_BACKGROUNDS_EXPECTED = [
  {
    bottom: 559,
    height: 452,
    imageHeight: 452,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 0,
    right: 600,
    top: 107,
    width: 600
  },
  {
    bottom: 1278,
    height: 500,
    imageHeight: 750,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 0,
    right: 400,
    top: 734,
    width: 400
  },
  {
    bottom: 1511,
    height: 150,
    imageHeight: 303,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 0,
    right: 400,
    top: 1361,
    width: 400
  },
  {
    bottom: 2255,
    height: 267,
    imageHeight: 530,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 397,
    left: 0,
    right: 200,
    top: 1988,
    width: 200
  },
  {
    bottom: 3321,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 0,
    right: 500,
    top: 2615,
    width: 500
  },
  {
    bottom: 3447,
    height: 205,
    imageHeight: 530,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 516,
    left: 0,
    right: 200,
    top: 3242,
    width: 200
  },
  {
    bottom: 4069,
    height: 200,
    imageHeight: 452,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 0,
    right: 265,
    top: 3869,
    width: 265
  },
  {
    bottom: 5585,
    height: 500,
    imageHeight: 375,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 0,
    right: 800,
    top: 4496,
    width: 800,
  },
  {
    bottom: 5607,
    height: 484,
    imageHeight: 303,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 0,
    right: 800,
    top: 5123,
    width: 800
  },
  {
    bottom: 6280,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 397,
    left: 20,
    right: 417,
    top: 5750,
    width: 397
  },
  {
    bottom: 7133,
    height: 450,
    imageHeight: 450,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 0,
    right: 500,
    top: 6427,
    width: 500
  },
  {
    bottom: 7534,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 516,
    left: 142,
    right: 658,
    top: 7004,
    width: 516
  },
  {
    bottom: 8107,
    height: 452,
    imageHeight: 452,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 100,
    right: 700,
    top: 7655,
    width: 600
  },
  {
    bottom: 8758,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 317,
    imageWidth: 600,
    left: 100,
    right: 700,
    top: 8258,
    width: 600
  },
  {
    bottom: 9335,
    height: 303,
    imageHeight: 303,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 50,
    right: 550,
    top: 9032,
    width: 500
  },
  {
    bottom: 10077,
    height: 465,
    imageHeight: 465,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 397,
    left: 100,
    right: 497,
    top: 9547,
    width: 397
  },
  {
    bottom: 10845,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 150,
    right: 650,
    top: 10139,
    width: 500
  },
  {
    bottom: 11296,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 516,
    left: 0,
    right: 516,
    top: 10766,
    width: 516
  },
  {
    bottom: 11845,
    height: 452,
    imageHeight: 452,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 200,
    right: 800,
    top: 11393,
    width: 600
  },
  {
    bottom: 12837,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 100,
    right: 700,
    top: 12020,
    width: 600
  },
  {
    bottom: 13000,
    height: 303,
    imageHeight: 303,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 150,
    right: 650,
    top: 12697,
    width: 500
  },
  {
    bottom: 13796,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 8,
    imageWidth: 397,
    left: 201,
    right: 598,
    top: 13274,
    width: 397
  },
  {
    bottom: 14667,
    height: 440,
    imageHeight: 440,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: 300,
    right: 800,
    top: 13961,
    width: 500
  },
  {
    bottom: 15050,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 8,
    imageWidth: 516,
    left: 284,
    right: 800,
    top: 14528,
    width: 516
  },
  {
    bottom: 15642,
    height: 452,
    imageHeight: 452,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 0,
    right: 600,
    top: 15190,
    width: 600
  },
  {
    bottom: 16551,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 48,
    imageWidth: 600,
    left: 0,
    right: 600,
    top: 15782,
    width: 600
  },
  {
    bottom: 16909,
    height: 303,
    imageHeight: 303,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 280,
    left: 520,
    right: 1020,
    top: 16606,
    width: 280
  },
  {
    bottom: 17866,
    height: 200,
    imageHeight: 200,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 280,
    left: 520,
    right: 917,
    top: 17336,
    width: 280
  },
  {
    bottom: 18469,
    height: 400,
    imageHeight: 400,
    imageLeft: 50,
    imageTop: 0,
    imageWidth: 450,
    left: 0,
    right: 450,
    top: 17763,
    width: 450
  },
  {
    bottom: 18790,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: 30,
    imageWidth: 516,
    left: 20,
    right: 536,
    top: 18290,
    width: 516
  },
  {
    bottom: 19417,
    height: 452,
    imageHeight: 452,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 600,
    left: 30,
    right: 630,
    top: 18965,
    width: 600
  },
  {
    bottom: fourValueSyntax ? 20044 : 20361,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: fourValueSyntax ? 317 : 0,
    imageWidth: 600,
    left: fourValueSyntax ? 190 : 0,
    right: fourValueSyntax ? 790 : 600,
    top: 19544,
    width: 600
  },
  {
    bottom: fourValueSyntax ? 20661 : 20474,
    height: 303,
    imageHeight: 303,
    imageLeft: 0,
    imageTop: 0,
    imageWidth: 500,
    left: fourValueSyntax ? 300 : 0,
    right: fourValueSyntax ? 800 : 500,
    top: fourValueSyntax ? 20358 : 20171,
    width: 500
  },
  {
    bottom: fourValueSyntax ? 21278 : 21328,
    height: fourValueSyntax ? 480 : 500,
    imageHeight: fourValueSyntax ? 480 : 500,
    imageLeft: 0,
    imageTop: fourValueSyntax ? 50 : 0,
    imageWidth: 397,
    left: fourValueSyntax ? 393 : 0,
    right: fourValueSyntax ? 790 : 397,
    top: 20798,
    width: 397
  },
  {
    bottom: fourValueSyntax ? 21966 : 22131,
    height: 500,
    imageHeight: 500,
    imageLeft: 0,
    imageTop: fourValueSyntax ? 165 : 0,
    imageWidth: 500,
    left: fourValueSyntax ? 270 : 0,
    right: fourValueSyntax ? 770 : 500,
    top: 21425,
    width: 500
  }
];
