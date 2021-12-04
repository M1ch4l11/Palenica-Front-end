

function ukazMuTo() {
   
        var meno = document.getElementById("Meno").value;
        var Priezvisko = document.getElementById("Priezvisko").value;
        var Email = document.getElementById("Email").value;
        var Tel = document.getElementById("Tel").value;
        var Sprava = document.getElementById("Sprava").value;
    var stav = false;
    for (var index = 0; index < Email.length; index++) {
        if(Email.charAt(index)=='@')stav=true;
    }
    if(meno=="")alert("Zadajte --> meno");
    else if(Priezvisko=="")alert("Zadajte --> priezvisko.");
    else if (Email=="")alert("Zadajte --> e-mail.");
    else if (Tel=="")alert("Zadajte --> tel:cislo.");
    else if (!stav)alert("Nesprávny formát --> e-mail.");
    else {
        alert( "Meno: --> " + meno + "\n" 
    + "Priezvisko: -->  " + Priezvisko + "\n"
    + "Email: -->  " + Email + "\n"
    + "Tel: -->  " + Tel + "\n"
    + "Vaša Správa: ---> \n" + Sprava + "\n \n"
    + "Vaše údaje boli úspešne odoslané, \n budeme sa snažit odpovedať čo najskôr." );
    }
}




