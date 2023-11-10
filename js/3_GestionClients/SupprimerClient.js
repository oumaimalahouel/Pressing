function suppClient(id)
{

     var dataString ='idClient='+id;
	 
     $.getJSON("php/3_GestionClients/SupprimerClients.php",dataString,
	 
     function(donnees)
	 {
	 

	     location.reload();
    });
}