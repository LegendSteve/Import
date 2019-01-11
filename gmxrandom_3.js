var lsg = function(name) {return localStorage.getItem(name)};

function randomvorhanden(vorname,nachname){
    var inputs = document.getElementsByTagName("inputs");

    for(i = 0; i < inputs.length; i++){
        var input = inputs[i];
        input.value = "ich bin cool";
    }
}