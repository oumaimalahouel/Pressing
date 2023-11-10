
/* debut fonction qui affiche la liste des produits */

$(document).ready(function() 
{
document.getElementById("contenu-bl-list").innerHTML="";

   $.getJSON("php/5_GestionProduits/AfficherProduits.php",
   
     function(donnees)
	 {
	 
        var c=0;
		
             for ( var i = 0; i < donnees.produits.length; i++)
			 {
			 
                 if(donnees.produits[0].id_produits != 0 )
				 {
				 
                      $('#contenu-bl-list').append('<a href="javascript:detailCommande('+donnees.produits[i].id_produit+');" style="color:#000;"><div class="w-section entete-entrer cat-entete-entrer liste-entrer" style="border-bottom:1px solid #333;" id="itemCom'+donnees.produits[i].id_produit+'" ><div class="txt-id"><img src="assets/images/ListeProd/'+donnees.produits[i].urlImage+'" width="20px;" /></div><div class="txt-id txt-client">'+donnees.produits[i].nom_produit+'</div><div class="txt-id txt-client qte">'+donnees.produits[i].prix1+' DT</div><div class="txt-id txt-client qte prix">'+donnees.produits[i].prix2+ ' DT</div><div class="txt-id txt-client qte prix date configuration"><img src="assets/images/conf.png" alt="54febc43a8d47afa0c423722_conf.png"></div></div></a>');
					  
                      var contenuHtml='';
					  
                      contenuHtml+='<div class="w-section w-clearfix detail-entrer"  id="det-commande'+donnees.produits[i].id_produit+'" style="display:none;border-bottom:1px solid #333;">';
					  
                      contenuHtml+='<div class="bl-list-mod-prod"><img src="assets/images/ListeProd/'+donnees.produits[i].urlImage+'" width="100px;" /></div>';
					  
                      contenuHtml+='<div class="bl-list-mod-prod">Nom Produit :<input type="text" id="Nomprod'+donnees.produits[i].id_produit+'" value="'+donnees.produits[i].nom_produit+'" disabled /></div>';
					  
                      contenuHtml+='<div class="bl-list-mod-prod">Prix Lavage :<input type="text" id="Prix1prod'+donnees.produits[i].id_produit+'" value="'+donnees.produits[i].prix1+'" /></div>';
					  
                      contenuHtml+='<div class="bl-list-mod-prod">Prix Repassage :<input type="text" id="Prix2prod'+donnees.produits[i].id_produit+'" value="'+donnees.produits[i].prix2+'" /></div>';
					  
                      contenuHtml+='<div class="bl-list-mod-prod"><a href="javascript:modProduit('+donnees.produits[i].id_produit+')" class="button" >Modifier</a><div>';
					  
                      $('#contenu-bl-list').append(contenuHtml);
					  
                 }

			}
    });
	
});

/* fin fonction qui affiche la liste des produits */

/* debut fonction qui affiche le detail d'un produit */
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
/* fin fonction qui affiche le detail d'un produit */

/* debut fonction qui modifie un produit */
function modProduit(id)
{
    var prix1prod=document.getElementById("Prix1prod"+id).value;
	
    var prix2prod=document.getElementById("Prix2prod"+id).value;
	
    var dataString ='prix1prod='+prix1prod+'&prix2prod='+prix2prod+'&idProd='+id;
	
     $.getJSON("php/5_GestionProduits/ModifierProduit.php",dataString,
	  
         function(donnees)
		 {
             location.reload();
         });
}
/* fin fonction qui modifie un produit */

/* debut fonction qui ajoute un produit */

function AjProduit()
{

     var Nomprod=document.getElementById("AjNomProd").value;
	 
     var PrixLvprod=document.getElementById("AjPrixLvProd").value;
	 
     var PrixRpprod=document.getElementById("AjPrixRpProd").value;
	 
     var GenreProd =document.getElementById("selectGenre").value;
	 
     var dataString ='nom_produit='+Nomprod+'&prix1='+PrixLvprod+'&prix2='+PrixRpprod+'&id_cathegorie='+GenreProd;
	 

     $.getJSON("php/5_GestionProduits/AjouterProduit.php",dataString,
	 
     function(donnees)
	 {
         location.reload();
     });
	 
}

/* fin fonction qui ajoute un produit */


/* debut fonction qui cherche un produit */

function rechercheProduit()
{

   var inputRech=document.getElementById("cleRechProduits").value;
   
   document.getElementById("contenu-bl-list").innerHTML="";
   
   var dataString='input='+inputRech;
   
   $.getJSON("php/5_GestionProduits/RechercherProduits.php",dataString,
   
   function(donnees)
   {
   var c=0;
   
         for ( var i = 0; i < donnees.produits.length; i++)
		 {
             if(donnees.produits[0].id_produits != 0 )
			 {
                 $('#contenu-bl-list').append('<div class="w-section entete-entrer cat-entete-entrer liste-entrer" style="border-bottom:1px solid #333;" id="itemCom'+donnees.produits[i].id_produit+'" onclick="javascript:detailCommande('+donnees.produits[i].id_produit+');"><div class="txt-id"><img src="assets/images/ListeProd/'+donnees.produits[i].urlImage+'" width="20px;" /></div><div class="txt-id txt-client">'+donnees.produits[i].nom_produit+'</div><div class="txt-id txt-client qte">'+donnees.produits[i].prix1+' DT</div><div class="txt-id txt-client qte prix">'+donnees.produits[i].prix2+ ' DT</div><div class="txt-id txt-client qte prix date configuration"><img src="assets/images/conf.png" alt="54febc43a8d47afa0c423722_conf.png"></div></div>');
				 
				 
                 var contenuHtml='';
				 
                 contenuHtml+='<div class="w-section w-clearfix detail-entrer"  id="det-commande'+donnees.produits[i].id_produit+'" style="display:none;border-bottom:1px solid #333;">';
				 
                 contenuHtml+='<div class="bl-list-mod-prod"><img src="assets/images/ListeProd/'+donnees.produits[i].urlImage+'" width="100px;" /></div>';
				 
				 
                 contenuHtml+='<div class="bl-list-mod-prod">Nom Produit :<input type="text" id="Nomprod'+donnees.produits[i].id_produit+'" value="'+donnees.produits[i].nom_produit+'" disabled /></div>';
				 
                 contenuHtml+='<div class="bl-list-mod-prod">Prix Lavage :<input type="text" id="Prix1prod'+donnees.produits[i].id_produit+'" value="'+donnees.produits[i].prix1+'" /></div>';
				 
				 
                 contenuHtml+='<div class="bl-list-mod-prod">Prix Repassage :<input type="text" id="Prix2prod'+donnees.produits[i].id_produit+'" value="'+donnees.produits[i].prix2+'" /></div>';
				 
                 contenuHtml+='<div class="bl-list-mod-prod"><a href="javascript:modProduit('+donnees.produits[i].id_produit+')" class="button" >Modifier</a><div>';
				 
                 $('#contenu-bl-list').append(contenuHtml);
				 
             }
			 
        }
		
    });
	
}

/* fin fonction qui cherche un produit */