$(document).ready(function()
{

document.getElementById("contenu-bl-list").innerHTML="";

$.getJSON("php/6_GestionAgents/AfficherAgent.php",

     function(donnees)
	 {

         for ( var i = 0; i < donnees.utilisateur.length; i++)
		 {
             
			 if(donnees.utilisateur[0].id_utilisateur != 0 )
			{

			 
			 
			     $('#contenu-bl-list').append('<div id="bloc-agent"><div class="img-bloc-agent"><img src="assets/images/'+donnees.utilisateur[i].images+'" width="100px" height="100px"  /></div><div class="cont-bloc-agent"> <p id="tit-cont-bloc-agent">'+donnees.utilisateur[i].prenom+' '+donnees.utilisateur[i].nom+'</p><p id="det-cont-bloc-agent">'+donnees.utilisateur[i].role+'<br>ID:'+donnees.utilisateur[i].id_utilisateur+'</p><a href="javascript:detailAgent('+donnees.utilisateur[i].id_utilisateur+');"  class="button" style="background:#1e88e5;">Modifier</a><a href="javascript:suppAgent('+donnees.utilisateur[i].id_utilisateur+');"  class="button btn-annuler" >Supprimer</a><div id="det-agent'+donnees.utilisateur[i].id_utilisateur+'" style="display:none;float:left;"><br><br>Nom Agent:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="nomAg'+donnees.utilisateur[i].id_utilisateur+'" value="'+donnees.utilisateur[i].nom+'"/><br><br>Prénom Agent:&nbsp;&nbsp;<input type="text" id="prenomAg'+donnees.utilisateur[i].id_utilisateur+'" value="'+donnees.utilisateur[i].prenom+'"/><br><br>Role Agent:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="roleAg'+donnees.utilisateur[i].id_utilisateur+'" value="'+donnees.utilisateur[i].role+'"/><br><br>Tel Agent:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="telAg'+donnees.utilisateur[i].id_utilisateur+'" value="'+donnees.utilisateur[i].tel+'"/><br><br>Login Agent:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="loginAg'+donnees.utilisateur[i].id_utilisateur+'" value="'+donnees.utilisateur[i].login+'"/><br><br>Mdp Agent:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" id="mdpAg'+donnees.utilisateur[i].id_utilisateur+'" value="'+donnees.utilisateur[i].mdp+'" /><br><br><center><a href="javascript:modAgent('+donnees.utilisateur[i].id_utilisateur+');" class="button">OK</a></center></div></div></div>');

            }
         }
		
     });


});

function detailAgent(id)
{

     if(document.getElementById("det-agent"+id).style.display == "none")
	 {
	 
       document.getElementById("det-agent"+id).style.display="inline-block";
     
	 }
     else
	 {
	 
       document.getElementById("det-agent"+id).style.display="none";
	   
     }
}

function modAgent(id)
{

var nomAg=document.getElementById("nomAg"+id).value;

var prenomAg=document.getElementById("prenomAg"+id).value;

var roleAg=document.getElementById("roleAg"+id).value;

var telAg=document.getElementById("telAg"+id).value;

var loginAg=document.getElementById("loginAg"+id).value;

var mdpAg=document.getElementById("mdpAg"+id).value;

var dataString ='nomAg='+nomAg+'&prenomAg='+prenomAg+'&roleAg='+roleAg+'&telAg='+telAg+'&loginAg='+loginAg+'&mdpAg='+mdpAg+'&idAg='+id;

$.getJSON("php/6_GestionAgents/ModifierAgent.php",dataString,

     function(donnees)
	 {
	 
         location.reload();
     });
}

function suppAgent(id)
{

     var dataString ='idAg='+id;
	 
     $.getJSON("php/6_GestionAgents/SupprimerAgent.php",dataString,
	 
         function(donnees)
		 {
             location.reload();
         });
}

function AjAgent()
{
 
  var AjNomAgent=document.getElementById("AjNomAgent").value;
  
  var AjPrenomAgent=document.getElementById("AjPrenomAgent").value;
  
  var AjTelAgent=document.getElementById("AjTelAgent").value;
  
  var AjLoginAgent=document.getElementById("AjLoginAgent").value;
  
  var AjMdpAgent=document.getElementById("AjMdpAgent").value;
  
  var dataString ='AjNomAgent='+AjNomAgent+'&AjPrenomAgent='+AjPrenomAgent+'&AjTelAgent='+AjTelAgent+'&AjLoginAgent='+AjLoginAgent+'&AjMdpAgent='+AjMdpAgent;
  
  $.getJSON("php/6_GestionAgents/AjouterAgent.php",dataString,
  
     function(donnees){
	 
         location.reload();
		 
     });
   
}




