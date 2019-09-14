/*jshint esversion: 6 */
// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

document.querySelector(".header-container").appendChild(Header());

function Header() {
    const newHeaderdiv = document.createElement('div');
    const newSpanDate = document.createElement('span');
    const newH1 = document.createElement('h1');
    const newSpanTemp = document.createElement('span');

    newHeaderdiv.classList.add('header');
    newSpanDate.classList.add('date');
    newSpanTemp.classList.add('temp');

    newHeaderdiv.textContent = "SMARCH 28, 2019";
    newH1.textContent = "Lambda Times";
    newSpanTemp.textContent = '98\u2109';

    newHeaderdiv.appendChild(newSpanDate);
    newHeaderdiv.appendChild(newH1);
    newHeaderdiv.appendChild(newSpanTemp);

    return newHeaderdiv;
}
