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
    // var className = "crack" + eval(crackCount);
    var className = "crack" + crackCount;
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class", className + " crack-container");
    crackCount ++;

    var innerCrack = document.createElement("div");
    console.log(crackCount);
    if (crackCount === 1) {
      innerCrack.setAttribute("class", "crack");
    }
    if (crackCount === 2) {
      innerCrack.setAttribute("class", "crack-3");
    }
    if (crackCount === 3) {
      innerCrack.setAttribute("class", "crack-2");
      setTimeout(() => {
        console.log('glass should explode now')
      },300)
    } 
    
    newDiv.appendChild(innerCrack);

    document.body.appendChild(newDiv);

    newDiv.style.top = top + "px";
    newDiv.style.left = left + "px";
    
  }

  window.addEventListener("click", function(e) {
    createCrack(e.pageY, e.pageX);
  });
}