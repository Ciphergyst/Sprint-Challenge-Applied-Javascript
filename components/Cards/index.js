// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
// "articles": {
//     "javascript": [
//         {
//             "headline": "ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",
//             "authorPhoto": "./assets/sir.jpg",
//             "authorName": "SIR RUFF'N'STUFF"
//         },
//         {
//             "headline": "Type Coercion: Why Does NaN !== NaN? and Other Strange Occurrences",
//             "authorPhoto": "./assets/bones.jpg",
//             "authorName": "BONES R. LIFE"
//         },
//         {
//             "headline": "When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",
//             "authorPhoto": "./assets/puppers.jpg",
//             "authorName": "PUPPER S. DOGGO"
//         },
//         {
//             "headline": "Typescript: Ten Things you Should Know Before Building Your Next Angular Application",
//             "authorPhoto": "./assets/sir.jpg",
//             "authorName": "SIR RUFF'N'STUFF"
//         }
//     ],
//     "bootstrap": [
//         {
//             "headline": "Bootstrap 5: Get a Sneak Peak at all the New Features",
//             "authorPhoto": "./assets/fido.jpg",
//             "authorName": "FIDO WALKSALOT"
//         },
//         {
//             "headline": "UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",
//             "authorPhoto": "./assets/max.jpg",
//             "authorName": "MAX GOODBOYE"
//         },
//         {
//             "headline": "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
//             "authorPhoto": "./assets/max.jpg",
//             "authorName": "MAX GOODBOYE"
//         }
//     ],
//     "technology": [
//         {
//             "headline": "AI: What Are the Ethical Ramifications of the Future?",
//             "authorPhoto": "./assets/max.jpg",
//             "authorName": "MAX GOODBOYE"
//         },
//         {
//             "headline": "AR or VR: How We Will See the World Through a Digital Lense",
//             "authorPhoto": "./assets/max.jpg",
//             "authorName": "MAX GOODBOYE"
//         },
//         {
//             "headline": "Quantum Computing: Where we Are Now, and Where We Will Be Very Soon",
//             "authorPhoto": "./assets/max.jpg",
//             "authorName": "MAX GOODBOYE"
//         }
//     ],
//     "jquery": [
//         {
//             "headline": "History of Javascript Libraries: from jQuery to React",
//             "authorPhoto": "./assets/puppers.jpg",
//             "authorName": "PUPPER S. DOGGO"
//         },
//         {
//             "headline": "jQuery Animations: When and Where to Use Them, and Not CSS",
//             "authorPhoto": "./assets/fido.jpg",
//             "authorName": "FIDO WALKSALOT"
//         },
//         {
//             "headline": "Why I Use jQuery in Every Application I Create and Why You Should Too",
//             "authorPhoto": "./assets/fido.jpg",
//             "authorName": "FIDO WALKSALOT"
//         }
//     ],
//     "node": [
//         {
//             "headline": "Node.js in 2018: Which Framework? Express, Sails, Hapi?",
//             "authorPhoto": "./assets/sir.jpg",
//             "authorName": "SIR RUFF'N'STUF"
//         },
//         {
//             "headline": "MongoDB: NoSQL vs. SQL, the Debate Continues..",
//             "authorPhoto": "./assets/bones.jpg",
//             "authorName": "BONES R. LIFE"
//         }
//     ]
// }
// }

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then((response) => {
    console.log(response);
    Object.data(response.data.article).forEach((item) => {
        item.forEach((item) => {
            const cards = document.querySelector('.cards-container');
            cards.appendChild(cardCreator(item));
        })
    })
})

function cardCreator(axiosData){
    const divCard = document.createElement('div');
    const divHeader = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImgContainer = document.createElement('div');
    const newImg = document.createElement('img');
    const newSpan = document.createElement('span');

    divCard.classList.add('card');
    divHeader.classList.add('headline');
    divAuthor.classList.add('author');
    divImgContainer('img-container');

    divHeader.textContent = axiosData.headline;
    newImg.src = axiosData.authorPhoto;
    newSpan.textContent = axiosData.authorName;

    divImgContainer.appendChild(newImg);
    divAuthor.appendChild(divImgContainer);
    divAuthor.appendChild(newSpan);
    divHeader.appendChild(divAuthor);
    divCard.appendChild(divHeader);

return divCard;


}