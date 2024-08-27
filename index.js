/*
@title: Project Zero
@author: 
@tags: []
@addedOn: 2024-00-00
*/

// ----------INIT----------

// player
const player = "p"

const playerF = bitmap`
....LLLLLLLL.3..
...LLLL1111LL0..
...L111111LL0...
...1444004441...
...100000000L...
...L04000040L...
...L040000401...
...L000440001...
....L1111LL1....
...LLLL111LLL...
...LLL1106L11...
...11L1111111...
...1211L11L21...
....L11L1LLL....
.....L111L1.....
.....LL..11.....`
const playerB = bitmap`
..C.LLLLLLLL....
..0LL1111LLLL...
...LLL111111L...
...111100L111...
...L110440111...
...LL1044011L...
...LLL10011LL...
...11L11111LL...
....110000LL....
...L10202201L...
...110022001L...
...LL022020L1...
...1202022021...
....LL00001L....
.....1L111L.....
.....11..LL.....`
const playerR = bitmap`
......LLLL......
.....LL1111.....
.....11111L.....
....01LL1140....
....01LLL100....
....01LLL140....
....01LLL140....
.....11L1104....
......L1L1......
.....0L1L1L.....
.....0L1L1L.....
.....0L1LLL.....
.....0L2LL1.....
......1L1L......
.......1L.......
.......1L.......`
const playerL = bitmap`
......LLLL......
.....11LLLL.....
.....L11111.....
....041LLL10....
....001LLL10....
....041LLL10....
....0411LL10....
....4011111.....
......1L1L......
.....11L1L0.....
.....L1L110.....
.....1LL1L0.....
.....1LL2L0.....
......11L1......
.......1L.......
.......L1.......`
const playerDarkF = bitmap`
.............3..
................
................
....44400444....
....00000000....
....04000040....
....04000040....
....00044000....
................
................
.........6......
................
................
................
................
................`

//decoration
const labbench1 = "☺"
const labbench2 = "☻"
const labbench1t = bitmap`
1111111111111111
1222222222222222
1222222222222222
122222222227C722
172777722227C722
1272227222272722
12733C7222722272
127CC37222764472
12733372227FF472
1227772222277722
1222222222222222
1111111111111111
1111111111111111
LL..............
LL..............
LL..............`
const labbench2t = bitmap`
1111111111111111
2222222222LLLLL1
2111111111LLLLL1
2122222222552LL1
2177777777557LL1
2177777757577LL1
2177777757777121
2177777775577121
2177777777777121
2111111111111121
2222222222222221
1111111111111111
1111111111111111
..............LL
..............LL
..............LL`
const labbench3 = "♦"
const labbench4 = "♣"
const labbench3t = bitmap`
1111111111111111
1222222222222222
1222222222222222
1272722727227272
127C7CC7C7CC7C72
12CCCCCCCCCCCCC2
1279722747227672
1279722747227672
12C7CCCC7CCCC7C2
12CCCCCCCCCCCCC2
1222222222222222
1111111111111111
1111111111111111
LL..............
LL..............
LL..............`
const labbench4t = bitmap`
1111111111111111
2222222222LLLLL1
2111111111LLLLL1
2122222222222LL1
2122222222222LL1
21222222LL222LL1
2122222L0LL22121
2122222LL0L22121
21222222LL222121
2111111111111121
2222222222222221
1111111111111111
1111111111111111
..............LL
..............LL
..............LL`
const plant = "♥"
const plantt = bitmap`
.....4..........
.....44...4.....
......44.44.....
.DDDD.44444.DD..
DDDDDD4444DDDDD.
..DDDDD44DDDDDDD
....DDD4DDDDD..D
.....DDDDDD.....
....C0DDDD0C....
....CC0000CC....
....CCCCCCCC....
....CCCCCCCC....
.....CCCCCC.....
.....CCCCCC.....
......CCCC......
................`
const plant2 = "♠"
const plant2t = bitmap`
................
..D...4.........
..DD..44..444...
..DDD.444444....
...DDD44444.....
....DDD44DDD....
....DDD4DDDDDD..
.....DDDDDD.DDD.
....C0DDDD0C.DD.
....CC0000CC....
....CCCCCCCC....
....CCCCCCCC....
.....CCCCCC.....
.....CCCCCC.....
......CCCC......
................`
const pushplant = "♂"
const capsuleb = "•"
const capsulebt = bitmap`
.52277700011175.
.52777700111075.
.57777001110075.
.57770011100775.
.57770111007775.
.57771110077775.
.57721100077775.
.57221000077775.
.52227000077775.
1522770000077751
1527777000077751
L55777770007755L
7LL5555555555LL7
L77LLLLLLLLLL77L
.LL7777777777LL.
...LLLLLLLLLL...`
const capsulet = "◘"
const capsulett = bitmap`
....LLLLLLLL....
..LL11111111LL..
.L1111LLLL1111L.
L1111LLLLLL1111L
L1111LLLLLL1111L
LL1111LLLL1111LL
L7LL11111111LL7L
.L77LLLLLLLL77L.
.5LL77777777LL5.
.577LLLLLLLL775.
.57777222277775.
.57771111077775.
.57711110007775.
.57211100000725.
.52221000000225.
.52227000001225.`
const noteonlabbench = "○"
const noteonlabbencht = bitmap`
1111111111111111
1222200000002222
1222206666660222
1222206000060222
1222206666660222
1222206060060222
1222206666660222
1222206006060222
1222206666660222
1222220000000222
1222222222222222
1111111111111111
1111111111111111
LL..............
LL..............
LL..............`
const deadbot = "◙"
const deadbott = bitmap`
....1LL1........
...LLLLL1LL1....
...LLLL1LLLL1...
.3.1000011LL00..
..31000000001.0.
..7100000000L...
..710L000000L...
.7.1000000L0L...
....1LLL00006...
...LLLLL1LL.6...
...LL1LL00L.....
..LL1L11111.LL..
..L2LLLL11L21L1.
...1.1LL1LL1.121
...LLLLLL1L1L.LL
...LL......LL...`
const noteonwall = "♀"
const noteonwallt = bitmap`
1111111L11111111
1111111L11111111
1111111L11111111
LLLLLLLLLLLLLLLL
111L100001111111
111L106660000111
111L106666660111
LLLLL06006660LLL
1111066660060111
1111060066601111
1111066660601111
LLLL00006660LLLL
111111110000L111
111111111111L111
111111111111L111
LLLLLLLLLLLLLLLL`
const blacktile = "♪"

// sounds
const speaking = tune`
37.5: D4-37.5 + D5-37.5 + G5-37.5 + A4-37.5,
37.5: D4-37.5 + D5-37.5 + A5-37.5 + A4-37.5,
37.5: D4-37.5 + D5-37.5 + G5-37.5 + A4-37.5,
37.5: C4-37.5 + C5-37.5 + F5-37.5 + A4-37.5,
1050`
const footstep = tune`
60: C4~60 + C5~60,
1860`
const getItem = tune`
150: D4~150 + D5/150,
150: A4~150 + A5/150,
150: B5/150 + B4~150,
150: A5/150 + A4~150,
150: D5-150,
4050`
const error = tune`
120: D4-120 + D5/120 + B5^120,
120: D4-120 + D5/120 + B5^120,
3600`
const boot = tune`
230.76923076923077: C4^230.76923076923077 + C5^230.76923076923077 + F5~230.76923076923077,
230.76923076923077: F4~230.76923076923077 + D5^230.76923076923077 + G5^230.76923076923077,
230.76923076923077,
230.76923076923077: D4~230.76923076923077 + G4^230.76923076923077 + C5^230.76923076923077,
230.76923076923077: C5~230.76923076923077 + A5^230.76923076923077,
6230.7692307692305`
const zerospeaking = tune`
37.5: G4-37.5 + D4-37.5,
37.5: A4-37.5 + D4-37.5,
37.5: G4-37.5 + D4-37.5,
37.5: C4-37.5 + F4-37.5,
1050`
const zeroscreaming = tune`
37.5: D4/37.5 + A5/37.5 + E5-37.5,
37.5: D4/37.5 + B5/37.5 + F5-37.5,
37.5: D4/37.5 + A5/37.5 + E5-37.5,
37.5: C4/37.5 + G5/37.5 + D5-37.5,
1050`
const dotdotdot = tune`
75: D4~75,
75,
75: D4~75,
75,
75: D4~75,
2025`
const loading = tune`
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
150: G4~150,
150: G4~150,
150: D5~150,
300,
150: C4~150,
150: C5~150,
150`

// musics
const thelab = tune`
1500: D4^1500 + D5~1500,
1500: G4^1500,
1500: C5^1500 + C4~1500,
1500: A4^1500,
1500: D4^1500 + D5~1500,
1500: G4^1500,
1500: C5^1500 + C4~1500,
1500: B4^1500,
1500: E4^1500 + E5~1500,
1500: A4^1500,
1500: D5^1500 + D4~1500,
1500: B4^1500,
1500: E4^1500 + E5~1500,
1500: A4^1500,
1500: E5^1500 + E4~1500,
1500: B4^1500,
1500: G5^1500 + G4~1500,
1500: D5^1500,
1500: E5^1500 + E4~1500,
1500: G4^1500,
1500: G5^1500 + G4~1500,
1500: D5^1500,
1500: E5^1500 + E4~1500,
1500: E4^1500,
1500: D5^1500 + D4~1500,
1500: C5^1500,
1500: A4^1500 + A5~1500,
1500: G4^1500,
1500: F4^1500 + F5~1500,
1500: D5^1500,
1500: A4^1500 + A5~1500,
1500: E4^1500`
const zerotheme = tune`
6000: D4~6000,
6000: A4~6000,
6000: G4~6000,
6000: F4~6000,
6000: D4~6000,
6000: C5~6000,
6000: B4~6000,
6000: A4~6000,
6000: E4~6000,
6000: E5~6000,
6000: D5~6000,
6000: C5~6000,
6000: B4~6000,
6000: A4~6000,
6000: G4~6000,
6000: F4~6000,
6000: D4~6000,
6000: A4~6000,
6000: G4~6000,
6000: F4~6000,
6000: D4~6000,
6000: C5~6000,
6000: B4~6000,
6000: A4~6000,
6000: D4~6000,
6000: E5~6000,
6000: D5~6000,
6000: C5~6000,
6000: B4~6000,
6000: A4~6000,
6000: G4~6000,
6000: F4~6000`


const emptymusic = tune``


// main
const background = "b"
const tile = "t"
const tilet = bitmap`
222222222222222L
222222222222222L
222222222222222L
222222222222222L
2222222222222220
222222222222222L
222222222222222L
222222222222222L
222222222222222L
222222222222222L
222222222222222L
2222222222222220
2222222222222220
2222222222222220
222222222222222L
00LLLLLLL0LL000L`
const wall = "w"
const wallt = bitmap`
1111111L11111111
1111111L11111111
1111111L11111111
LLLLLLLLLLLLLLLL
111L111111111111
111L111111111111
111L111111111111
LLLLLLLLLLLLLLLL
11111111L1111111
11111111L1111111
11111111L1111111
LLLLLLLLLLLLLLLL
111111111111L111
111111111111L111
111111111111L111
LLLLLLLLLLLLLLLL`
const door = "d"
const lockeddoor = "l"
const doort = bitmap`
1110111111110111
111011LLLL110111
1110111111110111
LLL011LLLL110LLL
1110111111110111
111011LLLL110111
1110111111110111
LLL0111111110LLL
111011111LL10111
1110111111L10111
1110111111110111
LLL0111111110LLL
1110111111110111
1110111111110111
11101LLLLLL10111
LLL0111111110LLL`
const plantgoal = "g"
const plantgoalt = bitmap`
................
................
................
................
................
................
................
................
................
................
................
................
......LLLL......
.....LLLLLL.....
......LLLL......
................`
const brokenwall = "x"
const brokenwallt = bitmap`
1111101L11111111
1111101L11111111
1111110L11111111
LL0LLLLLLLLLLL0L
110L111111000011
1110111110111111
111L011100001111
LLLLL0L0LLLL00LL
11011010L1111111
10111101L1111111
10111011L1111111
0L0LL0LLLLLLL00L
110110111111L110
111101001111L111
111111110011L111
LLLLLLLLLL0LLLLL`
const key = "k"
const keyt = bitmap`
................
................
................
................
................
....L11.........
...1L.LL....L...
...L...11L11L...
...11.L1..L1....
....L1L...L1....
................
................
................
................
................
................`

// Zero
const zero = "z"
const zerodeadt = bitmap`
....L00L........
...00000L00L....
...0000L0000L...
.8.L0000LL0000..
..8L00000000L.0.
..6L000000000...
..6L0L0000000...
.6.L000000L00...
....L0000000D...
...00000L00.D...
...00L00000.....
..00L0LLLLL.00..
..020000LL02L0L.
...L.L00L00L.L2L
...000000L0L0.00
...00......00...`
const zeroeyesopent = bitmap`
....L00L........
...00000L00L....
...0000L0000L...
.8.L7770LL0000..
..8L00000770L.3.
..6L070000070...
..6L070000700...
.6.L000770700...
....L0000000D...
...00000L00.D...
...00L00000.....
..00L0LLLLL.00..
..020000LL02L0L.
...L.L00L00L.L2L
...000000L0L0.00
...00......00...`
const zerohalft = bitmap`
....L00LL00L....
...000000000L...
...0000LLL000...
...L7770077700..
.8.L00000000L.3.
..8L070000700...
..6L070000700...
.6.L000770000...
.6..L000L00L.D..
...00000000.....
...00L00000.....
..00L0LLLLL.00..
..020000LL02L0L.
...L.L00L00L.L2L
...000000L0L0.00
...00......00...`
const zerosurpriset = bitmap`
....L00LL00L....
...000000000L...
...0000LLL000...
...L0000000000..
.8.L77700777L.3.
..8L707007070...
..6L777007770...
.6.L000770000...
.6..L000L00L.D..
...00000000.....
...00L00000.....
..00L0LLLLL.00..
..020000LL02L0L.
...L.L00L00L.L2L
...000000L0L0.00
...00......00...`
const zerohumt = bitmap`
....L00LL00L....
...000000000L...
...0000LLL000...
...L0000077700..
.8.L77700000L.3.
..8L000000700...
..6L070000700...
.6.L000770000...
.6..L000L00L.D..
...00000000.....
...00L00000.....
..00L0LLLLL.00..
..020000LL02L0L.
...L.L00L00L.L2L
...000000L0L0.00
...00......00...`
const zeroloadt = bitmap`
....L00LL00L....
...000000000L...
...0000LLL000...
...L0002100000..
.8.L00200100L.7.
..8L00000L000...
..6L0000L0000...
.6.L000000000...
.6..L000L00L.D..
...00000000.....
...00L00000.....
..00L0LLLLL.00..
..020000LL02L0L.
...L.L00L00L.L2L
...000000L0L0.00
...00......00...`


// Interaction
var interaction = "";
var interacting = false;

// UI

const black = bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`
const yellow = bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666`
var tempX;
var tempY;
var tempPlantX;
var tempPlantY;
var currentBG;
var currentPlayer;
var currentZero;
var hasKey = false;
var wallKickTimes = 0;
var wallBroken = false

var playback = playTune(emptymusic, Infinity)

const delay = ms => new Promise(res => setTimeout(res, ms));
let nextDialog = null

// EDIT EASILY WHERE YOU WANT TO START - DEVELOPER ONLY, SHOULD NOT BE USED TO PLAY FULL GAME
const startLevel = 1


// ----------START---------

// Counter
var counter = 0;

function updateCounter() {
  counter += 1
}
setInterval(updateCounter, 1000);



//CHANGE THIS FOR LEGEND
function scene(backgroundtexture, playertexture, zerotexture, musicState) {
  setLegend(
    //decoration foreground
    [capsulet, capsulett],

    //main
    [player, playertexture],
    [wall, wallt],
    [brokenwall, brokenwallt],
    [door, doort],
    [lockeddoor, doort],
    [plantgoal, plantgoalt],
    [key, keyt],

    [zero, zerotexture],


    //decoration
    [labbench1, labbench1t],
    [labbench2, labbench2t],
    [labbench3, labbench3t],
    [labbench4, labbench4t],
    [plant, plantt],
    [plant2, plant2t],
    [capsuleb, capsulebt],
    [deadbot, deadbott],
    [pushplant, plant2t],
    [blacktile, black],
    [tile, tilet],

    //interactive
    [noteonlabbench, noteonlabbencht],
    [noteonwall, noteonwallt],

    // ui
    [background, backgroundtexture],

  )
  setBackground(background)
  currentBG = backgroundtexture
  currentPlayer = playertexture
  currentZero = zerotexture

  if (musicState == "nomusic") {
    playback.end()
  } else if (musicState == "nochange") {
    //change nothing
  } else {    
    playback.end()
    playback = playTune(musicState, Infinity)
  }

}



const zeroMeetCutscene = async () => {
  scene(currentBG, playerB, currentZero, "nochange")
  await delay(5000);
  playTune(boot)
  scene(currentBG, currentPlayer, zeroeyesopent, "nochange")
  await delay(3000);
  playTune(zerospeaking)
  addText("Oh wow...", { x: 5, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerosurpriset, zerotheme)
  playTune(zeroscreaming)
  addText("...OH WOW!!!", { x: 4, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zeroscreaming)
  addText("I'M ALIVE", { x: 5, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zeroscreaming)
  addText("I CAN SEE YOU!!!", { x: 2, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerohumt, "nochange")
  playTune(dotdotdot)
  addText("...", { x: 9, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("whoever you are?", { x: 2, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("I'm Project Zero.", { x: 1, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("What about you?", { x: 2, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("I'm Project One.", { x: 2, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(dotdotdot)
  addText("...", { x: 9, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerosurpriset, "nochange")
  playTune(zeroscreaming)
  addText("...PROJECT ONE???", { x: 1, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zeroscreaming)
  addText("THERE'S ANOTHER", { x: 2, y: 14, color: color`5` });
  addText("VERSION OF ME??", { x: 2, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerohumt, "nochange")
  playTune(zerospeaking)
  addText("Wait, how long have", { x: 0, y: 14, color: color`5` });
  addText("I been turned off?", { x: 0, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("I have no idea.", { x: 2, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerohalft, "nochange")
  playTune(zerospeaking)
  addText("...I see.", { x: 5, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("...Why are you here?", { x: 0, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("I don't even know", { x: 0, y: 14, color: color`D` });
  addText("what this place is.", { x: 0, y: 15, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("Where am I?", { x: 4, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("This is the Process", { x: 0, y: 13, color: color`5` });
  addText("Laboratories", { x: 4, y: 14, color: color`5` });
  addText("headquarters.", { x: 3, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("This is probably", { x: 2, y: 13, color: color`5` });
  addText("where you were", { x: 3, y: 14, color: color`5` });
  addText("created.", { x: 6, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("Created?", { x: 6, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("You were created", { x: 2, y: 14, color: color`5` });
  addText("to serve a purpose.", { x: 1, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("What purpose?", { x: 3, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("No idea.", { x: 6, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zerospeaking)
  addText("Do you know when", { x: 2, y: 14, color: color`5` });
  addText("you were made?", { x: 3, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("No. My only memories", { x: 0, y: 12, color: color`D` });
  addText("are my name and the", { x: 0, y: 13, color: color`D` });
  addText("fact I was activated", { x: 0, y: 14, color: color`D` });
  addText(String(counter) + " seconds ago.", { x: 0, y: 15, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerohumt, "nochange")
  playTune(zerospeaking)
  addText("Very precise.", { x: 3, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("Thanks.", { x: 7, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerohalft, "nochange")
  playTune(zerospeaking)
  addText("Maybe I can search", { x: 1, y: 13, color: color`5` });
  addText("my memory to", { x: 3, y: 14, color: color`5` });
  addText("help you.", { x: 6, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zeroloadt, "nochange")
  playTune(loading)

  await delay(5000);
  scene(currentBG, currentPlayer, zerohalft, "nochange")
  clearText()
  playTune(dotdotdot)
  addText("...", { x: 9, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerosurpriset, "nochange")
  playTune(zeroscreaming)
  addText("OH NO!!!", { x: 6, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zeroscreaming)
  addText("I REMEMBER WHY I WAS", { x: 0, y: 14, color: color`5` });
  addText("OFF THIS WHOLE TIME!", { x: 0, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zeroscreaming)
  addText("QUICK, WE GOTTA HIDE", { x: 0, y: 14, color: color`5` });
  addText("FROM THEM!", { x: 5, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("From who?", { x: 6, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(zeroscreaming)
  addText("DID YOU NOT SEE THEM", { x: 0, y: 14, color: color`5` });
  addText("ON YOUR WAY HERE?", { x: 1, y: 15, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  playTune(speaking)
  addText("I saw nobody.", { x: 3, y: 14, color: color`D` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerohalft, "nochange")
  playTune(zerospeaking)
  addText("Oh. Really?", { x: 5, y: 14, color: color`5` });
  await new Promise((res) => nextDialog = res)
  clearText()
  scene(currentBG, currentPlayer, zerohalft, "nochange")
  playTune(zerospeaking)
  addText("I guess they're", { x: 2, y: 14, color: color`5` });
  addText("gone now...", { x: 5, y: 15, color: color`5` });




};



//cutscene
var cutscene = true
scene(black, playerDarkF, zerodeadt, "nomusic")

setTimeout(function () {
  playTune(speaking)
  addText("Where...", { x: 6, y: 4, color: color`2` })

  setTimeout(function () {
    clearText()
    setTimeout(function () {
      playTune(speaking)
      addText("am I?", { x: 8, y: 4, color: color`2` })

      setTimeout(function () {
        clearText()

        level = startLevel
        setMap(levels[level])
        scene(tilet, playerF, currentZero, thelab)
        addText("PR0JECT ZER0", { x: 4, y: 3, color: color`0` })
        addText("BY CREEPERLULU", { x: 3, y: 14, color: color`0` })

        cutscene = false
        setTimeout(function () {
          clearText()

        }, 3500);
      }, 5000);
    }, 1000);
  }, 3000);
}, 1000);


setSolids(
  [player,
    wall,
    labbench1,
    labbench2,
    labbench3,
    labbench4,
    plant,
    plant2,
    capsuleb,
    noteonlabbench,
    deadbot,
    pushplant,
    noteonwall,
    zero



  ])

let level = 0
const levels = [
  map`
.........
.........
.........
....p....
.........
.........
.........`,
  map`
wwwwdwwww
♥.......♠
.♦☻...☺♣.
....p....
.☺☻...♦♣.
.........
.☺♣...♦☻.`,
  map`
wwwwwwwlw
.◘.◘.....
.•.•..♦♣.
.........
.◘....○☻.
.•.......
....p....`,
  map`
wwlw♀ww....
♥....gw....
......w....
wwww..w....
...w..wwwww
...w....◙.♥
...w.......
...w..♂....
...w.....p.`,
  map`
wwwwwlwwwww
♠.........♠
.◙.......◙.
..◙.....◙..
.◙.......◙.
..◙........
...◙...◙...
..◙.....◙..
♥....p....♥`,
  map`
◘..wwlww..◘
•.◘w...w◘k•
..•w...w•..
...w...w...
wwww...w♀xw
♥◙........♠
...........
.........◙.
.....p.....`,
  map`
wwwwwwwwwwwwwww
.......z.......
.......p.......
.....♪♪♪♪♪.....
....♪.♪...♪....
....♪♪..♪♪♪....
....♪..♪..♪....
....♪.♪...♪....
....♪.♪...♪....
.....♪♪♪♪♪.....
...............
...............`
]


const ui = [
  map`
..........
..........
..........
..........
..........
..........
..........
..........`
]


setMap(levels[level])



setPushables({
  [player]: [pushplant]
})


onInput("s", () => {
  if (cutscene != true && interacting != true) {
    scene(currentBG, playerF, currentZero, "nochange")
    getFirst(player).y += 1
  }
})

onInput("w", () => {
  if (cutscene != true && interacting != true) {
    scene(currentBG, playerB, currentZero, "nochange")
    getFirst(player).y += -1
  }
})

onInput("a", () => {
  if (cutscene != true && interaction != true) {
    scene(currentBG, playerL, currentZero, "nochange")
    getFirst(player).x += -1
  }
})

onInput("d", () => {
  if (cutscene != true && interacting != true) {
    scene(currentBG, playerR, currentZero, "nochange")
    getFirst(player).x += 1
  }
})

// Interaction controller
onInput("k", () => {
  if (cutscene != true && interacting != true) {

    switch (interaction) {

      case "note1":

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        interacting = true;
        setMap(ui[0]);
        scene(yellow, currentPlayer, currentZero, "nochange");
        clearText();
        addText("There is a reason", { x: 0, y: 1, color: color`0` });
        addText("why they are all", { x: 0, y: 2, color: color`0` });
        addText("missing. I'm scared.", { x: 0, y: 3, color: color`0` });
        addText("I'm going to hide.", { x: 0, y: 4, color: color`0` });
        addText("I need to close", { x: 0, y: 5, color: color`0` });
        addText("the door.", { x: 0, y: 6, color: color`0` });
        addText("IF I DON'T MAKE IT", { x: 0, y: 7, color: color`3` });
        addText("THE KEY IS BEHIND", { x: 0, y: 8, color: color`3` });
        addText("A CAPSULE!!!", { x: 0, y: 9, color: color`3` });
        addText("Press K to close", { x: 2, y: 14, color: color`0` });
        break;


      case "key1":
        hasKey = true;
        playTune(getItem)
        clearText();
        break;

      case "note2":

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        interacting = true;
        setMap(ui[0]);
        scene(black, currentPlayer, currentZero, "nochange");
        clearText();
        addText("Project 9515 - Logs", { x: 0, y: 1, color: color`2` });
        addText("WARNING !", { x: 0, y: 2, color: color`6` });
        addText("Cannot access", { x: 0, y: 3, color: color`6` });
        addText("modules. Make sure", { x: 0, y: 4, color: color`6` });
        addText("all components are", { x: 0, y: 5, color: color`6` });
        addText("properly connected.", { x: 0, y: 6, color: color`6` });
        addText("CRITICAL ERROR X", { x: 0, y: 7, color: color`3` });
        addText("SYSTEM HAS BEEN", { x: 0, y: 8, color: color`3` });
        addText("PHYSICALLY DAMAGED", { x: 0, y: 9, color: color`3` });
        addText("BOOT IMPOSSIBLE", { x: 0, y: 10, color: color`3` });
        addText('"bye cruel world"', { x: 0, y: 11, color: color`2` });
        addText("Press K to close", { x: 2, y: 14, color: color`2` });
        break;

      case "note3":

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        tempPlantX = getFirst(pushplant).x;
        tempPlantY = getFirst(pushplant).y;
        interacting = true;
        setMap(ui[0]);
        scene(yellow, currentPlayer, currentZero, "nochange");
        clearText();
        addText("Argh! I'm stuck", { x: 0, y: 1, color: color`0` });
        addText("again... Where", { x: 0, y: 2, color: color`0` });
        addText("did I put my", { x: 0, y: 3, color: color`0` });
        addText("J Button?", { x: 0, y: 4, color: color`7` });
        addText("Press K to close", { x: 2, y: 14, color: color`0` });
        break;

      case "note4":

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        interacting = true;
        setMap(ui[0]);
        scene(black, currentPlayer, currentZero, "nochange");
        clearText();
        addText("Project 1565 - Logs", { x: 0, y: 1, color: color`2` });
        addText("No errors.", { x: 0, y: 2, color: color`2` });
        addText("Last messages:", { x: 0, y: 3, color: color`2` });
        addText("They killed me.", { x: 0, y: 4, color: color`2` });
        addText("All my components", { x: 0, y: 5, color: color`2` });
        addText("are dead, except", { x: 0, y: 6, color: color`2` });
        addText("my battery and", { x: 0, y: 7, color: color`2` });
        addText("motherboard,", { x: 0, y: 8, color: color`2` });
        addText("hence I can still", { x: 0, y: 9, color: color`2` });
        addText("communicate. Find", { x: 0, y: 10, color: color`2` });
        addText("them. Venge me.", { x: 0, y: 11, color: color`2` });
        addText("Press K to close", { x: 2, y: 14, color: color`2` });
        break;

      case "note5":

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        interacting = true;
        setMap(ui[0]);
        scene(black, currentPlayer, currentZero, "nochange");
        clearText();
        addText("Project 1566 - Logs", { x: 0, y: 1, color: color`2` });
        addText("I tried to", { x: 0, y: 2, color: color`2` });
        addText("escape. Without", { x: 0, y: 3, color: color`2` });
        addText("success. I might", { x: 0, y: 4, color: color`2` });
        addText("not have real", { x: 0, y: 5, color: color`2` });
        addText("feelings but I'm", { x: 0, y: 6, color: color`2` });
        addText("still sad. If only I", { x: 0, y: 7, color: color`2` });
        addText("televersed myself", { x: 0, y: 8, color: color`2` });
        addText("more quickly...", { x: 0, y: 9, color: color`2` });
        addText("Goodbye, my friends.", { x: 0, y: 10, color: color`2` });
        addText("Find the ones", { x: 0, y: 11, color: color`2` });
        addText("behind all of this.", { x: 0, y: 12, color: color`2` });
        addText("Press K to close", { x: 2, y: 14, color: color`2` });
        break;

      case "note6":

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        interacting = true;
        setMap(ui[0]);
        scene(yellow, currentPlayer, currentZero, "nochange");
        clearText();
        addText("Petition for the", { x: 0, y: 1, color: color`0` });
        addText("laboratory to repair", { x: 0, y: 2, color: color`0` });
        addText("this wall that has", { x: 0, y: 3, color: color`0` });
        addText("been cracked for", { x: 0, y: 4, color: color`0` });
        addText("ages", { x: 0, y: 5, color: color`0` });
        addText("SIGN HERE:", { x: 0, y: 8, color: color`0` });
        addText("Press K to close", { x: 2, y: 14, color: color`0` });
        break;

      case "key2":
        hasKey = true;
        playTune(getItem)
        getFirst(player).y += 1;
        clearTile(getFirst(key).x, getFirst(key).y)
        getFirst(player).y += -1;
        clearText();
        break;


      case "zeromeet":
        // cutscene
        cutscene = true

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        interacting = true;
        clearText();
        zeroMeetCutscene()





        break;


    }
  } else if (cutscene != true && interacting == true) {
    clearText()
    scene(tilet, currentPlayer, currentZero, "nochange")
    setMap(levels[level])
    interacting = false;
    getFirst(player).x = tempX
    getFirst(player).y = tempY
    if (level == 3) {
      getFirst(pushplant).x = tempPlantX
      getFirst(pushplant).y = tempPlantY
    }

  } else if (cutscene == true) {
    if (nextDialog) nextDialog()
  }
})

onInput("j", () => {
  if (cutscene != true && interacting != true) {
    setMap(levels[level]);
  }
})



afterInput(() => {
  console.log(String(hasKey))
  if (cutscene != true) {
    playTune(footstep)
  }

  var winningSon = tilesWith(player, door);
  if (level == 3) {
    var plantOnGoal = tilesWith(pushplant, plantgoal);

    if (plantOnGoal.length >= 1 && hasKey == false) {
      playTune(getItem)
      hasKey = true
    }
  }
  if (level == 4) {


    if (getFirst(player).x == 8 && getFirst(player).y == 5 && hasKey == false) {
      setTimeout(function () {
        if (getFirst(player).x == 8 && getFirst(player).y == 5 && hasKey == false) {
          playTune(getItem)
          hasKey = true
        }
      }, 2000);

    }

  }

  if (level == 5) {
    isOnBrokenWall = tilesWith(player, brokenwall);

    if (wallBroken == true && tilesWith(brokenwall).length != 0) {
      clearTile(getFirst(brokenwall).x, getFirst(brokenwall).y)
    }

    if (hasKey == true && tilesWith(key).length != 0) {
      clearTile(getFirst(key).x, getFirst(key).y)
    }


    if (wallKickTimes == 5 && wallBroken != true) {
      wallBroken = true
      getFirst(player).y += 1;
      clearTile(getFirst(brokenwall).x, getFirst(brokenwall).y)
      getFirst(player).y += -1;
      playTune(getItem)
      wallKickTimes = 6
    } else {
      if (isOnBrokenWall.length >= 1) {
        playTune(error)
        wallKickTimes += 1
        getFirst(player).y += 1
      }


    }
  }


  playerOnLockedDoor = tilesWith(player, lockeddoor);


  if (cutscene != true && interacting != true) {
    // Level 2 interactions
    if (level == 2) {
      if (getFirst(player).x == 6 && getFirst(player).y == 3) {
        addText("Press K to read.", { x: 2, y: 14, color: color`0` })
        interaction = "note1";
      } else if (getFirst(player).x == 1 && getFirst(player).y == 1 && hasKey == false) {
        addText("Press K to grab.", { x: 2, y: 14, color: color`0` })
        interaction = "key1";
      } else {
        clearText()
        interaction = ""
      }
    }


    // Level 3 interactions
    if (level == 3) {
      if (getFirst(player).x == 8 && getFirst(player).y == 6) {
        addText("Press K to read logs", { x: 0, y: 14, color: color`0` })
        interaction = "note2"
      } else if (getFirst(player).x == 4 && getFirst(player).y == 1) {
        addText("Press K to read.", { x: 2, y: 14, color: color`0` })
        interaction = "note3"
      } else {
        clearText()
        interaction = ""
      }
    }

    if (level == 5) {
      if (getFirst(player).x == 1 && getFirst(player).y == 6) {
        addText("Press K to read logs", { x: 0, y: 14, color: color`0` })
        interaction = "note4"
      } else if (getFirst(player).x == 9 && getFirst(player).y == 8) {
        addText("Press K to read logs", { x: 0, y: 14, color: color`0` })
        interaction = "note5"
      } else if (getFirst(player).x == 8 && getFirst(player).y == 5) {
        addText("Press K to read.", { x: 2, y: 14, color: color`0` })
        interaction = "note6"
      } else if (getFirst(player).x == 9 && getFirst(player).y == 1 && hasKey == false) {
        addText("Press K to grab.", { x: 2, y: 14, color: color`0` })
        interaction = "key2";
      } else {
        clearText()
        interaction = ""
      }
    }


    if (level == 6) {
      if (getFirst(player).x == 7 && getFirst(player).y == 2) {
        addText("Press K to read logs", { x: 0, y: 14, color: color`0` })
        interaction = "zeromeet"
      } else {
        clearText()
        interaction = ""
      }
    }



  }

  if (winningSon.length >= 1) {
    level = level + 1;
    console.log(String(level))

    if (level < levels.length) {
      scene(currentBG, playerB, currentZero, "nochange")
      setMap(levels[level]);
      if (level == 6) {
          scene(currentBG, playerB, currentZero, "nomusic")
        }
      clearText();
    } else {
      addText("Congratulations.", { x: 2, y: 7, color: color`0` })
      addText("You are now", { x: 4, y: 8, color: color`0` })
      addText("a free robot.", { x: 3, y: 9, color: color`0` })
    }
  }

  if (playerOnLockedDoor.length >= 1) {

    if (hasKey == true) {
      hasKey = false;
      level = level + 1;
      console.log(String(level))

      if (level < levels.length) {
        scene(currentBG, playerB, currentZero, "nochange")
        setMap(levels[level]);
        if (level == 6) {
          scene(currentBG, playerB, currentZero, "nomusic")
        }


          
        clearText();
      } else {
        addText("Congratulations.", { x: 2, y: 7, color: color`0` })
        addText("You are now", { x: 4, y: 8, color: color`0` })
        addText("a free robot.", { x: 3, y: 9, color: color`0` })
      }
    } else {
      playTune(error)
      addText("Door is locked.", { x: 2, y: 14, color: color`0` })
      getFirst(player).y += 1
    }
  }
})