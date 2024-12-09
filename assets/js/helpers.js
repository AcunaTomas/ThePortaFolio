window.setTimeout(resizeCheck,1);

var squareContMinWidth = document.querySelector(':root');
lementos = document.getElementsByClassName("FlexibleBlock SquareContainer");

function resizeCheck()
{
    squareContMinWidth.style.setProperty("--adaptiveminWidth",25 + "vh"); //I am going to forget I put this here... 
}

