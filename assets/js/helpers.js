//window.setTimeout(resizeCheck,1);


window.setTimeout(ruleEta,1);

var squareContMinWidth = document.querySelector(':root');
lementos = document.getElementsByClassName("FlexibleBlock SquareContainer");

function resizeCheck()
{
    squareContMinWidth.setProperty("--adaptiveminWidth",25 + "vh"); //I am going to forget I put this here... 
}

function ruleEta()
{
    
}