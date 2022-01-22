var [c1, c2, c3, c4] = [0, 0, 0, 0];

function gplatform() {
  document.getElementById("gProducts").style.display = "none";
  document.getElementById("gResource").style.display = "none";
  document.getElementById("gSignIn").style.display = "none";

  if (c1 == 0) {
    document.getElementById("gPlatformshow").style.display = "flex";
    [c1, c2, c3, c4] = [1, 0, 0, 0];
  } else if (c1 > 0) {
    document.getElementById("gPlatformshow").style.display = "none";
    [c1, c2, c3, c4] = [0, 0, 0, 0];
  }
}
function gProducts() {
  document.getElementById("gPlatformshow").style.display = "none";
  document.getElementById("gResource").style.display = "none";
  document.getElementById("gSignIn").style.display = "none";
  if (c2 == 0) {
    document.getElementById("gProducts").style.display = "flex";
    [c1, c2, c3, c4] = [0, 1, 0, 0];
  } else if (c2 > 0) {
    document.getElementById("gProducts").style.display = "none";
    // [c2, c3, c3, c4] = [0, 0, 0, 0];
  }
}
function gResource() {
  document.getElementById("gPlatformshow").style.display = "none";
  document.getElementById("gProducts").style.display = "none";
  document.getElementById("gSignIn").style.display = "none";
  if (c3 == 0) {
    document.getElementById("gResource").style.display = "flex";
    [c2, c2, c3, c4] = [0, 0, 1, 0];
  } else if (c3 > 0) {
    document.getElementById("gResource").style.display = "none";
    [c2, c3, c2, c4] = [0, 0, 0, 0];
  }
}
function gSignIn() {
  document.getElementById("gPlatformshow").style.display = "none";
  document.getElementById("gProducts").style.display = "none";
  document.getElementById("gResource").style.display = "none";
  if (c4 == 0) {
    document.getElementById("gSignIn").style.display = "flex";
    [c2, c3, c2, c4] = [0, 0, 0, 1];
  } else if (c4 > 0) {
    document.getElementById("gSignIn").style.display = "none";
    [c2, c3, c2, c4] = [0, 0, 0, 0];
  }
}
