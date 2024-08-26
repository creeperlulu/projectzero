/*
@title: Project Zero
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "p"

const playerF =  bitmap`
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
const playerB =  bitmap`
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
const playerR =  bitmap`
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
const playerL =  bitmap`
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


const speaking = tune`
37.5: D4-37.5 + D5-37.5 + G5-37.5 + A4-37.5,
37.5: D4-37.5 + D5-37.5 + A5-37.5 + A4-37.5,
37.5: D4-37.5 + D5-37.5 + G5-37.5 + A4-37.5,
37.5: C4-37.5 + C5-37.5 + F5-37.5 + A4-37.5,
1050`
const footstep = tune`
60: C4~60,
1860`
const intro = tune`
15000: D4-15000,
465000`

const background = "b"
const tile = bitmap`
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
const wall = "w"
const door = "d"


//cutscene
var cutscene = true
setLegend(
  //decoration
  [ capsulet, capsulett],
  
  [ player, playerDarkF],
  [ wall, bitmap`
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
LLLLLLLLLLLLLLLL
111111111111L111
111111111111L111
111111111111L111
111111111111L111
111111111111L111
111111111111L111
111111111111L111
LLLLLLLLLLLLLLLL`],
  [ door, bitmap`
1110111111110111
111011LLLL110111
1110111111110111
111011LLLL110111
1110111111110111
111011LLLL110111
1110111111110111
LLL0111111110LLL
111011111LL10111
1110111111L10111
1110111111110111
1110111111110111
1110111111110111
1110111111110111
11101LLLLLL10111
LLL0111111110LLL`],
  [ background, black],

//decoration
  [ labbench1, labbench1t],
  [ labbench2, labbench2t],
  [ labbench3, labbench3t],
  [ labbench4, labbench4t],
  [ plant, plantt],
  [ plant2, plant2t],
  [ capsuleb, capsulebt]
)
setBackground(background)

setTimeout(function(){
  playTune(speaking)
  addText("Where...", {x: 6, y: 4, color: color`2`})
  
  setTimeout(function(){
  clearText()
    setTimeout(function(){
  playTune(speaking)
  addText("am I?", {x: 8, y: 4, color: color`2`})

  setTimeout(function(){
  clearText()
    
  level = 1
  setMap(levels[level])
  playTune(intro)
  setLegend(
  [ player, playerF],
  [ background, tile]
)
  addText("PR0JECT ZER0", {x: 4, y: 3, color: color`0`})
  addText("BY CREEPERLULU", {x: 3, y: 14, color: color`0`})
  
//setBackground(tile)
  cutscene = false
    setTimeout(function(){
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
   capsuleb
   
  

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
wwwwwwwdw
.◘.◘.....
.•.•.....
.........
.◘.......
.•.......
....p....`
]

setMap(levels[level])



setPushables({
  [ player ]: []
})


onInput("s", () => {
  if (cutscene != true) {
  setLegend([player, playerF])
  getFirst(player).y += 1
}})

onInput("w", () => {
  if (cutscene != true) {
  setLegend([ player, playerB])
  getFirst(player).y += -1
}})

onInput("a", () => {
  if (cutscene != true) {
  setLegend([ player, playerL])
  getFirst(player).x += -1
}})

onInput("d", () => {
  if (cutscene != true) {
  setLegend([ player, playerR])
  getFirst(player).x += 1
}})


afterInput(() => {
  playTune(footstep)
  
  const winningSon = tilesWith(player, door);

  if (winningSon.length >= 1) {
    level = level + 1;
    console.log(String(level))

  if (level < levels.length) {
    setLegend(
  //decoration
  [ capsulet, capsulett],
  
  [ player, playerB],
  [ wall, bitmap`
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
1111111L11111111
LLLLLLLLLLLLLLLL
111111111111L111
111111111111L111
111111111111L111
111111111111L111
111111111111L111
111111111111L111
111111111111L111
LLLLLLLLLLLLLLLL`],
  [ door, bitmap`
1110111111110111
111011LLLL110111
1110111111110111
111011LLLL110111
1110111111110111
111011LLLL110111
1110111111110111
LLL0111111110LLL
111011111LL10111
1110111111L10111
1110111111110111
1110111111110111
1110111111110111
1110111111110111
11101LLLLLL10111
LLL0111111110LLL`],
  [ background, tile],

//decoration
  [ labbench1, labbench1t],
  [ labbench2, labbench2t],
  [ labbench3, labbench3t],
  [ labbench4, labbench4t],
  [ plant, plantt],
  [ plant2, plant2t],
  [ capsuleb, capsulebt]
)
    setMap(levels[level]);
    clearText();
  } else {
  addText("Congratulations.", {x: 2, y: 7, color: color`0`})
  addText("You are now", {x: 4, y: 8, color: color`0`})
  addText("a free robot.", {x: 3, y: 9, color: color`0`})
  }
}
})