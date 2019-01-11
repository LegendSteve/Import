var lsg = function(name) {return localStorage.getItem(name)};

function randomvorhanden(){
    var inputs = document.getElementsByTagName("inputs");

    console.log(inputs);

    inputs[3].value = "Hallo";
}
