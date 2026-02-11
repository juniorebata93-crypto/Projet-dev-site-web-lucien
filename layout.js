  // récupérer la  div all-cards
  const cards = document.querySelector(".all-cards");
  //on récupère le formulaire
  //on récupère lme fichier json
fetch("data.json")
     .then(response => response.json())
     .then((data) => {
        console.log(data)
        data.cards.forEach((card) => {
            //on crée le html (card)
            const html = `<div class="${card.class}">                            
                                     <a href="${card.url}">
                                              <article class="${card.id}">
                                                      <h1> ${card.titre}</h1>                                                              
                                              </article>
                                     </a>
                              </div>
                         </div>`;                             
                //on ajoute notre card dans le html
            cards.insertAdjacentHTML("beforeend", html);
        });
 });
 	
//On récupère la section
 const section= document.querySelector(".all")
//on récupère le button
 const searchInput =document.querySelector('.search-bar');
      searchInput.addEventListener('input',(event) => {
         const value = event.target.value;
      });
          // fetch le fichier json pour récupérer les données (cards)
         fetch("data.json")  
               console.log(card)
        data.cards.forEach((card) =>{
            const html = `<div class="${card.class}">                            
                                     <a href="${card.url}">
                                                     <article class="${card.id}">
                                                             <div>  
                                                                     <h1> ${card.titre}</h1>                                                              
                                                             </div>
                                                     </article>                                               
                                     </a>                            
                          </div>`; 
      });         
          const results = cards.filter(tech => {
               return tech.name.toLowerCase().includes(value);
            });
              // ajouter chaque cards dans le html



//on écoute le click
 

//ON Charger les données 
   
// ON Récupérer la barre de recherche 
  

//ON Récupérer la zone d'affichage des résultats 
   
//ON Quand l'utilisateur écrit dans la barre de recherche 
  

