
/* afficher le menu de la cathegorie mere et ses sous cathegorie et les produits de chaque sous cathegorie avec l'affichage d'une sous cathegorie et ses produits par default */
function selectItemCatheg(el,op){
var kids=document.getElementById('menu1').children;
for (var i=0; i<kids.length;i++){
kids[i].className = "selectvet1";
}
el.className ="selectvet2";
}

function selectItemType(el,op){
var kids=document.getElementById('option-menu').children;
for (var i=0; i<kids.length;i++){
kids[i].className = "selectvet1 choix-option2";
}
el.className ="selectvet2 choix-option1";
sessionStorage.setItem("operation",op);
}


function displayCathVet(bool){

if(document.getElementById("cath-vetement").style.display =="none" && bool =="oui")
{
document.getElementById("cath-vetement").style.display="block";
document.getElementById("cath-lingerie").style.display="none";
var cathegorie="vet";
var genre="homme";
var dataString ='cat='+cathegorie+'&genre='+genre;
$.getJSON("php/1_GestionCaisse/AfficherCathegorie.php",dataString,
function(donnees){
if (donnees.cathegorie[0].id_cathegorie != 0){
document.getElementById("cathegorie").innerHTML= " ";
for ( var i = 0; i < donnees.cathegorie.length; i++) {
$('#cathegorie').append("<div class='sous-cathegorie selectCathProd2' onclick='javascript:produit("+donnees.cathegorie[i].id_cathegorie+");selectCath(this);'><img src=assets/images/CathegorieProd/"+donnees.cathegorie[i].urlImage+" class='img-prod' ></div>"); 
}
}
});
produit(7);		
}
else if( bool =="non"){
document.getElementById("cath-vetement").style.display="none";
document.getElementById("cath-lingerie").style.display="block";
var cathegorie="lng";
var genre="lingerie";
var dataString ='cat='+cathegorie+'&genre='+genre;
$.getJSON("php/1_GestionCaisse/AfficherCathegorie.php",dataString,
function(donnees){
if (donnees.cathegorie[0].id_cathegorie != 0){
document.getElementById("cathegorie").innerHTML= " ";
for ( var i = 0; i < donnees.cathegorie.length; i++) {
$('#cathegorie').append(""); 
}
}
});
produit(18);
	}
}
/* fin */

function selectItemGenre(el,id,index,index2,idcathegorie){
document.getElementById("cathegorie").innerHTML="";
var cathegorie=index2;
var genre=index;
var dataString ='cat='+cathegorie+'&genre='+genre;
$.getJSON("php/1_GestionCaisse/AfficherCathegorie.php",dataString,
function(donnees){
if (donnees.cathegorie[0].id_cathegorie != 0){
document.getElementById("cathegorie").innerHTML="";
for ( var i = 0; i < donnees.cathegorie.length; i++){
$('#cathegorie').append("<div class='sous-cathegorie selectCathProd2' onclick='javascript:produit("+donnees.cathegorie[i].id_cathegorie+");selectCath(this);'><img src=assets/images/CathegorieProd/"+donnees.cathegorie[i].urlImage+" class='img-prod' ></div>"); 
}
}
});
produit(idcathegorie);
}

function produit(idautre){
document.getElementById("produits").innerHTML="";
var dataString ='idCath='+idautre;
$.getJSON("php/1_GestionCaisse/AfficherProduit.php",dataString,
function(donnees){
if (donnees.produits[0].id_produits!= 0){
document.getElementById("produits").innerHTML="";
for ( var i = 0; i < donnees.produits.length; i++){
/*
$('#produits').append("<div class='sous-cathegorie sous-cathegorie-prod selectProd2' id="+donnees.produits[i].id_produit+" onclick='javascript:selectProduit("+donnees.produits[i].id_produit+",\""+donnees.produits[i].nom_produit+"\",\""+donnees.produits[i].prix1+"\",\""+donnees.produits[i].prix2+"\",\""+donnees.produits[i].urlImage+"\","+donnees.produits[i].id_cathegorie+");selectItProd(this);'><img src=assets/images/ListeProd/"+donnees.produits[i].urlImage+" class='img-prod'  ></div>"); 
*/


$('#produits').append("<div href='#' class='sous-cathegorie sous-cathegorie-prod selectProd2' id='+donnees.produits[i].id_produit+' data-toggle='modal' data-target='#myModal'  onclick='javascript:selectProduit("+donnees.produits[i].id_produit+",\""+donnees.produits[i].nom_produit+"\",\""+donnees.produits[i].prix1+"\",\""+donnees.produits[i].prix2+"\",\""+donnees.produits[i].urlImage+"\","+donnees.produits[i].id_cathegorie+");selectItProd(this);'><img src=assets/images/ListeProd/"+donnees.produits[i].urlImage+" class='img-prod'  ></div>"); 

}

$('#produits').append("<div href='#' class='sous-cathegorie sous-cathegorie-prod selectProd2' id='+donnees.produits[i].id_produit+' data-toggle='modal' data-target='#myModal'  onclick='javascript:selectProduit(\"autre\");selectItProd(this);'><img src=assets/images/ListeProd/autre.gif class='img-prod'  ></div>"); 

}
});
}
function selectProduit(idProd,nomProd,Prix1Prod,Prix2Prod,UrlProd,IdCatProd){

if (idProd != 'autre')
{
sessionStorage.setItem("idProd",idProd);
sessionStorage.setItem("nomProd",nomProd);
sessionStorage.setItem("Prix1Prod",Prix1Prod);
sessionStorage.setItem("Prix2Prod",Prix2Prod);
sessionStorage.setItem("UrlProd",UrlProd);
sessionStorage.setItem("IdCatProd",IdCatProd);


   var ser="non";
   sessionStorage.setItem("serRapide",ser);
   sessionStorage.setItem("operation",0);
   var idProd=sessionStorage.getItem("idProd");
   var nomProd= sessionStorage.getItem("nomProd");
   var Prix1Prod=sessionStorage.getItem("Prix1Prod");
   var Prix2Prod=sessionStorage.getItem("Prix2Prod");
   var UrlProd=sessionStorage.getItem("UrlProd");
   var IdCatProd=sessionStorage.getItem("IdCatProd");
   
   var qteNoir=0;
   sessionStorage.setItem("qteNoir",qteNoir);
   
   var qteBlanc=0;
   sessionStorage.setItem("qteBlanc",qteBlanc);
   
   var qteRouge=0;
   sessionStorage.setItem("qteRouge",qteRouge);
   
   var qteBleu=0;
   sessionStorage.setItem("qteBleu",qteBleu);
   
   var qteVert=0;
   sessionStorage.setItem("qteVert",qteVert);
   
   var qteAutre=0;
   sessionStorage.setItem("qteAutre",qteAutre);
   var contenuHtml='';
   
   
    contenuHtml+='<div style="background:#000;margin:-15px;"><center> <div id="option-menu" >';
    contenuHtml+='<div class="selectvet2 choix-option1" style="border:0px;border-radius:0px;font-family:HelveticaNeueLTPro-Bd;font-size:18px;" onclick="selectItemType(this,0);" >LAVAGE</div>';
    contenuHtml+='<div class="selectvet1 choix-option2" style="border:0px;border-radius:0px;font-family:HelveticaNeueLTPro-Bd;font-size:18px;" onclick="selectItemType(this,1); ">REPASSAGE</div>';
    contenuHtml+='</center></div>';
    contenuHtml+='</div>';
    contenuHtml+='<br><br><br>';
    contenuHtml+='<center>';
    contenuHtml+='<div id="content-lightBox"> ';
	contenuHtml+='<div style="float:left;margin-left:20px;"><img src="assets/images/ListeProd/'+UrlProd+'" width="100px;" height="100px;" /></div>';
	
	
	
	contenuHtml+='<div style="float:right;width:300px;" id="PalCouleur">';
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span>';
	contenuHtml+='</div><input type="number" min="1"  id="QteCoulNoir" onchange="selectCouleur(\'000\',\'QteCoulNoir\');"  class="form-control" style="width:100px;"/></div>';
	
	/*
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#fff;margin:5px;" class="selectCouleur2"  "><br>';
	contenuHtml+='</div><select id="QteCoulBlanc"  onchange="selectCouleur(\'fff\',\'QteCoulBlanc\');"  class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	*/
	
	/*
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#E6CC65;margin:5px;" class="selectCouleur2"  "><br>';
	contenuHtml+='</div><select id="QteCoulRouge"  onchange="selectCouleur(\'E6CC65\',\'QteCoulRouge\');"  class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	*/
	/*
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#614B37;margin:5px;"  class="selectCouleur2"       "><br>';
	contenuHtml+='</div><select id="QteCoulVert"  onchange="selectCouleur(\'614B37\',\'QteCoulVert\');" class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	*/
	
	/*
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#1e88e5;margin:5px;" class="selectCouleur2"  "><br>';
	contenuHtml+='</div><select id="QteCoulBleu"  onchange="selectCouleur(\'1e88e5\',\'QteCoulBleu\');"  class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	*/
	
	
	/*
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#eff6f7;margin:5px;"  class="selectCouleur2" ><span style="float:left;padding-left:25px;padding-top:4px;padding-bottom:10px;font-size:9px;" >AUTRE</span>';
	contenuHtml+='</div><select id="QteCoulAutre"  onchange="selectCouleur(\'autre\',\'QteCoulAutre\');" class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div>';
	
	
	*/
	
	//contenuHtml+='<div id="txt-service">SERVICE RAPIDE<div class="slideThree"><input type="checkbox" value="None" id="slideThree" name="check" onclick="javascript:service();" /><label for="slideThree"></label></div></div>';
    
 	
	
	
	contenuHtml+='<br><br><br><br><br><br><div style="inline-block;width:47.5%;margin-top:31px;margin-right:1.5%;margin-left:1%;float:left;padding:0px;background:#ffc400;visibility:hidden;"><table><tr><td><span style="padding-left:10px;padding-right:10px;color:#d50000;font-family:open_sanssemibold;">SERVICE RAPIDE</span></td><td><div class="slideThree"><input type="checkbox" value="None" id="slideThree" name="check" onclick="javascript:service();" /><label for="slideThree"></label></div></td></tr></table></div>';
	
	contenuHtml+='<a href="1_GestionCaisse?idProd='+idProd+'&nomProd='+nomProd+'&Prix1Prod='+Prix1Prod+'&Prix2Prod='+Prix2Prod+'"  class="valid" id="fermer" target="_parent" style="inline-block;width:47.5%;margin-top:31px;margin-right:1.5%;margin-left:1%;font-family:HelveticaNeueLTPro-Bd;font-size:20px;background:#3b5998;" >VALIDER</a>';
	contenuHtml+='<br><br><br></div></div>';
	//$('#modal-prod-det').append(contenuHtml);
	
	
	document.getElementById("modal-prod-det").innerHTML=contenuHtml;
	
	
}
else
{   
   
   var qteNoir=0;
   sessionStorage.setItem("qteNoir",qteNoir);
   
   var qteBlanc=0;
   sessionStorage.setItem("qteBlanc",qteBlanc);
   
   var qteRouge=0;
   sessionStorage.setItem("qteRouge",qteRouge);
   
   var qteBleu=0;
   sessionStorage.setItem("qteBleu",qteBleu);
   
   var qteVert=0;
   sessionStorage.setItem("qteVert",qteVert);
   
   var qteAutre=0;
   sessionStorage.setItem("qteAutre",qteAutre);
   
   
    var contenuHtml=''; 
	
    contenuHtml+='<div id="content-lightBox"> ';
	
	
	

    contenuHtml+='<div style="background:#000;margin:-15px;"><center> <div id="option-menu" >';
    contenuHtml+='<div class="selectvet2 choix-option1" style="border:0px;border-radius:0px;font-family:HelveticaNeueLTPro-Bd;font-size:18px;" onclick="selectItemType(this,0);" >LAVAGE</div>';
    contenuHtml+='<div class="selectvet1 choix-option2" style="border:0px;border-radius:0px;font-family:HelveticaNeueLTPro-Bd;font-size:18px;" onclick="selectItemType(this,1); ">REPASSAGE</div>';
    contenuHtml+='</center></div>';
    contenuHtml+='</div>';
    contenuHtml+='<br><br>';
	
	contenuHtml+='<div id="resultAutreProd" style="margin-left:50px;float:left;width:160px;"></div><div id="formAutreProd" >Nom :<br><div style="float:left;margin-left:0px;"><input type="text" id="nomProduitAutre" class="input" /><br>';
	
	contenuHtml+='Prix :<br><input type="text" id="prixProduitAutre" class="input" /><br><a href="javascript:ajouterAutreProduit();" class="input button">OK</a></div></div></div>';
	
	contenuHtml+='<div style="float:right;width:250px;" id="PalCouleur">';
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span>';
	contenuHtml+='</div><input type="number" min="1"  id="QteCoulNoir" onchange="selectCouleur(\'000\',\'QteCoulNoir\');"  class="form-control" style="width:100px;"/></div>';
	
	
	/*
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#fff;margin:5px;" class="selectCouleur2"  "><br>';
	contenuHtml+='</div><select id="QteCoulBlanc"  onchange="selectCouleur(\'fff\',\'QteCoulBlanc\');"  class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#E6CC65;margin:5px;" class="selectCouleur2"  "><br>';
	contenuHtml+='</div><select id="QteCoulRouge"  onchange="selectCouleur(\'E6CC65\',\'QteCoulRouge\');"  class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#614B37;margin:5px;"  class="selectCouleur2"       "><br>';
	contenuHtml+='</div><select id="QteCoulVert"  onchange="selectCouleur(\'614B37\',\'QteCoulVert\');" class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#1e88e5;margin:5px;" class="selectCouleur2"  "><br>';
	contenuHtml+='</div><select id="QteCoulBleu"  onchange="selectCouleur(\'1e88e5\',\'QteCoulBleu\');"  class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
	
	contenuHtml+='<div style="display:inline-block;width:30%;"><span style="text-align:center;">QTE<br></span> <div style="min-height:30px;min-width:20px;background:#eff6f7;margin:5px;"  class="selectCouleur2" ><span style="float:left;padding-left:25px;padding-top:4px;padding-bottom:10px;font-size:9px;" >AUTRE</span>';
	contenuHtml+='</div><select id="QteCoulAutre"  onchange="selectCouleur(\'autre\',\'QteCoulAutre\');" class="form-control"><option value="0">0</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div>';
	
	*/
	
	contenuHtml+='<div id="btnProdAutre" ></div>';
	
	contenuHtml+='<br><br><br></div></div>';
	
    document.getElementById("modal-prod-det").innerHTML=contenuHtml;

}
	
	
}

function selectCouleur(couleur,id){
   
	
	  
	   var qteParCouleur=document.getElementById(id).value;
	   
	   if(couleur == '000'){
	   sessionStorage.setItem("qteNoir",qteParCouleur);
	   }
	   if(couleur == 'fff'){
	   sessionStorage.setItem("qteBlanc",qteParCouleur);
	   }
	   if(couleur == 'E6CC65'){
	   sessionStorage.setItem("qteRouge",qteParCouleur);
	   }
	   if(couleur == '614B37'){
	   sessionStorage.setItem("qteVert",qteParCouleur);
	   }
	   if(couleur == '1e88e5'){
	   sessionStorage.setItem("qteBleu",qteParCouleur);
	   }
	   if(couleur == 'autre'){
	   sessionStorage.setItem("qteAutre",qteParCouleur);
	   }
     
	   
	
}

function ajouterAutreProduit()
{

var nomAutreProduit=document.getElementById("nomProduitAutre").value;

var prixAutreProduit=document.getElementById("prixProduitAutre").value;

sessionStorage.setItem("idProd",0);
sessionStorage.setItem("nomProd",nomAutreProduit);
sessionStorage.setItem("Prix1Prod",prixAutreProduit);
sessionStorage.setItem("Prix2Prod",prixAutreProduit);
sessionStorage.setItem("UrlProd","autre.gif");
sessionStorage.setItem("IdCatProd",0);


   var ser="non";
   sessionStorage.setItem("serRapide",ser);
   sessionStorage.setItem("operation",0);
   var idProd=sessionStorage.getItem("idProd");
   var nomProd= sessionStorage.getItem("nomProd");
   var Prix1Prod=sessionStorage.getItem("Prix1Prod");
   var Prix2Prod=sessionStorage.getItem("Prix2Prod");
   var UrlProd=sessionStorage.getItem("UrlProd");
   var IdCatProd=sessionStorage.getItem("IdCatProd");



document.getElementById("formAutreProd").style.display="none";

document.getElementById("resultAutreProd").innerHTML='<span style="font-size:22px;text-transform:uppercase;">'+nomAutreProduit+'</span><br><span style="font-size:18px;color:#3b5998;">'+prixAutreProduit+' DT</span>';


document.getElementById("btnProdAutre").innerHTML='<a href="1_GestionCaisse?idProd='+idProd+'&nomProd='+nomProd+'&Prix1Prod='+Prix1Prod+'&Prix2Prod='+Prix2Prod+'" onclick="javascript:annulersessionProduit();" class="valid"  target="_parent" style="inline-block;width:47.5%;margin-top:31px;margin-right:1.5%;margin-left:48%;font-family:HelveticaNeueLTPro-Bd;font-size:20px;background:#3b5998;" >VALIDER</a>';






}

function trouverclient(){
document.getElementById("contenu-client").innerHTML="<div id='list-client'></div>";
var input=document.getElementById("rech").value;
var select = document.getElementById("Cle");
var cle = select.options[select.selectedIndex].value;
var dataString ='cle='+cle+'&input='+input;
$.getJSON("php/1_GestionCaisse/RechercherClient.php",dataString,
function(donnees){

if (donnees.clients[0].id_client != 0){
document.getElementById("contenu-client").innerHTML="<div id='list-client'></div>";
for ( var i = 0; i < donnees.clients.length; i++){
$('#list-client').append("<a href='javascript:afficherClient("+donnees.clients[i].id_client+",\""+donnees.clients[i].nom+"\",\""+donnees.clients[i].prenom+"\",\""+donnees.clients[i].adresse+"\",\""+donnees.clients[i].tel+"\",\""+donnees.clients[i].email+"\");' ><div id='item-client'><div id='nomClient'>"+donnees.clients[i].nom+" "+donnees.clients[i].prenom+"</div><div id='telClient'>"+donnees.clients[i].tel+"</div></div></a>"); 
}
}
});
}
function trouverclientMod(){
document.getElementById("contenu-client").innerHTML="<div id='list-client'></div>";
var input=document.getElementById("rech").value;
var select = document.getElementById("Cle");
var cle = select.options[select.selectedIndex].value;
var dataString ='cle='+cle+'&input='+input;
$.getJSON("php/1_GestionCaisse/RechercherClient.php",dataString,
function(donnees){
if (donnees.clients[0].id_client != 0){
document.getElementById("contenu-client").innerHTML="<div id='list-client'></div>";
for ( var i = 0; i < donnees.clients.length; i++){
$('#list-client').append("<a href='javascript:afficherClientMod("+donnees.clients[i].id_client+",\""+donnees.clients[i].nom+"\",\""+donnees.clients[i].prenom+"\",\""+donnees.clients[i].adresse+"\",\""+donnees.clients[i].tel+"\",\""+donnees.clients[i].email+"\");' ><div id='item-client'><div id='nomClient'>"+donnees.clients[i].nom+" "+donnees.clients[i].prenom+"</div><div id='telClient'>"+donnees.clients[i].tel+"</div></div></a>"); 
}
}
});
}
function afficherClient(id,nom,prenom,adresse,tel,email)
{
if (id != 'existe')
{
document.getElementById("contenu-client").style.display="block";
var contenuHtml='';
contenuHtml+='<div id="list-client"></div>';
contenuHtml+='<div class="tit-client creer">CLIENTS&nbsp;N:&nbsp;'+id+'</div>';
contenuHtml+='<div class="nom-client">'+nom+' '+prenom+'</div>';
contenuHtml+='<a href="javascript:AjCommande('+id+',\''+nom+'\',\''+prenom+'\',\''+adresse+'\',\''+tel+'\',\''+email+'\');"  class="button creer" style="float:right;"  id="commande" >Créer une commande</a>';
contenuHtml+='<span style="display:none;"><div class="tit-client point-fidelite">Adresse</div></span>';
contenuHtml+='<span style="display:none;"><div class="nom-client">'+adresse+'</div></span>';
contenuHtml+='<div class="tit-client point-fidelite">Tel</div><div class="nom-client">'+tel+'</div><span style="display:none;"><div class="tit-client point-fidelite">Email</div><div class="nom-client">'+email+'</div></span>';
document.getElementById("contenu-client").innerHTML=contenuHtml;
}
else
{
document.getElementById("contenu-client").style.display="block";
var contenuHtml='';
contenuHtml+='<div style="padding:20px;background:red;margin-top:50px;width:100%;color:#fff;">Ce client existe déja</div>';
document.getElementById("contenu-client").innerHTML=contenuHtml;
}
}

function afficherClientMod(id,nom,prenom,adresse,tel,email){
var contenuHtml=''; 
contenuHtml+='<center><br>Nom  & Prénom  <input type="text" id="nomClient" class="input input-ajclient" value="'+nom+'"/><br>';
contenuHtml+='<span style="display:none;">Prenom <input type="text" id="prenomClient" class="input input-ajclient" value="'+prenom+'" /><br></span>';
contenuHtml+='<span style="display:none;">Adresse <input type="text" id="adresseClient" class="input input-ajclient" value="'+adresse+'"/><br></span>';
contenuHtml+='Tel<br><input type="text" id="telClient" class="input input-ajclient" value="'+tel+'" /><br>';
contenuHtml+='<span style="display:none;">&nbsp;&nbsp;&nbsp;Email<input type="email" id="emailClient" class="input input-ajclient" value="'+email+'"/><br></span>';
contenuHtml+='<a href="javascript:modClient('+id+');" class="button">Modifier</a></center>';
document.getElementById("contenu-client").innerHTML=contenuHtml;
}

function modClient(id){
var nomclient=document.getElementById("nomClient").value;
var prenomClient=document.getElementById("prenomClient").value;
var adresseClient=document.getElementById("adresseClient").value;
var telClient=document.getElementById("telClient").value;
var emailClient=document.getElementById("emailClient").value;
var dataString ='nomclient='+nomclient+'&prenomClient='+prenomClient+'&adresseClient='+adresseClient+'&telClient='+telClient+'&emailClient='+emailClient+'&idClient='+id;
$.getJSON("php/1_GestionCaisse/ModifierClient.php",dataString,
function(donnees){
afficherClient(id,nomclient,prenomClient,adresseClient,telClient,emailClient);
});
}
function AjCommande(idClient,nom,prenom,adresse,tel,email){
document.getElementById("commande").style.display="none";
var dataString ='id_client='+idClient+'&nom='+nom+'&prenom='+prenom+'&tel='+tel;
$.getJSON("php/1_GestionCaisse/AjouterCommande.php",dataString,
function(donnees){
var iniCom="0.000";
var iniTauxRemise=0;
sessionStorage.setItem("resteCommandeCourant",iniCom);
sessionStorage.setItem("tauxRemise",iniTauxRemise);
sessionStorage.setItem("especeCourant",iniCom);
document.getElementById("contenu-total").innerHTML=iniCom;
document.getElementById("contenu-a-payer").innerHTML="";
document.getElementById("contenu-ligne-commande").innerHTML="";
var contenuHtml='';
contenuHtml+='<div id="aucuneComm"><center><img src="assets/images/Symbol_OK.png" width="70px" /></center></div>';
var total=0;
sessionStorage.setItem('ticket',donnees.Commande);
sessionStorage.setItem('totalComm',total);
sessionStorage.setItem('totalCommAvecRemise',total);
document.getElementById("contenu-total").innerHTML=total.toFixed(3);
document.getElementById("numTicket").innerHTML="Ticket N:"+donnees.Commande;
$('#contenu-ligne-commande').append(contenuHtml);
sessionStorage.setItem("CommandeCourant",donnees.Commande);
sessionStorage.setItem("ClientCourant",idClient);
sessionStorage.setItem("nomClientCourant",nom);
sessionStorage.setItem("prenomClientCourant",prenom);
sessionStorage.setItem("adresseClientCourant",adresse);
sessionStorage.setItem("telClientCourant",tel);
sessionStorage.setItem("emailClientCourant",email);
});
}
function listProduitsCommander(idCommande)
{
 var dataString ='idCommande='+idCommande;
 var total=0;
$.getJSON("php/1_GestionCaisse/AfficherProduitsCommander.php",dataString,
 function(donnees)
 {
   document.getElementById("contenu-ligne-commande").innerHTML="";
   for ( var i = 0; i < donnees.ligneCommande.length; i++)
   {
	   
     if(donnees.ligneCommande[0].ligneCommande != 0)
	 {
     var typeService;
     var prix=parseFloat(donnees.ligneCommande[i].prix);
       if(donnees.ligneCommande[i].rapide == "oui")
       {
        typeService="/ Rapide";
       }
       else
	   {
        typeService="";
       }
     var operation;
       if(donnees.ligneCommande[i].lavage_repassage == "0")
       {
       operation="Lavage";
       }
       else
       {
       operation="Repassage";
       }
	   var contHTML='<div class="w-section w-clearfix item-produit"><input type="hidden" id='+donnees.ligneCommande[i].id_ligne_commande+' value='+donnees.ligneCommande[i].id_ligne_commande+'  />';
	   
	   contHTML+='<div style="display:inline-block;width:70%;float:left;text-align: left;padding-left:10px;"><div class="tit-prod">'+donnees.ligneCommande[i].nomProd+'</div>';
	  
	  contHTML+='<div id="prix'+donnees.ligneCommande[i].id_ligne_commande+'" >('+donnees.ligneCommande[i].qte+') '+prix.toFixed(3)+'<span class="typeService">'+operation+' '+typeService+' </span></div></div>';
	  
	   /*
	    if(donnees.ligneCommande[i].couleur == 'autre')
	    {
	    contHTML+='<div style="display:inline-block;width:7%;float:left;margin-top:25px;background:#eff6f7;min-height:30px;border:1px solid #000;text-align:center;font-size:8px;padding-top:4px;">autre</div>';
	    }
		else
		{
		contHTML+='<div style="display:inline-block;width:7%;float:left;margin-top:25px;background:#'+donnees.ligneCommande[i].couleur+';min-height:30px;border:1px solid #000;"></div>';
		}
	    */
	  
	  contHTML+='<div style="display:inline-block;width:15%;float:left;margin-top:20px;"><a class="miseAjourLigne" href="javascript:delLigne('+donnees.ligneCommande[i].id_ligne_commande+');"  ><img class="img-prod-calc" src="assets/images/btnfois.gif" alt="54f97bf99275d58a539537a9_btnfois.gif"></a></div>';
	  
	  contHTML+='</div>';
	  
	  
	   
       $('#contenu-ligne-commande').append(contHTML);
	   var qte=parseInt(donnees.ligneCommande[i].qte);
       total+=parseFloat(prix * qte);
	   sessionStorage.setItem('totalComm',total);
	  }
	  else
	  {
		total=0;
        sessionStorage.setItem('totalComm',total);		
	  }
      
	  
   }
   sessionStorage.setItem('totalCommAvecRemise',total);	
   reste();
document.getElementById("contenu-total").innerHTML=total.toFixed(3);

 });
}

function calculatrice(nb){
if (nb == 'c'){
document.getElementById("contenu-a-payer").innerHTML="";
}
else{
$('#contenu-a-payer').append(nb);
}
}

function reste(){
var idComm=parseInt(sessionStorage.getItem("CommandeCourant"));
var total=sessionStorage.getItem('totalCommAvecRemise');
var payer=$("#contenu-a-payer").html();
sessionStorage.setItem("especeCourant",payer);

var reste=parseFloat(payer-total);

if ( reste > 0){
document.getElementById("contenu-a-reste").innerHTML="A RENDRE :  "+reste.toFixed(3)+"  DT";
sessionStorage.setItem("resteCommandeCourant",reste);
}
else{
var	reste2=reste*-1;
document.getElementById("contenu-a-reste").innerHTML="RESTE:  "+reste2.toFixed(3) +"  DT";	
sessionStorage.setItem("resteCommandeCourant",reste);
}
document.getElementById("contenu-a-payer").innerHTML="";
var dataString ='idComm='+idComm+'&total='+total+'&reste='+reste;
$.getJSON("php/1_GestionCaisse/ModifierTotalCommande.php",dataString,
function(donnees){

});
}


function delLigne(id){
var dataString ='idLigne='+id
$.getJSON("php/1_GestionCaisse/SupprimerLigneCommande.php",dataString,
function(donnees){
var commande=sessionStorage.getItem("CommandeCourant");
listProduitsCommander(commande);
});
}
function AjouterClient(){
document.getElementById("contenu-client").innerHTML="";
document.getElementById("BtnCherch").style.display="block";
document.getElementById("BtnCherchMod").style.display="none";
var contenuHtml=''; 
contenuHtml+='<center><br>Nom & Prénom <br><br><input type="text" id="nomClient" class="input input-ajclient"  /><br>';
contenuHtml+='<span style="display:none;">Prenom <input type="text" id="prenomClient" class="input input-ajclient" /><br></span>';
contenuHtml+='<span style="display:none;">Adresse <input type="text" id="adresseClient" class="input input-ajclient"/><br></span>';
contenuHtml+='Tel<br><input type="text" id="telClient" class="input input-ajclient" /><br>';
contenuHtml+='<span style="display:none;">&nbsp;&nbsp;&nbsp;Email<input type="email" id="emailClient" class="input input-ajclient"/><br></span>';
contenuHtml+='<a href="javascript:enrClient();" class="button">Ajouter</a></center>';
document.getElementById("contenu-client").innerHTML=contenuHtml;
}

function enrClient(){
document.getElementById("contenu-client").style.display="none";
var nomclient=document.getElementById("nomClient").value;
var prenomClient=document.getElementById("prenomClient").value;
var adresseClient=document.getElementById("adresseClient").value;
var telClient=document.getElementById("telClient").value;
var emailClient=document.getElementById("emailClient").value;
var dataString ='nomclient='+nomclient+'&prenomClient='+prenomClient+'&adresseClient='+adresseClient+'&telClient='+telClient+'&emailClient='+emailClient;
$.getJSON("php/1_GestionCaisse/AjouterClient.php",dataString,
function(donnees){
afficherClient(donnees.clients,nomclient,prenomClient,adresseClient,telClient,emailClient);
});
}
function modifierClient(){
document.getElementById("contenu-client").innerHTML="<center><div id='aucuneComm'><h4>Entrez Votre clé de recherche</h4></div></center>";
document.getElementById("BtnCherch").style.display="none";
document.getElementById("BtnCherchMod").style.display="block";
}

function service(){
var servicerapide=sessionStorage.getItem("serRapide");
if (servicerapide =="non"){
var ser="oui";
sessionStorage.setItem("serRapide",ser);
}
else
if(servicerapide =="oui"){
var ser="non";
sessionStorage.setItem("serRapide",ser);
}
}

function selectCath(el){
var kids=document.getElementById('cathegorie').children;
for (var i=0; i<kids.length;i++){
kids[i].className = "sous-cathegorie selectCathProd2";
}
    el.className ="sous-cathegorie selectCathProd1";
}
function selectItProd(el){
var kids=document.getElementById('produits').children;
for (var i=0; i<kids.length;i++){
kids[i].className = "sous-cathegorie sous-cathegorie-prod selectProd2";
}
el.className ="sous-cathegorie sous-cathegorie-prod selectProd1";
}

/*
function imprimerTicket(){
	
var dateSortie=document.getElementById("dateSortie").value;
var numTicket=sessionStorage.getItem("ticket");
var prenomClientCourant=sessionStorage.getItem("prenomClientCourant");
var nomClientCourant=sessionStorage.getItem("nomClientCourant");
var telClientCourant=sessionStorage.getItem("telClientCourant");
var totalComm=parseFloat(sessionStorage.getItem("totalCommAvecRemise"));
var resteCommandeCourant=parseFloat(sessionStorage.getItem("resteCommandeCourant"));
var especeCourant=parseFloat(sessionStorage.getItem("especeCourant"));

var dataString ='idCommande='+numTicket;
$.getJSON("php/1_GestionCaisse/AfficherProduitsCommander.php",dataString,
function(donnees){
var contenuHtml='<div style="width:30%;"><h5 class="tit-imp-ticket"> <strong style="font-size:18px;border-radius:20px;border:1px solid #000;padding:5px;">PR</strong> Pressing Royal </h5> '; 
contenuHtml+='<div class="tik-date-imp-ticket" >';	
contenuHtml+='<h5 class="tit-imp-ticket" >TICKET N° :'+numTicket+'</h5>';
contenuHtml+='<h5 class="tit-imp-ticket" >LIVRAISON LE :'+dateSortie+'</h5>';
contenuHtml+='</div>';
contenuHtml+='<div class="list-art-imp-ticket">';
contenuHtml+='<div class="item-list-art-imp-ticket imp-article" >';
contenuHtml+='<strong>Article</strong>';
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-qte" >';
contenuHtml+='<strong>Qte</strong>';
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-prix-ttc" >';
contenuHtml+='<strong>Prix TTC</strong>';
contenuHtml+='</div>';
contenuHtml+='</div>';
for ( var i = 0; i < donnees.ligneCommande.length; i++){
if(donnees.ligneCommande[0].ligneCommande != 0){
	var prixLigneComm=parseFloat(donnees.ligneCommande[i].prix);
contenuHtml+='<div class="list-art-imp-ticket">';
contenuHtml+='<div class="item-list-art-imp-ticket imp-article" >';


if (donnees.ligneCommande[i].lavage_repassage == '1')
{
contenuHtml+='<strong>(R) '+donnees.ligneCommande[i].nomProd+'</strong>';
}
else
{
	
contenuHtml+='<strong>'+donnees.ligneCommande[i].nomProd+'</strong>';	
}
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-qte" >';
contenuHtml+='<strong>'+donnees.ligneCommande[i].qte+'</strong>';
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-prix-ttc" >';
contenuHtml+='<strong>'+prixLigneComm.toFixed(3)+' DT</strong>';
contenuHtml+='</div>';
contenuHtml+='</div>';
}
}
contenuHtml+='<div class="imp-item-prod">';

var tauxRemise=sessionStorage.getItem("tauxRemise");

     contenuHtml+='<p ><strong>Total : '+totalComm.toFixed(3)+' DT</strong><br>';

if (tauxRemise != 0){

     contenuHtml+='<strong >Remise : '+tauxRemise+' %</strong></p><br>';

}

if ((totalComm -especeCourant) != 0 )
{
	if (especeCourant != 0)
	{

    contenuHtml+='<p ><strong >Espece : '+especeCourant.toFixed(3)+' DT</strong></p>';
     if (resteCommandeCourant > 0)
	  {
      contenuHtml+='<p ><strong>A rendre : '+resteCommandeCourant.toFixed(3)+'</strong></p>';
      }
    else
      {
      var resteCommandeCourant2= resteCommandeCourant*-1;
      contenuHtml+='<p ><strong>Reste à payer : '+resteCommandeCourant2.toFixed(3)+'</strong></p>';	
      }
	}
	else
	{
	contenuHtml+='<p ><strong>Non Payé</strong></p>';	
	}
}	
if(totalComm -especeCourant == 0)
{
contenuHtml+='<p ><strong>Payé</strong></p>';	
}
contenuHtml+='<p>CLIENT : '+prenomClientCourant+' '+nomClientCourant+'<BR>';
contenuHtml+='TEL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: '+telClientCourant+'</p>';
contenuHtml+='</div>';
contenuHtml+='<div style="font-size:10px;line-height:10px">Nous vous remercions de votre visite A Bientôt</div>';
contenuHtml+='<div>Mohsen Banneni</div>';

contenuHtml+='<div style="font-size:10px;line-height:10px"> 95 361 227</div>';


/*
contenuHtml+='<img src="http://localhost/pressing/php/1_GestionCaisse/barcode.php?text='+numTicket+'" height="70" /><br>';

contenuHtml+=' 00000'+numTicket+' </div>';


document.getElementById("tkt-pos-caisse").innerHTML=contenuHtml;
sessionStorage.removeItem("ticket");
sessionStorage.removeItem("ClientCourant");
sessionStorage.removeItem("CommandeCourant");
sessionStorage.removeItem("IdCatProd");
sessionStorage.removeItem("Prix1Prod");
sessionStorage.removeItem("Prix2Prod");
sessionStorage.removeItem("UrlProd");
sessionStorage.removeItem("adresseClientCourant");
sessionStorage.removeItem("emailClientCourant");
sessionStorage.removeItem("especeCourant");
sessionStorage.removeItem("idProd");
sessionStorage.removeItem("nomClientCourant");
sessionStorage.removeItem("nomProd");
sessionStorage.removeItem("operation");
sessionStorage.removeItem("prenomClientCourant");
sessionStorage.removeItem("resteCommandeCourant");
sessionStorage.removeItem("serRapide");
sessionStorage.removeItem("telClientCourant");
sessionStorage.removeItem("totalComm");
location.reload();

window.print();
});
}
*/


function imprimerTicket(){
var dateSortie=document.getElementById("dateSortie").value;
var numTicket=sessionStorage.getItem("ticket");
var prenomClientCourant=sessionStorage.getItem("prenomClientCourant");
var nomClientCourant=sessionStorage.getItem("nomClientCourant");
var telClientCourant=sessionStorage.getItem("telClientCourant");
var totalComm=parseFloat(sessionStorage.getItem("totalCommAvecRemise"));
var resteCommandeCourant=parseFloat(sessionStorage.getItem("resteCommandeCourant"));
var especeCourant=parseFloat(sessionStorage.getItem("especeCourant"));

var dataString ='idCommande='+numTicket;
$.getJSON("php/1_GestionCaisse/AfficherProduitsCommander.php",dataString,
function(donnees){
var contenuHtml='<center><h5 class="tit-imp-ticket"> <strong style="font-size:18px;border-radius:20px;border:1px solid #000;padding:5px;">PR</strong> Pressing Royal</h5></center>'; 
contenuHtml+='<div class="tik-date-imp-ticket" style="line-height:10px">';	
contenuHtml+='<center><h5 class="tit-imp-ticket" style="font-size:13px;line-height:10px">TICKET N° :'+numTicket+'</h5></center>';
contenuHtml+='<center><h5 class="tit-imp-ticket" style="font-size:13px;line-height:10px">LIVRAISON LE :'+dateSortie+'</h5></center>';
contenuHtml+='</div>';
contenuHtml+='<div class="list-art-imp-ticket">';
contenuHtml+='<div class="item-list-art-imp-ticket imp-article" style="font-size:10px;line-height:10px">';
contenuHtml+='<strong>Article</strong>';
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-qte" style="font-size:10px;line-height:10px">';
contenuHtml+='<strong>Qte</strong>';
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-prix-ttc" style="font-size:10px;line-height:10px">';
contenuHtml+='<strong>Prix TTC</strong>';
contenuHtml+='</div>';
contenuHtml+='</div>';
for ( var i = 0; i < donnees.ligneCommande.length; i++){
if(donnees.ligneCommande[0].ligneCommande != 0){
	var prixLigneComm=parseFloat(donnees.ligneCommande[i].prix);
contenuHtml+='<div class="list-art-imp-ticket">';
contenuHtml+='<div class="item-list-art-imp-ticket imp-article" style="font-size:10px;line-height:10px">';


if (donnees.ligneCommande[i].lavage_repassage == '1')
{
contenuHtml+='<strong>(R) '+donnees.ligneCommande[i].nomProd+'</strong>';
}
else
{
	
contenuHtml+='<strong>'+donnees.ligneCommande[i].nomProd+'</strong>';	
}
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-qte" style="font-size:10px;line-height:10px">';
contenuHtml+='<strong>'+donnees.ligneCommande[i].qte+'</strong>';
contenuHtml+='</div>';
contenuHtml+='<div class="item-list-art-imp-ticket imp-prix-ttc" style="font-size:10px;line-height:10px">';
contenuHtml+='<strong>'+prixLigneComm.toFixed(3)+' DT</strong>';
contenuHtml+='</div>';
contenuHtml+='</div>';
}
}
contenuHtml+='<div class="imp-item-prod">';

var tauxRemise=sessionStorage.getItem("tauxRemise");

     contenuHtml+='<p style="font-size:10px;line-height:10px"><strong>Total : '+totalComm.toFixed(3)+' DT</strong><br>';

if (tauxRemise != 0){

     contenuHtml+='<strong style="font-size:10px;line-height:10px">Remise : '+tauxRemise+' %</strong></p><br>';

}

if ((totalComm -especeCourant) != 0 )
{
	if (especeCourant != 0)
	{

    contenuHtml+='<p style="font-size:10px;line-height:10px"><strong >Espece : '+especeCourant.toFixed(3)+' DT</strong></p>';
     if (resteCommandeCourant > 0)
	  {
      contenuHtml+='<p style="font-size:10px;line-height:10px"><strong>A rendre : '+resteCommandeCourant.toFixed(3)+'</strong></p>';
      }
    else
      {
      var resteCommandeCourant2= resteCommandeCourant*-1;
      contenuHtml+='<p style="font-size:10px;line-height:10px"><strong>Reste à payer : '+resteCommandeCourant2.toFixed(3)+'</strong></p>';	
      }
	}
	else
	{
	contenuHtml+='<p style="font-size:10px;line-height:10px"><strong>Non Payé</strong></p>';	
	}
}	
if(totalComm -especeCourant == 0)
{
contenuHtml+='<p style="font-size:10px;line-height:10px"><strong>Payé</strong></p>';	
}
contenuHtml+='<p style="font-size:10px;line-height:10px">CLIENT : '+prenomClientCourant+' '+nomClientCourant+'<BR>';
contenuHtml+='TEL&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: '+telClientCourant+'</p>';
contenuHtml+='</div>';
contenuHtml+='<center style="font-size:10px;line-height:10px">Nous vous remercions de votre visite A Bientôt</center>';
contenuHtml+='<center>Mohsen Banneni</center>';
contenuHtml+='<center style="font-size:10px;line-height:10px"> 95 361 227</center>';
contenuHtml+='<center style="font-size:10px;line-height:10px"> 77 230 322</center>';
contenuHtml+='<img src="http://localhost/pressing/php/1_GestionCaisse/barcode.php?text='+numTicket+'" height="70" /><br>';
contenuHtml+=' 00000'+numTicket+'';
document.getElementById("tkt-pos-caisse").innerHTML=contenuHtml;
sessionStorage.removeItem("ticket");
sessionStorage.removeItem("ClientCourant");
sessionStorage.removeItem("CommandeCourant");
sessionStorage.removeItem("IdCatProd");
sessionStorage.removeItem("Prix1Prod");
sessionStorage.removeItem("Prix2Prod");
sessionStorage.removeItem("UrlProd");
sessionStorage.removeItem("adresseClientCourant");
sessionStorage.removeItem("emailClientCourant");
sessionStorage.removeItem("especeCourant");
sessionStorage.removeItem("idProd");
sessionStorage.removeItem("nomClientCourant");
sessionStorage.removeItem("nomProd");
sessionStorage.removeItem("operation");
sessionStorage.removeItem("prenomClientCourant");
sessionStorage.removeItem("resteCommandeCourant");
sessionStorage.removeItem("serRapide");
sessionStorage.removeItem("telClientCourant");
sessionStorage.removeItem("totalComm");
location.reload();
window.print();
});
}



function remise(){
var remise=parseInt(document.getElementById("remise").value);
var total=parseFloat(sessionStorage.getItem('totalComm'));
var MontantRemise= (total * remise) / 100 ;
var totalAvecRemise = total - MontantRemise;
document.getElementById("contenu-total").innerHTML=totalAvecRemise.toFixed(3);
sessionStorage.setItem('totalCommAvecRemise',totalAvecRemise);
sessionStorage.setItem('tauxRemise',remise);
reste();
}



 

