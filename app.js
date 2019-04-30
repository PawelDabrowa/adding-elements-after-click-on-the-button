
const addOdd = document.querySelector('.add-odd-element');
const addEven = document.querySelector('.add-even-element');

//Adding odd element
let numberOdd = 1;

function addOddElement() {
    const liElement = document.createElement('li');
    liElement.textContent = numberOdd;
    numberOdd = numberOdd + 2;
    document.querySelector('ul').appendChild(liElement);

    if ((numberOdd) % 3 == 0) {
        liElement.classList.add('big');
    }
}



addOdd.addEventListener('click', addOddElement);



//Adding even element
let numberEven = 2;

function addEvenElement() {
    const liElement = document.createElement('li');
    liElement.textContent = numberEven;
    numberEven = numberEven + 2;
    if ((numberEven) % 2 == 1) {
        numberEven = numberEven + 1;
    }
    document.querySelector('ul').appendChild(liElement);
    if ((numberEven) % 3 == 1) {
        liElement.classList.add('big');
    }
}

addEven.addEventListener('click', addEvenElement);

//Removing Last element
const removeLast = document.querySelector('.remove-odd-element');

removeLastElement = () => {
    const parentElement = document.querySelector('li');
    const childElement = document.querySelector('li:nth-last-child(1)');
    // removeA.remove() 
    return parentElement.parentNode.removeChild(childElement);

}
removeLast.addEventListener('click', removeLastElement);

//Removing first element
const removeFirst = document.querySelector('.remove-even-element');

removeFirstElement = () => {
    const parentElement = document.querySelector('li');
    const childElement = document.querySelector('li:nth-of-type(1)');
    // removeA.remove() 
    return parentElement.parentNode.removeChild(childElement);

}
removeFirst.addEventListener('click', removeFirstElement);

