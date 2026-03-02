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
                                                                                                                 
                                              </article>
                                     </a>
                              </div>
                         </div>`;                             
                //on ajoute notre card dans le html
            cards.insertAdjacentHTML("beforeend", html);
        });
 });
 	
