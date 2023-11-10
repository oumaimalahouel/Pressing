function authentification() 
{

  var login= document.getElementById("login").value;
  
  var password= document.getElementById("password").value;
  
  var dataString ='login='+login+'&pass='+password;
  
  $.getJSON("php/Index/Authentification.php",dataString,
        function(donnees)
		{
		
                if (donnees.utilisateur[0].login == login && donnees.utilisateur[0].mdp == password )
				    {
				  
                            sessionStorage.setItem("id",donnees.utilisateur[0].id_utilisateur);

							sessionStorage.setItem("nom",donnees.utilisateur[0].nom);

							sessionStorage.setItem("prenom",donnees.utilisateur[0].prenom);

                            sessionStorage.setItem("role",donnees.utilisateur[0].role);

							sessionStorage.setItem("tel",donnees.utilisateur[0].tel);

							sessionStorage.setItem("images",donnees.utilisateur[0].images);
							
                           document.location.href="1_GestionCaisse";
                    }
					
                else if (donnees.utilisateur[0].id_utilisateur == 0)
					{
                            alert(":( Incorrect Réesayer :(");
                    }
        });
}
