let pianoAudio = {
  b: new Audio("./pianooAudio/B.mp3"),
  c: new Audio("./pianooAudio/C.mp3"),
  d: new Audio("./pianooAudio/D.mp3"),
  e: new Audio("./pianooAudio/E.mp3"),
  f: new Audio("./pianooAudio/F.mp3"),
  g: new Audio("./pianooAudio/G.mp3"),
  i: new Audio("./pianooAudio/I.mp3"),
  j: new Audio("./pianooAudio/J.mp3"),
  k: new Audio("./pianooAudio/K.mp3"),
  l: new Audio("./pianooAudio/L.mp3"),
  m: new Audio("./pianooAudio/M.mp3"),
  n: new Audio("./pianooAudio/N.mp3"),
  o: new Audio("./pianooAudio/O.mp3"),
  p: new Audio("./pianooAudio/P.mp3"),
  q: new Audio("./pianooAudio/Q.mp3"),
  r: new Audio("./pianooAudio/R.mp3"),
  s: new Audio("./pianooAudio/S.mp3"),
  t: new Audio("./pianooAudio/T.mp3"),
  u: new Audio("./pianooAudio/U.mp3"),
  v: new Audio("./pianooAudio/V.mp3"),
  w: new Audio("./pianooAudio/W.mp3"),
  x: new Audio("./pianooAudio/X.mp3"),
  y: new Audio("./pianooAudio/Y.mp3"),
  z: new Audio("./pianooAudio/Z.mp3"),
  0: new Audio("./pianooAudio/0.mp3"),
  2: new Audio("./pianooAudio/2.mp3"),
  3: new Audio("./pianooAudio/3.mp3"),
  4: new Audio("./pianooAudio/4.mp3"),
  6: new Audio("./pianooAudio/6.mp3"),
  7: new Audio("./pianooAudio/7.mp3"),
  9: new Audio("./pianooAudio/9.mp3"),
  ",": new Audio("./pianooAudio/(,).mp3"),
  ".": new Audio("./pianooAudio/(.).mp3"),
  "{": new Audio("./pianooAudio/{.mp3"),
  "}": new Audio("./pianooAudio/}.mp3"),
  backspace: new Audio("./pianooAudio/backSpace.mp3")
};

let li = document.querySelectorAll("li");

function playAudio(char) {
  if (pianoAudio[char]) {
    pianoAudio[char].currentTime = 0;
    pianoAudio[char].play();
  } else {
    console.log("No audio mapped for:", char);
    return;
  }
}

document.body.addEventListener("keydown", (ele) => {
  let key = ele.key;
  key = key.toLowerCase();

  playAudio(key);
});

li.forEach((ele) => {
  ele.addEventListener("click", () => {
    let key = ele.id;

    playAudio(key);
  });
})
