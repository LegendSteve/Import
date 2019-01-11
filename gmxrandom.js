var lsg = function(name) {return localStorage.getItem(name)};

function randomvorhanden(vorname,nachname){
    var inputs = document.getElementsByTagName("inputs");

    for(i = 0; i < inputs.length; i++){
        var input = inputs[i];
        
        switch(input.getAttribute("data-test")){
            case "first-name-input": input.value = vorname; break;
            case "last-name-input": input.value = nachname; break;
        }
    }
}