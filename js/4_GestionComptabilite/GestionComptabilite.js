
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
document.getElementById("jour-compta").innerHTML=jour;
document.getElementById("mois-compta").innerHTML=resultmois+' , '+annee;


/* Fin Fonction qui affiche la date courant  */



/* Debut Fonction qui affiche Revenu + depense + nouveaux clients + Commandes  */

$.getJSON("php/4_GestionComptabilite/Compta.php",
function(donnees){
var revenu=parseFloat(donnees.compta[0].revenu);
var revenu2=parseFloat(donnees.compta[0].revenu2);
document.getElementById("valtxt-rev").innerHTML=revenu.toFixed(3)+' DT';
document.getElementById("valstat-rev").innerHTML=revenu2.toFixed(3)+' DT';
var depense=parseFloat(donnees.compta[0].depense);
document.getElementById("valtxt-dep").innerHTML=depense.toFixed(3)+' DT';
document.getElementById("valstat-dep").innerHTML=depense.toFixed(3)+' DT';
var revenuNet= revenu-depense;
document.getElementById("valtxt-net").innerHTML=revenuNet.toFixed(3)+' DT';
document.getElementById("valstat-com").innerHTML=donnees.compta[0].nouveauCommande;
document.getElementById("valstat-dcom").innerHTML=donnees.compta[0].nouveauClient;

});

/* Fin Fonction qui affiche Revenu + depense + nouveaux clients + Commandes  */

/* Debut Fonction  Liste depenses */

$.getJSON("php/4_GestionComptabilite/ListDepense.php",
function(donnees){
var contenuHtml='';
var total=0;
for ( var i = 0; i < donnees.depense.length; i++){
var montant=parseFloat(donnees.depense[i].montant);
total+=montant;
contenuHtml+='<div class="item-list-dep" style="text-align:left;"><div style="display:inline-block;width:33%;text-transform:uppercase;">'+donnees.depense[i].description+'</div><div style="display:inline-block;width:33%;text-align:right;">'+donnees.depense[i].date+'</div><div style="display:inline-block;width:33%;text-align:right;"><strong>'+montant.toFixed(3)+'DT</strong></div></div>';
}
document.getElementById("les-dernieres-depense").innerHTML=contenuHtml;
document.getElementById("tot-der-dep").innerHTML='<strong>'+total.toFixed(3)+' dt</strong>';
});

/* Fin Fonction  Liste depenses */

/* Debut Fonction Derniers commandes */

$.getJSON("php/4_GestionComptabilite/DerniereComm.php",
function(donnees){
var contenuHtml='';
var total=0;
for ( var i = 0; i < donnees.derniere_commande.length; i++){
var montant=parseFloat(donnees.derniere_commande[i].total);
total+=montant;
contenuHtml+=' <div class="item-list-dep" style="text-align:left;"><div style="display:inline-block;width:33%;text-transform:uppercase;">'+donnees.derniere_commande[i].id_commande+'</div><div style="display:inline-block;width:33%;text-align:center;">'+donnees.derniere_commande[i].date+'</div><div style="display:inline-block;width:33%;text-align:right;"><strong>'+montant.toFixed(3)+' DT</strong></div></div>';
}
document.getElementById("les-dernieres-comm").innerHTML=contenuHtml;
document.getElementById("tot-der-com").innerHTML='<strong>'+total.toFixed(3)+' dt</strong>';
});

$.getJSON("php/4_GestionComptabilite/DerniereCommEnt.php",
function(donnees){
var contenuHtml='';
var total=0;
for ( var i = 0; i < donnees.derniere_commande.length; i++){


var montant=parseFloat(donnees.derniere_commande[i].total);
total+=montant;
contenuHtml+='<div class="item-list-dep" style="text-align:left;"><div style="display:inline-block;width:33%;text-transform:uppercase;">'+donnees.derniere_commande[i].id_commande+'</div><div style="display:inline-block;width:33%;text-align:center;">'+donnees.derniere_commande[i].date+'</div><div style="display:inline-block;width:33%;text-align:right;"><strong>'+montant.toFixed(3)+' DT</strong></div></div>';

}
document.getElementById("les-dernieres-comment").innerHTML=contenuHtml;
document.getElementById("tot-der-com-ent").innerHTML='<strong>'+total.toFixed(3)+' dt</strong>';
});

});

/* Fin Fonction Derniers commandes */


/* Debut Fonction Ajouter Depense */

function ajouterDepense(){
var contenuHtml='';
contenuHtml+='<center>&nbsp;&nbsp;&nbsp;Montant  <input type="text" id="montantDep" class="input input-ajclient"  /><br>';
contenuHtml+='<span class="label-form">Description  </span><input type="text" id="descriptionDep" class="input input-ajclient" /><br>';
contenuHtml+='<a href="javascript:enrDepense();" class="button">Ajouter</a></center>';
document.getElementById("les-dernieres-depense").innerHTML=contenuHtml;
}

function enrDepense(){
var montantDep=document.getElementById("montantDep").value;
var descriptionDep=document.getElementById("descriptionDep").value;
var dataString ='montantDep='+montantDep+'&descriptionDep='+descriptionDep;
$.getJSON("php/4_GestionComptabilite/AjouterDepense.php",dataString,
function(donnees){
location.reload();
});
}

/* Fin Fonction Ajouter Depense */

/* Debut fonction Dernier Commande par date */

function DerCommandeDate(){
var dateCommandeDer=document.getElementById("dateDerCom").value;
var dateDerCom2=document.getElementById("dateDerCom2").value;
var dataString ='derDate='+dateCommandeDer+'&&derDate2='+dateDerCom2;
var total1=0;
$.getJSON("php/4_GestionComptabilite/DerniereCommDate.php",dataString,
function(donnees){
var contenuHtml='';

if(donnees.derniere_commande[0].id_commande != 0)
{

for ( var i = 0; i < donnees.derniere_commande.length; i++){
var montant=parseFloat(donnees.derniere_commande[i].total);
total1+=montant;
contenuHtml+=' <div class="item-list-dep" style="text-align:left;"><div style="display:inline-block;width:33%;text-transform:uppercase;">'+donnees.derniere_commande[i].id_commande+'</div><div style="display:inline-block;width:33%;text-align:center;">'+donnees.derniere_commande[i].date+'</div><div style="display:inline-block;width:33%;text-align:right;"><strong>'+montant.toFixed(3)+' DT</strong></div></div>';
}

}
document.getElementById("les-dernieres-comm").innerHTML=contenuHtml;
document.getElementById("tot-der-com").innerHTML='<strong>'+total1.toFixed(3)+' dt</strong>';
sessionStorage.setItem("recette1",total1);

});
var total2=0;
$.getJSON("php/4_GestionComptabilite/DerniereCommDateEnt.php",dataString,
function(donnees){
var contenuHtml='';

if(donnees.derniere_commande[0].id_commande != 0)
{

for ( var i = 0; i < donnees.derniere_commande.length; i++){
var montant=parseFloat(donnees.derniere_commande[i].total);
total2+=montant;
contenuHtml+=' <div class="item-list-dep" style="text-align:left;"><div style="display:inline-block;width:33%;text-transform:uppercase;">'+donnees.derniere_commande[i].id_commande+'</div><div style="display:inline-block;width:33%;text-align:center;">'+donnees.derniere_commande[i].date+'</div><div style="display:inline-block;width:33%;text-align:right;"><strong>'+montant.toFixed(3)+' DT</strong></div></div>';
}

}
document.getElementById("les-dernieres-comment").innerHTML=contenuHtml;
document.getElementById("tot-der-com-ent").innerHTML='<strong>'+total2.toFixed(3)+' dt</strong>';
sessionStorage.setItem("recette2",total2);

});


$.getJSON("php/4_GestionComptabilite/ListDepenseDate.php",dataString,
function(donnees){
var contenuHtml='';
var total=0;
if(donnees.depense[0].id_produits != 0)
{
for ( var i = 0; i < donnees.depense.length; i++){
var montant=parseFloat(donnees.depense[i].montant);
total+=montant;
contenuHtml+='<div class="item-list-dep" style="text-align:left;"><div style="display:inline-block;width:33%;text-transform:uppercase;">'+donnees.depense[i].description+'</div><div style="display:inline-block;width:33%;text-align:right;">'+donnees.depense[i].date+'</div><div style="display:inline-block;width:33%;text-align:right;"><strong>'+montant.toFixed(3)+'DT</strong></div></div>';
}
}
document.getElementById("les-dernieres-depense").innerHTML=contenuHtml;
document.getElementById("tot-der-dep").innerHTML='<strong>'+total.toFixed(3)+' dt</strong>';




});
var rec1=parseFloat(sessionStorage.getItem("recette1"));
var rec2=parseFloat(sessionStorage.getItem("recette2"));


var recette=rec1+rec2;
document.getElementById("blrecette").style.display="block";
document.getElementById("recette").innerHTML=recette.toFixed(3);
}
/* fin  fonction Dernier Commande par date */

/* Debut fonction Dernier Depense par date */


/*

function DerDepenseDate(){
var dateDepenseDer=document.getElementById("dateDerDep").value;
var dataString ='derDate='+dateDepenseDer;
$.getJSON("php/4_GestionComptabilite/ListDepenseDate.php",dataString,
function(donnees){
var contenuHtml='';
var total=0;
if(donnees.depense[0].id_produits != 0)
{
for ( var i = 0; i < donnees.depense.length; i++){
var montant=parseFloat(donnees.depense[i].montant);
total+=montant;
contenuHtml+='<div class="item-list-dep" style="text-align:left;"><div style="display:inline-block;width:33%;text-transform:uppercase;">'+donnees.depense[i].description+'</div><div style="display:inline-block;width:33%;text-align:right;">'+donnees.depense[i].date+'</div><div style="display:inline-block;width:33%;text-align:right;"><strong>'+montant.toFixed(3)+'DT</strong></div></div>';
}
}
document.getElementById("les-dernieres-depense").innerHTML=contenuHtml;
document.getElementById("tot-der-dep").innerHTML='<strong>'+total.toFixed(3)+' dt</strong>';
});
}


*/
/* Fin fonction Dernier Depense par date */