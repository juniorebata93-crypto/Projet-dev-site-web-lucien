  // récupérer la  div all-cards
const cards = document.querySelector(".all-cards");
  //on récupère le formulaire
  //on récupère lme fichier json
fetch("data.json")
     .then(response => response.json())
     .then((data) => {
        console.log(data)
        data.cards.forEach((member) => {
            //on crée le html (card)
            const card = `<div class="cards1">
                         <a href="index-2.html">
                             <article class="card1">
                                <div> 
                                    <h1> ${member.titre}</h1>
                                </div>
                                
                             </article>
                         </a>
                    </div>`;
                //on ajoute notre card dans le html
            cards.insertAdjacentHTML("beforeend", card);
        });
 });
