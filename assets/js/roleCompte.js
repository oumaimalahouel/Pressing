$(document).ready(function() 
{
    var nomAdmin=sessionStorage.getItem("nom");
	
    var prenomAdmin=sessionStorage.getItem("prenom");
	
    var imagesAdmin=sessionStorage.getItem("images");
	
    var roleAdmin=sessionStorage.getItem("role");
	
    if( roleAdmin == null)
	{
     
	 location.href = "index";
	 
    }
	
    if( roleAdmin != "admin")
	{
     document.getElementById("administration").innerHTML=nomAdmin+' '+prenomAdmin;
	 
     document.getElementById("role-user").innerHTML='<br>'+roleAdmin;
	 
     document.getElementById("admin-compta").style.display="none";
	 
     document.getElementById("admin-produits").style.display="none";
	 
     document.getElementById("admin-agents").style.display="none";
	 
    }
    else
    {
    document.getElementById("administration").innerHTML=nomAdmin+' '+prenomAdmin;
	
    document.getElementById("role-user").innerHTML='<br>'+roleAdmin;
	
    document.getElementById("admin-compta").style.display="inline";
	
    document.getElementById("admin-produits").style.display="inline";
	
    document.getElementById("admin-agents").style.display="inline";
	
    }


});


function deconnexion(){

  sessionStorage.clear();
  
  location.href = "index";
}



/*** afficher la date a l'entete */

$(document).ready(function(){
ladate=new Date();
var jour=ladate.getDate();
var mois=ladate.getMonth()+1;
var resultmois; 
switch (mois) {
    case 1:
        resultmois = "Janvier";
        break;
    case 2:
        resultmois = "Fevrier";
        break;
    case 3:
        resultmois = "Mars";
        break;
    case 4:
        resultmois = "Avril";
        break;
    case 5:
        resultmois = "Mai";
        break;
    case 6:
        resultmois = "Juin";
        break;
    case 7:
        resultmois = "Juillet";
        break;
    case 8:
        resultmois = "Aout";
        break;
		case 9:
        resultmois = "Septembre";
        break;
		case 10:
        resultmois = "Octobre";
        break;
		case 11:
        resultmois = "Novembre";
        break;
		case 12:
        resultmois = "Decembre";
        break;
}

var annee=ladate.getFullYear();

var heure=ladate.getHours();

var minutes=ladate.getMinutes();

document.getElementById("pos-heure").innerHTML='<span style="font-size:25px;">'+heure+':'+minutes+'</span><br>'+jour+' '+resultmois+' '+annee;

});

