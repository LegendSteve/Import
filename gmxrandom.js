var lsg = function(name) {return localStorage.getItem(name)};

function randomausfüllen(){
    var inputs = document.getElementsByTagName("input");

    console.log(inputs);
    inputs[0].value = lsg("vorname").toLowerCase()+"."+lsg("nachname").toLowerCase();



    inputs[4].value = lsg("vorname");
    inputs[5].value = lsg("nachname");
}