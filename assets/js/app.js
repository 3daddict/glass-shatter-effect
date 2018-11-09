$(document).ready(InitApp);

function InitApp() {
  console.log("App Ready");
  glassCrack();
}

function glassCrack() {
  var crackCount = 0;
  
  var preLoad = document.getElementsByClassName("preload")[0];
  preLoad.style.display = "none";
  function createCrack(top, left) {
    crackCount++;
    // var className = "crack" + eval(crackCount);
    var className = "crack" + crackCount;
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", className + " crack-container");

    var innerCrack = document.createElement("div");
    innerCrack.setAttribute("class", "crack");
    newDiv.appendChild(innerCrack);

    document.body.appendChild(newDiv);

    newDiv.style.top = top + "px";
    newDiv.style.left = left + "px";

    console.log(crackCount);
  }

  window.addEventListener("click", function(e) {
    createCrack(e.pageY, e.pageX);
  });
}
