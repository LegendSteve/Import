function zahl(){
    var zahl = Math.floor(Math.random() * 100 ) + 1;
    alert(zahl);
}

var gid = function(name) {return document.getElementById(name)};

function zeigeinputs(){
	var inputs = document.getElementsByTagName("input");
	console.log(inputs);
}

for(i = 0; i < inputs.length; i++){
    var input = inputs[i];

    console.log(input.getAttribute("data-test"))
    switch(input.getAttribute("data-test")){
        case "first-name-input": input.value = "StefanBitches"; break;
    }
}



function random(){

	rndmGe = Math.floor(Math.random() *2) + 1;
	if(rndmGe == 1){
		Mann();
	}
	else if(rndmGe == 2){
		Frau();
	}

	function Mann(){
		console.log("Es ist ein Mann");

		checkboxMann.checked = true;
		checkboxFrau.checked = false;

		var bubennamen = [];
		var xml = new XMLHttpRequest();
		xml.open('GET','random.xml',false);

		xml.onreadystatechange = function() {
			if (xml.readyState === 4){
				var doc = xml.responseXML;
				var einträge = doc.getElementsByTagName('bubeneintrag');

				for (var i = 0, l = einträge.length; i < l; i++){
					var entry = einträge[i];
					var bnEl = entry.getElementsByTagName('name')[0];
					bubennamen.push(bnEl.textContent);
					}

					var random = Math.floor(Math.random() * einträge.length);
					var randomstelle = random + 1;	
				console.log("Das ist der "+randomstelle+". Name: "+bubennamen[random]);
				textboxVorname.value = bubennamen[random];		
			}
		}
		xml.send(null);

		//zum Nachnamen (egal welches Geschlecht)
		Nachname();
	}

	function Frau(){
		console.log("Es ist eine Frau");

		checkboxFrau.checked = true;
		checkboxMann.checked = false;

		var mädchennamen = [];
		var xml = new XMLHttpRequest();
		xml.open('GET','random.xml',false);

		xml.onreadystatechange = function() {
			if (xml.readyState === 4){
				var doc = xml.responseXML;
				var einträge = doc.getElementsByTagName('mädcheneintrag');

				for (var i = 0, l = einträge.length; i < l; i++){
					var entry = einträge[i];
					var mnEl = entry.getElementsByTagName('name')[0];
					mädchennamen.push(mnEl.textContent);
					}

					var random = Math.floor(Math.random() * einträge.length);
					var randomstelle = random + 1;	
				console.log("Das ist der "+randomstelle+". Name: "+mädchennamen[random]);
				textboxVorname.value = mädchennamen[random];		
			}
		}
		xml.send(null);

		//zum Nachnamen (egal welches Geschlecht)
		Nachname();
	}

	//Random Nachname
	function Nachname (){
		var nachnamen = [];
		var xml = new XMLHttpRequest();
		xml.open('GET','random.xml',false);

		xml.onreadystatechange = function() {
			if (xml.readyState === 4){
				var doc = xml.responseXML;
				var einträge = doc.getElementsByTagName('nachnameneintrag');

				for (var i = 0, l = einträge.length; i < l; i++){
					var entry = einträge[i];
					var nnEl = entry.getElementsByTagName('name')[0];
					nachnamen.push(nnEl.textContent);
					}

					var random = Math.floor(Math.random() * einträge.length);
					var randomstelle = random + 1;	
				console.log("Das ist der "+randomstelle+". Name: "+nachnamen[random]);
				textboxNachname.value = nachnamen[random];		
			}
		}
		xml.send(null);

		//Die Email, welche Vorname und Nachname beinhaltet
		Land();
	}
	
	function Land(){
		var länder = [];
		var xml = new XMLHttpRequest();
		xml.open('GET','random.xml',false);

		xml.onreadystatechange = function() {
			if (xml.readyState === 4){
				var doc = xml.responseXML;
				var einträge = doc.getElementsByTagName('ländereintrag');

				for (var i = 0, l = einträge.length; i < l; i++){
					var entry = einträge[i];
					var laEl = entry.getElementsByTagName('name')[0];
					länder.push(laEl.textContent);
					}

					var random = Math.floor(Math.random() * einträge.length);
					var randomstelle = random + 1;	
				console.log("Das ist das "+randomstelle+". Land: "+länder[random]);
				textboxLand.value = länder[random];		
			}
		}
		xml.send(null);

		//Die Email, welche Vorname, Nachname und Land beinhaltet
		Email(textboxVorname.value, textboxNachname.value, textboxLand.value);
	}

	function Email(Vorname, Nachname, Land){
		switch(Land){
			case 'Österreich': var landabk = 'at'; break;
			case 'Deutschland': var landabk = 'de'; break;
			case 'Schweiz': var landabk = 'ch'; break;
		}

		//Random Email-Seite
		var email = [];
		var xml = new XMLHttpRequest();
		xml.open('GET','random.xml',false);

		xml.onreadystatechange = function() {
			if (xml.readyState === 4){
				var doc = xml.responseXML;
				var einträge = doc.getElementsByTagName('emaileintrag');

				for (var i = 0, l = einträge.length; i < l; i++){
					var entry = einträge[i];
					var emEl = entry.getElementsByTagName('name')[0];
					email.push(emEl.textContent);
					}

					var random = Math.floor(Math.random() * einträge.length);
					var randomstelle = random + 1;	
					console.log("Das ist die "+randomstelle+". Email-Seite: "+email[random]);
					randomemailseite = email[random];
			}
		}
		xml.send(null);

		textboxEmail.value = Vorname.toLowerCase()+'.'+Nachname.toLowerCase()+'@'+randomemailseite+'.'+landabk;

		//Sprache ausführen mit dem Land
		Sprache(landabk);
	}

	function Sprache(Land){
		switch(Land){
			case 'at': var sprache = 'Deutsch'; break;
			case 'de': var sprache = 'Deutsch'; break;
			case 'ch': var sprache = 'Deutsch'; break;
		}

		textboxSprache.value = sprache;

		//Geburtstag (unabhängig von allem)
		Geburtstag();
	}

	function Geburtstag(){
		var Altertt;
		var Altermm;
		var Alterjj;

		var randomalter = Math.floor(Math.random() * 22) + 1;

		var d = new Date;
		var diesesjahr= d.getFullYear();
		var mindestens = diesesjahr - 18;

		Alterjj = mindestens - randomalter;
		textboxAlterjj.value = Alterjj;

		Alter = diesesjahr - Alterjj;

		console.log("Alter: "+Alter);

		foAlter.innerHTML = "Alter: "+Alter;

		Altermm = Math.floor(Math.random() * 12) + 1;
		textboxAltermm.value = Altermm;


		switch(Altermm){
			case 1: Altertt = Math.floor(Math.random() * 31) + 1;break;
			case 2: Schaltjahr(); break;
			case 3: Altertt = Math.floor(Math.random() * 31) + 1;break;
			case 4: Altertt = Math.floor(Math.random() * 30) + 1;break;
			case 5: Altertt = Math.floor(Math.random() * 31) + 1;break;
			case 6: Altertt = Math.floor(Math.random() * 30) + 1;break;
			case 7: Altertt = Math.floor(Math.random() * 31) + 1;break;
			case 8: Altertt = Math.floor(Math.random() * 31) + 1;break;
			case 9: Altertt = Math.floor(Math.random() * 30) + 1;break;
			case 10: Altertt = Math.floor(Math.random() * 31) + 1;break;
			case 11: Altertt = Math.floor(Math.random() * 30) + 1;break;
			case 12: Altertt = Math.floor(Math.random() * 31) + 1;break;

		}

		function Schaltjahr(){
			Alterjj %= 4;

			if(Alterjj != 0){
				console.log("Kein Schaltjahr.");
				Altertt = Math.floor(Math.random() * 28) + 1;
            }
            else{
				console.log("Schaltjahr.");
					Altertt = Math.floor(Math.random() * 29)
            }
		}
		 
		textboxAltertt.value = Altertt;
	}

}
