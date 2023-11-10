$(document).ready(function()
{
    var etatCommande=document.getElementById("etatCommande").value;
	
    document.getElementById("contenu-bl-list").innerHTML="";
	
	var inputRech="vide";
	
    var Cle = "vide";

	var dataString ='etatCommande='+etatCommande+'&idRech='+inputRech+'&Cle='+Cle;
	
	$.getJSON("php/2_GestionCommandes/AfficherCommandesArchivee.php",dataString,
    function(donnees){
   
      var c=0;
   
      for (var i = 0; i < donnees.commandes.length; i++)
   
      {
   
        if(donnees.commandes[0].id_commande != 0 )
		{
   

            if((c % 2) == 0)
            {
			 
                 if(donnees.commandes[i].nbr_piece != 0 )
                 {
				   
					
				    ligneCommande(donnees.commandes[i].id_commande,donnees.commandes[i].total,donnees.commandes[i].reste,donnees.commandes[i].nbr_piece,donnees.commandes[i].date,donnees.commandes[i].heure,donnees.commandes[i].id_client,donnees.commandes[i].nom_client,donnees.commandes[i].add_client,donnees.commandes[i].tel_client,donnees.commandes[i].email_client,donnees.commandes[i].list_commande,"","fff",etatCommande);
					
					
					
                    c=c+1;
					
					
					
                 } 
				
                else{
				
                c=c+2;
				 
                }
            }

            else
            {
			
               if(donnees.commandes[i].nbr_piece != 0 )
			
                {

                 

                 ligneCommande(donnees.commandes[i].id_commande,donnees.commandes[i].total,donnees.commandes[i].reste,donnees.commandes[i].nbr_piece,donnees.commandes[i].date,donnees.commandes[i].heure,donnees.commandes[i].id_client,donnees.commandes[i].nom_client,donnees.commandes[i].add_client,donnees.commandes[i].tel_client,donnees.commandes[i].email_client,donnees.commandes[i].list_commande,"2","e7ebed",etatCommande);


                 c=c+1;
			  
                }
                else
			
                {
			
                 c=c+2;
			
                }
				
            }

        }

     }

    });


});



function detailCommande(id)
{

   if(document.getElementById("det-commande"+id).style.display == "none")
   {

   document.getElementById("det-commande"+id).style.display="block";

    document.getElementById("itemCom"+id).style.backgroundColor = "#000";
	document.getElementById("itemCom"+id).style.color = "#fff";
	
   }
   else
   {
   
    document.getElementById("det-commande"+id).style.display="none";
	
    document.getElementById("itemCom"+id).style.backgroundColor = "#fff";
	document.getElementById("itemCom"+id).style.color = "#000";
	
   }
}


function detailCommande2(id){
if(document.getElementById("det-commande"+id).style.display == "none"){
document.getElementById("det-commande"+id).style.display="block";
document.getElementById("itemCom"+id).style.backgroundColor = "#000";
document.getElementById("itemCom"+id).style.color = "#fff";
}
else{
document.getElementById("det-commande"+id).style.display="none";
document.getElementById("itemCom"+id).style.backgroundColor = "#e7ebed";
document.getElementById("itemCom"+id).style.color = "#000";
}
}

function terminerEntrer(id)
{
     var etat=1;
	 
     var dataString ='idComm='+id+'&etat='+etat;
	 
     $.getJSON("php/2_GestionCommandes/ModifierEtatCommandes.php",dataString,
	 
     function(donnees)
	 {
	     location.reload();
     });
}

function livrerSortie(id){

var etat=3;

var dataString ='idComm='+id+'&etat='+etat;

$.getJSON("php/2_GestionCommandes/ModifierEtatCommandes.php",dataString,

function(donnees){
   location.reload();
   
});

}
function terLigneCommande(idLigneCommande,idCommande)
{

     var etatLigneCommande="Prêt";
	 
	 var etatCommande=document.getElementById("etatCommande").value;
	 
     var dataString ='idLigComm='+idLigneCommande+'&etatLigneCommande='+etatLigneCommande;
	 
	 $.getJSON("php/2_GestionCommandes/ModifierEtatLigneCommande.php",dataString,
	 
     function(donnees)
	 {
	     document.getElementById("btnLigneCom"+idLigneCommande).innerHTML= "Prêt";
         document.getElementById("btnLigneCom"+idLigneCommande).style.backgroundColor = "#18952a";
		
		
	 });
}





function ligneCommande(id_commande,total,reste_commande,nbr_piece,date,heure,id_client,nom_client,add_client,tel_client,email_client,list_commande,num_ligne,background_ligne,etatCom)
{

     
     var totalCommande=parseFloat(total);
					 
					 
                     $('#contenu-bl-list').append('<a href="javascript:detailCommande'+num_ligne+'('+id_commande+');" style="color:#000;"><div class="w-section entete-entrer cat-entete-entrer liste-entrer" id="itemCom'+id_commande+'" style="background:#'+background_ligne+'"><div class="txt-id">'+id_commande+'</div><div class="txt-id txt-client">'+nom_client+'</div><div class="txt-id txt-client qte">'+nbr_piece+' Pieces</div><div class="txt-id txt-client qte prix">'+totalCommande.toFixed(3)+ ' DT</div><div class="txt-id txt-client qte prix">'+date+'</div>'+heure+'<div class="txt-id txt-client qte prix date configuration"><img src="assets/images/conf.png" alt="54febc43a8d47afa0c423722_conf.png"></div></div></a>');
					 
					 
                     var contenuHtml='';
					 
                     contenuHtml+='<div class="w-section w-clearfix detail-entrer" id="det-commande'+id_commande+'" style="display:none;font-family:HelveticaNeueLTPro-Bd;font-size:13px;">';
					  
                     contenuHtml+='<div class="detail-client coordonners-detaol-client">';
					 
                     contenuHtml+='<div class="txt-id detail-txt-client coordonne-client"><span style="color:#ac1307;">Clients&nbsp;&nbsp;N:'+id_client+'</span>';
					 
                     contenuHtml+='<br><span style="color:#575f62;">'+nom_client+'</span>';
					 
                     contenuHtml+='<br>';
					 
                     contenuHtml+=' <br><font style="color:#575f62;">ID</font>';
					  
                     contenuHtml+='<br>'+id_client;
					 
					 
					 contenuHtml+='<br><br><font style="color:#575f62;">Tel&nbsp;</font>';
					 
                     contenuHtml+='<br>'+tel_client;
					 
                     contenuHtml+='<br></div>';
					 
                     contenuHtml+='</div>';
					 
                     contenuHtml+='<div class="w-clearfix detail-client adresse-client">';
					 
                     contenuHtml+='<div class="txt-id detail-txt-client adresse-client"><font style="color:#575f62;"></font>';
					 
                     contenuHtml+='<br>';
					 
                     contenuHtml+='<br>';
					 
                     contenuHtml+='<br><br><font style="color:#575f62;"></font><br></div></div>';
					 
                     contenuHtml+='<div class="liste-commande">';
					 
                     contenuHtml+='<div class="txt-id detail-txt-client adresse-client detail-commande"><font style="color:#ac1307;">Commandes</font></div>';
					 
                         var listCommande=list_commande;
						 
                         var ligneCommandentrer=listCommande.split(";");
						 
                        for (var k = 0; k < ligneCommandentrer.length-1; k++) 
						{
						 
                             var itemligneCommandentrer=ligneCommandentrer[k].split(",");
						 
                             if (itemligneCommandentrer[3] == "encours"){
						 
                               var color="#ed1c24";
                               }
                                else{
							
                                 var color="#18952a";
                                }
							
                                if (itemligneCommandentrer[4] == "oui"){
						
                                    var typeService="<span style='color:#ed1c24;'>RAPIDE</span>";
									
                                }
                                else{
						
						            var typeService="<span style='color:#ed1c24;'>NORMAL</span>";
						
						        }
								
                                if (itemligneCommandentrer[6] == "0"){
						
                                    var typeOperation="<span style='color:#ed1c24;'>LAVAGE</span>";
						
                                }
								
                                else{
						
                                    var typeOperation="<span style='color:#ed1c24;'>REPASSAGE</span>";
						
                                }
								
                                 var prix=parseFloat(itemligneCommandentrer[2]);
						
                                 if (itemligneCommandentrer[7] == "autre"){
						 
                                     var ChCouleur='<div style="background:#eff6f7;min-height:10px;width:50px;border:1px solid #000;font-size:7px;text-align:center;">autre</div>';
						 
                                 }
                                 else
                                 {
                                      var ChCouleur='<div style="background:#'+itemligneCommandentrer[7]+';min-height:10px;width:50px;border:1px solid #000;"><br></div>';
                         
						         }
						 
                                      contenuHtml+='<div class="ligne-commande"><div class="nom-prod">'+ChCouleur+'('+itemligneCommandentrer[5]+') '+itemligneCommandentrer[1]+'</div>';
						  
                                       contenuHtml+='<div class="nom-prod">'+prix.toFixed(3)+' DT</div><div class="nom-prod">'+typeOperation+'</div><a href=javascript:terLigneCommande('+itemligneCommandentrer[0]+','+id_commande+')  ><div class="nom-prod" style="padding: 5px 5px;background-color:'+color+';color: white;text-align: center;text-decoration: none;" id="btnLigneCom'+itemligneCommandentrer[0]+'">'+itemligneCommandentrer[3]+'</div></a></div>';
									   
                        }

                              var total=parseFloat(total);
							  
                              var reste=parseFloat(reste_commande);


                             if(reste < 0)
							 {
							 
                                var opetat='Non Payé';

                                var rst=reste;
								
                                var descOpEtat='Reste a payé : '+rst.toFixed(3)+' DT';

                                contenuHtml+='<div id="etatpay'+id_commande+'" style="margin-left:40px;"><font style="color:#ac1307;">Etat</font><br>'+opetat;
								
                                contenuHtml+='<span style="margin-left:100px;"> '+descOpEtat+'</span>';
								
                                contenuHtml+='</div>';
								
                             }

                            if(reste >= 0)
							{
							
                                  var opetat='Payé';
							 
                                  if (reste == 0)
							       {
                                    var descOpEtat='';
                                   }
                                   else
							       {
                                       var rst=reste * -1;
							   
                                       var descOpEtat='A rendre :'+rst.toFixed(3)+' DT';
                                   }
							   
							   
                                     contenuHtml+='<div style="margin-left:40px;"><font style="color:#238be6;">Etat</font><br>'+opetat;
							   
                                     contenuHtml+='<span style="margin-left:100px;"> '+descOpEtat+'</span>';
							   
                                     contenuHtml+='</div>';
                            }


                    if (etatCom == '0')
					{
                    contenuHtml+='<a href="javascript:terminerEntrer('+id_commande+');" class="button" style="float:right;">TERMINER</a>';
					}
					else
					if (etatCom == '1')
					{
					if(reste < 0)
							 {
					         contenuHtml+='<br><a href="javascript:payerSortie('+id_commande+');" id="pay-com'+id_commande+'" class="button" style="float:left;margin-left:10px;background-color: rgb(237, 28, 36);">PAYER</a><a href="javascript:livrerSortie('+id_commande+');" class="button" style="float:right;">LIVRER</a>';
					         }
					if(reste >= 0)
					         {
					         contenuHtml+='<br><a href="javascript:livrerSortie('+id_commande+');" class="button" style="float:right;">LIVRER</a>';
					         }
					}
					else
					{
					contenuHtml+='';
					}
                    $('#contenu-bl-list').append(contenuHtml);
					
                   
					
					


}




function rechercheCommande()
{
    var inputRech=document.getElementById("cleRech").value;
	
    var select = document.getElementById("selectCle");
	
    var Cle = select.options[select.selectedIndex].value;
	
    var etatCommande=document.getElementById("etatCommande").value;
	
	var dataString ='etatCommande='+etatCommande+'&idRech='+inputRech+'&Cle='+Cle;
	
	document.getElementById("contenu-bl-list").innerHTML="";
	
    $.getJSON("php/2_GestionCommandes/AfficherCommandes.php",dataString,
	
    function(donnees){
   
      var c=0;
   
      for (var i = 0; i < donnees.commandes.length; i++)
   
      {
   
        if(donnees.commandes[0].id_commande != 0 )
		{
   

            if((c % 2) == 0)
            {
			 
                 if(donnees.commandes[i].nbr_piece != 0 )
                 {
				   
					
				    ligneCommande(donnees.commandes[i].id_commande,donnees.commandes[i].total,donnees.commandes[i].reste,donnees.commandes[i].nbr_piece,donnees.commandes[i].date,donnees.commandes[i].heure,donnees.commandes[i].id_client,donnees.commandes[i].nom_client,donnees.commandes[i].add_client,donnees.commandes[i].tel_client,donnees.commandes[i].email_client,donnees.commandes[i].list_commande,"","fff");
					
					
					
                    c=c+1;
					
					
					
                 } 
				
                else{
				
                c=c+2;
				 
                }
            }

            else
            {
			
               if(donnees.commandes[i].nbr_piece != 0 )
			
                {

                 

                 ligneCommande(donnees.commandes[i].id_commande,donnees.commandes[i].total,donnees.commandes[i].reste,donnees.commandes[i].nbr_piece,donnees.commandes[i].date,donnees.commandes[i].heure,donnees.commandes[i].id_client,donnees.commandes[i].nom_client,donnees.commandes[i].add_client,donnees.commandes[i].tel_client,donnees.commandes[i].email_client,donnees.commandes[i].list_commande,"2","e7ebed");


                 c=c+1;
			  
                }
                else
			
                {
			
                 c=c+2;
			
                }
				
            }

        }

     }

    });
	
}

function payerSortie(id)
{

contenuHtml='<font style="color:#ac1307;">Etat</font><br>Payé';
document.getElementById('etatpay'+id).innerHTML=contenuHtml;
document.getElementById('pay-com'+id).style.display="none";


var dataString ='idComm='+id;

$.getJSON("php/2_GestionCommandes/PayerCommandes.php",dataString,

function(donnees){

});




}
