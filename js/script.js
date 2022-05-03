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
      foto: "https://unsplash.it/300/300?image=",
      data: "05-03-2022",
      testo: "And they say romance is dead",
      immagine: "https://unsplash.it/300/300?image=",
      like: 34,
    },
    {
        id: "32",
        nome: "9gag",
        foto: "https://unsplash.it/300/300?image=",
        data: "05-01-2022",
        testo: "Good old times",
        immagine: "https://unsplash.it/300/300?image=",
        like: 78,
      },
      {
        id: "45",
        nome: "will_ita",
        foto: "https://unsplash.it/300/300?image=",
        data: "05-03-2022",
        testo: "Secondo la FAO gli sprechi alimentari nel mondo ammontano a più di 1.3 miliardi di tonnellate all'anno, pari a circa un terzo della produzione totale.",
        immagine: "https://unsplash.it/300/300?image=",
        like: 71,
      },
      {
        id: "89",
        nome: "theoffice",
        foto: "https://unsplash.it/300/300?image=",
        data: "05-01-2022",
        testo: "Jim's advice >>>",
        immagine: "https://unsplash.it/300/300?image=",
        like: 99,
      }
];

console.log(post);