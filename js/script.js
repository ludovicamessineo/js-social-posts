// **Milestone 1** - Creiamo il nostro array di oggetti che rappresentano ciascun post (come da esempio).
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy: es 05-03-2022),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// *Non è necessario creare date casuali*
// *Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)*
// **Milestone 2** - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// **Milestone 3** - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.


// Creo array di oggetti

const post = [
    {
      id: "19",
      nome: "memezar",
      foto: "https://unsplash.it/300/300?image=2",
      data: "05-03-2022",
      testo: "And they say romance is dead",
      immagine: "https://unsplash.it/300/300?image=5",
      like: 34,
    },
    {
        id: "32",
        nome: "9gag",
        foto: "https://unsplash.it/300/300?image=16",
        data: "05-01-2022",
        testo: "Good old times",
        immagine: "https://unsplash.it/300/300?image=32",
        like: 78,
      },
      {
        id: "45",
        nome: "will_ita",
        foto: "https://unsplash.it/300/300?image=445",
        data: "05-03-2022",
        testo: "Secondo la FAO gli sprechi alimentari nel mondo ammontano a più di 1.3 miliardi di tonnellate all'anno, pari a circa un terzo della produzione totale.",
        immagine: "https://unsplash.it/300/300?image=56",
        like: 71,
      },
      {
        id: "89",
        nome: "theoffice",
        foto: "https://unsplash.it/300/300?image=123",
        data: "05-01-2022",
        testo: "Jim's advice >>>",
        immagine: "https://unsplash.it/300/300?image=99",
        like: 99,
      }
];


// Prelevo il contenitore dall'html
const postContainer = document.getElementById("container");
console.log(postContainer);


// Creo una funzione per stampare i post nella pagina
printPost(postContainer, post);


function printPost (container, array) {
    // Con ciclo forEach ciclo tutti gli oggetti nell'array
    array.forEach(element => {
        //Creo un'altra funzione con il compito di creare gli elementi del dom
        const newElement = createDomElement(element);
        container.append(newElement);
    });
}

// Funzione che crea gli elementi del dom
function createDomElement(item) {
    const domElement = document.createElement("div");
    domElement.classList.add("post");
    domElement.innerHTML = `
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                <img class="profile-pic" src="${item.foto}">                    
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${item.nome}</div>
                <div class="post-meta__time">${item.data}</div>
            </div>                    
    </div>
    <div class="post__text">${item.testo}</div>
        <div class="post__image">
            <img src="${item.immagine}" alt="">
        </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${item.like}</b> persone
            </div>
        </div> 
    </div>            
    `;
    return domElement;
};