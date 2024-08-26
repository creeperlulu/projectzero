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
const intro = tune`
15000: D4-15000,
465000`
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


// main
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
var hasKey = false;


// ----------START---------


//CHANGE THIS FOR LEGEND
function scene(backgroundtexture, playertexture) {
  setLegend(
    //decoration foreground
    [capsulet, capsulett],

    //main
    [player, playertexture],
    [wall, wallt],
    [door, doort],
    [lockeddoor, doort],
    [plantgoal, plantgoalt],


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

    //interactive
    [noteonlabbench, noteonlabbencht],
    [noteonwall, noteonwallt],

    // ui
    [background, backgroundtexture],

  )
  setBackground(background)
  currentBG = backgroundtexture
  currentPlayer = playertexture
}



//cutscene
var cutscene = true
scene(black, playerDarkF)

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

        level = 1
        setMap(levels[level])
        playTune(intro)
        scene(tile, playerF)
        addText("PR0JECT ZER0", { x: 4, y: 3, color: color`0` })
        addText("BY CREEPERLULU", { x: 3, y: 14, color: color`0` })

        //setBackground(tile)
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
    noteonwall



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
◘..wwdww..◘
•.◘w...w◘.•
..•w...w•..
...w...w...
wwww...w♀ww
♥◙........♂
...........
.........◙.
.....p.....`,
  map`
wwwwwwwwwwwwwwwwwwwww
..........◙..........
.....................
.....................
........♪♪♪♪♪........
.......♪.♪...♪.......
.......♪♪..♪♪♪.......
.......♪..♪..♪.......
.......♪.♪...♪.......
.......♪.♪...♪.......
........♪♪♪♪♪........
.....................
.....................
.....................
..........p..........`
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
    scene(currentBG, playerF)
    getFirst(player).y += 1
  }
})

onInput("w", () => {
  if (cutscene != true && interacting != true) {
    scene(currentBG, playerB)
    getFirst(player).y += -1
  }
})

onInput("a", () => {
  if (cutscene != true && interaction != true) {
    scene(currentBG, playerL)
    getFirst(player).x += -1
  }
})

onInput("d", () => {
  if (cutscene != true && interacting != true) {
    scene(currentBG, playerR)
    getFirst(player).x += 1
  }
})

// Interaction controller
onInput("k", () => {
  if (interacting != true) {

    switch (interaction) {

      case "note1":

        tempX = getFirst(player).x;
        tempY = getFirst(player).y;
        interacting = true;
        setMap(ui[0]);
        scene(yellow, currentPlayer);
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
        scene(black, currentPlayer);
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
        scene(yellow, currentPlayer);
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
        scene(black, currentPlayer);
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
        scene(black, currentPlayer);
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
        addText("behind all of this.", { x: 0, y: 11, color: color`2` });
        addText("Press K to close", { x: 2, y: 14, color: color`2` });
        break;
    }
  } else {
    clearText()
    scene(tile, playerF)
    setMap(levels[level])
    interacting = false;
    getFirst(player).x = tempX
    getFirst(player).y = tempY
    getFirst(pushplant).x = tempPlantX
    getFirst(pushplant).y = tempPlantY
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
  playerOnLockedDoor = tilesWith(player, lockeddoor);


  if (interacting != true) {
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
      scene(currentBG, playerB)
      setMap(levels[level]);
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
        scene(currentBG, playerB)
        setMap(levels[level]);
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