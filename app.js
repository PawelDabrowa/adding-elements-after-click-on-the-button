
const newElement = document.querySelector('.add-odd-element')

let numberEven = 1;

function addElement() {
    const liElement = document.createElement('li');
    liElement.textContent = numberEven;
    numberEven = numberEven + 2;
    document.querySelector('ul').appendChild(liElement);

    if ((numberEven) % 3 == 0) {
        liElement.classList.add('big');
    }
}

newElement.addEventListener('click', addElement);