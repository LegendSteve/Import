var divs = document.getElementsByClassName("onereg-header__container l-horizontal");
var oben = divs[0];

myScript = document.createElement("script");
myScript.setAttribute("src","https://gitcdn.link/repo/LegendSteve/Erweiterung/master/gmxrandom.js")
myScript.type = "text/javascript";
document.body.appendChild(myScript);

myButton = document.createElement("input");
myButton.type = "button";
myButton.value = "Zufall";
myButton.setAttribute("onclick","zahl();")
myButton.style.color = "black"
oben.appendChild(myButton);