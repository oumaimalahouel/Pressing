$(document).ready(function()
    {

         document.getElementById("contenu-bl-list").innerHTML="";
	
        $.getJSON("php/3_GestionClients/AfficherClients.php",

		function(donnees)
		{

		     var c=0;

			for ( var i = 0; i < donnees.clients.length; i++)
			{



				if((c % 2) == 0)

			    {

					if(donnees.clients[i].id_client != 0 )

				    {
					
					ligneClient(donnees.clients[i].id_client,donnees.clients[i].totalComm,donnees.clients[i].prenom,donnees.clients[i].nom,donnees.clients[i].tel,donnees.clients[i].adresse,donnees.clients[i].email,donnees.clients[i].nbrComm,"","fff");
                          				 
                        c=c+1;
				 
				 
                    }
					
                    else
					
					{
					
                    c=c+2;
					
                    }
					
                }
				
                else
				
                {
				
                    if(donnees.clients[i].id_client != 0)
					{
					
					     ligneClient(donnees.clients[i].id_client,donnees.clients[i].totalComm,donnees.clients[i].prenom,donnees.clients[i].nom,donnees.clients[i].tel,donnees.clients[i].adresse,donnees.clients[i].email,donnees.clients[i].nbrComm,"2","e7ebed");
				     
					      c=c+1;
						  

					}
                    else
					
                    {
					
                    c=c+2;
					
                    }

				}
            
			
			}

        });
		
    });
	
	
function detailClient(id)
{

     if(document.getElementById("det-client"+id).style.display == "none")
	 {
       
	   document.getElementById("det-client"+id).style.display="block";

	   document.getElementById("itemClt"+id).style.backgroundColor = "#000";
	   
	   document.getElementById("itemClt"+id).style.color = "#fff";
    }
    else
	{
         document.getElementById("det-client"+id).style.display="none";
		
         document.getElementById("itemClt"+id).style.backgroundColor = "#fff";
		 
		 document.getElementById("itemClt"+id).style.color = "#000";
		 
    }
}

function detailClient2(id)
{

     if(document.getElementById("det-client"+id).style.display == "none")
	{

	     document.getElementById("det-client"+id).style.display="block";

	     document.getElementById("itemClt"+id).style.backgroundColor = "#000";
		 document.getElementById("itemClt"+id).style.color = "#fff";

	}
    else
	{
	

	document.getElementById("det-client"+id).style.display="none";

	document.getElementById("itemClt"+id).style.backgroundColor = "#e7ebed";
	
	document.getElementById("itemClt"+id).style.color = "#000";
    }
}



function ligneClient(id_client,totalComm,prenom,nom,tel,adresse,email,nbrComm,num_ligne,background_ligne)
{


					 
                        if (totalComm != null)
						{
						 
                             var totalCommande=parseFloat(totalComm);
							 
                        }
						
                        else
						{
						
                          var totalCommande=0;
                        }
						
                          $('#contenu-bl-list').append('<a href="javascript:detailClient'+num_ligne+'('+id_client+');" style="color:#000;"><div class="w-section entete-entrer cat-entete-entrer liste-entrer liste-entrer2" id="itemClt'+id_client+'" style="background:#'+background_ligne+'"><div class="txt-id">'+id_client+'</div><span class="txt-id txt-client">'+nom+' '+prenom+'</span><span class="txt-id txt-client">'+tel+'</span><span  style="margin-left:-50px;">'+totalCommande.toFixed(3)+ ' DT / Bonus Fidélité : ('+fidelite(totalCommande)+') DT</span></div></div></a>');
						  
                          var contenuHtml='';
						  
                          contenuHtml+='<div class="w-section w-clearfix detail-entrer" id="det-client'+id_client+'" style="display:none;font-family:HelveticaNeueLTPro-Bd;font-size:13px;">';
						  
                          contenuHtml+='<div class="detail-client coordonners-detaol-client" >';
						  
                          contenuHtml+='<div class="txt-id detail-txt-client coordonne-client"><span style="color:#1e88e5;">Clients&nbsp;&nbsp;N:'+id_client+'</span>';
						  
						  
						  
						 /* 
						  contenuHtml+='<br><span style="color:#575f62;">'+nom+' '+prenom+'</span>';
					  
                         contenuHtml+='<br>';
					 
                         contenuHtml+=' <br><font style="color:#575f62;">ID</font>';
					  
                          contenuHtml+='<br>'+id_client+'</div>';
					 
					 
					     contenuHtml+='<br><br><font style="color:#575f62;">Tel&nbsp;</font>';
					 
                          contenuHtml+='<br>'+tel_client;
					 
                          contenuHtml+='<br></div>';
					  
                         contenuHtml+='</div>';
					 
                         contenuHtml+='<div class="w-clearfix detail-client adresse-client">';
					 
                          contenuHtml+='<div class="txt-id detail-txt-client adresse-client"><font style="color:#575f62;"></font>';
					 
                          contenuHtml+='<br>';
					 
                          contenuHtml+='<br>';
					 
                         contenuHtml+='<br><br><font style="color:#575f62;"></font><br></div></div>';
						  
						  */
						  
                          contenuHtml+='<br><span style="color:#575f62;">'+nom+' '+prenom+'</span>';
						  
                          contenuHtml+='<br>';
						  
                          contenuHtml+=' <br><font style="color:#575f62;">ID</font>';
						  
                          contenuHtml+='<br>'+id_client+'</div>';
						  
                          contenuHtml+='</div>';
						  
                          contenuHtml+='<div class="w-clearfix detail-client adresse-client">';
						  
                          contenuHtml+='<div class="txt-id detail-txt-client adresse-client"><font style="color:#575f62;"></font>';
						  
                          contenuHtml+='<br>';
						  
                          contenuHtml+='<br>';
						  
                          contenuHtml+='<br><font style="color:#575f62;">Tel&nbsp;</font>';
						  
                          contenuHtml+='<br>'+tel;
						  
                          contenuHtml+='<br>';
						  
                          contenuHtml+='<br><br><font style="color:#575f62;"></font><br></div></div>';
						  
						 
						  
                          contenuHtml+='<div class="liste-commande">';

                          contenuHtml+='<br><br><span style="padding:15px;" >'+nbrComm+' Commandes</span>';

                          contenuHtml+='<br><a href="javascript:suppClient('+id_client+');" class="button" style="float:right;">SUPPRIMER</a>';
						  
                          $('#contenu-bl-list').append(contenuHtml);
						  
}


function fidelite(chiffredafaire)
{
var bonus= (chiffredafaire * 7) / 100 ;

return bonus.toFixed(3);
}
				     