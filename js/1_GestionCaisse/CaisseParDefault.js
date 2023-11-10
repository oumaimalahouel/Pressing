
   $(document).ready(function() {
   
    var ticket=sessionStorage.getItem("ticket");
	
	    if ( ticket != null){
	  document.getElementById("numTicket").innerHTML="Ticket N:"+ticket;
	listProduitsCommander(ticket);
	}
	else
	{
	  document.getElementById("alertCommVide").style.display="block";
	}
	
	});
	
	
   $(document).ready(function()
   {
   
   var url = window.location.search;
   
   var sessionProd=sessionStorage.getItem("idProd");
   
   
         if (url.length != 0 && sessionProd != "no" )
		 {
		 
             var id_client=sessionStorage.getItem("ClientCourant");
			 
             var id_commande=sessionStorage.getItem("CommandeCourant");
			 
             var operation=sessionStorage.getItem("operation");
			 
             var idProd=url.substring(url.indexOf("idProd=")+7,url.indexOf("&nomProd"));
			 
             var nomProd=url.substring(url.indexOf("&nomProd")+9,url.indexOf("&Prix1Prod="));
			 
             var Prix1Prod=url.substring(url.indexOf("&Prix1Prod")+11,url.indexOf("&Prix2Prod"));
			 
             var Prix2Prod=url.substring(url.indexOf("&Prix2Prod")+11,url.length);
			 
             var qteNoir=sessionStorage.getItem("qteNoir");
			 
			 /*
			 
             var qteBlanc=sessionStorage.getItem("qteBlanc");
			 
             var qteRouge=sessionStorage.getItem("qteRouge");
			 
             var qteBleu=sessionStorage.getItem("qteBleu");
			 
             var qteVert=sessionStorage.getItem("qteVert");
			 
             var qteAutre=sessionStorage.getItem("qteAutre");
			 
			 */
   
   
   var prix=0;
   if(operation == 0){
   prix=parseFloat(Prix1Prod);
   }
   else
   if(operation == 1){
   prix=parseFloat(Prix2Prod);
   }
   var servicerapide=sessionStorage.getItem("serRapide");
   if (servicerapide == "oui"){
   prix=prix+1.2;
   }
   var qte=qteNoir;
   
  
   
   var dataString ='id_commande='+id_commande+'&op='+operation+'&id_client='+id_client+'&id_produit='+idProd+'&nomProd='+nomProd+'&prix='+parseFloat(prix)+'&qte='+qte+'&operation='+servicerapide;
   
   $.getJSON("php/1_GestionCaisse/AjouterLigneCommande.php",dataString,
   function(donnees){
   listProduitsCommander(id_commande);
   sessionStorage.setItem("idProd","no");
   });
   }
   });
   
   
   $(document).ready(function(){
   document.getElementById("cath-vetement").style.display="block";
   document.getElementById("cath-lingerie").style.display="none";
   var cathegorie="vet";
   var genre="homme";
   var dataString ='cat='+cathegorie+'&genre='+genre;
    $.getJSON("php/1_GestionCaisse/AfficherCathegorie.php",dataString,
    function(donnees){
    if (donnees.cathegorie[0].id_cathegorie != 0){
    document.getElementById("cathegorie").innerHTML= " ";
    for ( var i = 0; i < donnees.cathegorie.length; i++)
	  {
     $('#cathegorie').append("<div class='sous-cathegorie selectCathProd2' onclick='javascript:produit("+donnees.cathegorie[i].id_cathegorie+");selectCath(this);'><img src=assets/images/CathegorieProd/"+donnees.cathegorie[i].urlImage+" class='img-prod' ></div>"); 
      }
    }
    });
    produit(7);	
    });
	
	
	
	
	
    $(document).ready(function() {
	  var IdClientC=sessionStorage.getItem("ClientCourant");
	  var NomClientC=sessionStorage.getItem("nomClientCourant");
	  var PreomClientC=sessionStorage.getItem("prenomClientCourant");
	   var AdresseClientC=sessionStorage.getItem("adresseClientCourant");
	    var TelClientC=sessionStorage.getItem("telClientCourant");
		 var EmailClientC=sessionStorage.getItem("emailClientCourant");
		 if (IdClientC != null && NomClientC != null )
		 {
	  document.getElementById("contenu-client").innerHTML="";
var contenuHtml='';
contenuHtml+='<div id="list-client"></div>';
contenuHtml+='<div class="tit-client">CLIENTS&nbsp;N:&nbsp;'+IdClientC+'</div>';
contenuHtml+='<div class="nom-client">'+NomClientC+' '+PreomClientC+'</div>';
contenuHtml+='<span style="display:none;"><div class="tit-client point-fidelite">Adresse</div></span>';
contenuHtml+='<span style="display:none;"><div class="nom-client">'+AdresseClientC+'</div></span>';
contenuHtml+='<div class="tit-client point-fidelite">Tel</div><div class="nom-client">'+TelClientC+'</div><span style="display:none;"><div class="tit-client point-fidelite">Email</div><div class="nom-client">'+EmailClientC+'</div></span>';
$('#contenu-client').append(contenuHtml);}
else{
var contenuHtml='';
contenuHtml+='<h3 id="aucuneComm">Aller ajouter votre client au debut</h3>';
$('#contenu-client').append(contenuHtml);
}
});
    
  
   $(document).ready(function(){
   
     ladate=new Date();
	 
     var jour=ladate.getDate();
	 
     var mois=ladate.getMonth()+1;
	 
     var annee=ladate.getFullYear();
	 
     var heure=ladate.getHours();
	 
     var minutes=ladate.getMinutes();
	 
	 document.getElementById("dateEntre").value=annee+'-'+mois+'-'+jour;
	 
	 document.getElementById("dateSortie").value=annee+'-'+mois+'-'+(jour+1);
	 
	 document.getElementById("timeSortie").value=heure+':'+minutes;
	 
   });

