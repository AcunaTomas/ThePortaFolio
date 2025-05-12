//window.setTimeout(resizeCheck,1);
//window.setTimeout(ruleEta,1);


//window.addEventListener('DOMContentLoaded', ruleEta())


var squareContMinWidth = document.querySelector(':root');
lementos = document.getElementsByClassName("FlexibleBlock SquareContainer");

function resizeCheck()
{
    squareContMinWidth.setProperty("--adaptiveminWidth",25 + "vh"); //I am going to forget I put this here... 
}

function ruleEta()
{
    var elelm = document.createElement("ul")
    elelm.innerHTML = navBar
    elelm.className = "navBarContainer bar"
    body = document.getElementsByTagName("body")
    body[0].insertBefore(elelm, body[0].children[1]) //place ir AFTER the title bar
    body.lang = currentLang
}