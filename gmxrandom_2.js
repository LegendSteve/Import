var lsg = function(name) {return localStorage.getItem(name)};

function randomvorhanden(vorname,nachname){
    var inputs = document.getElementsByTagName("inputs");

    for(i = 0; i < inputs.length; i++){
        var input = inputs[i];

        if(input.getAttribute("data-test") == "first-name-input"){
            input.value = "hallo";
        }

        switch(input.getAttribute("data-test")){
            case "first-name-input": input.value = lsg("vorname"); break;
            case "last-name-input": input.value = lsg("nachname"); break;
        }
    }
}