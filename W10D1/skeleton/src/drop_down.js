
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator () {
  const dogLinks = [];
  const names = Object.keys(dogs);
  const links = Object.values(dogs);
  
  for (let index = 0; index < names.length; index++) {
    const newLinkTag = document.createElement('a');
    const newLi = document.createElement('li');
    // debugger;
    newLinkTag.innerHTML = names[index];
    newLinkTag.href = links[index];
    newLi.classList.add('dog-link');
    newLi.append(newLinkTag);
    dogLinks.push(newLi);
  }
  
  return dogLinks;
}

function attachDogLinks () {
  const dogLinks = dogLinkCreator();
  const parentUl = document.querySelector('.drop-down-dog-list');
  dogLinks.forEach(dog => {
    parentUl.appendChild(dog);
  });
}

attachDogLinks();

function handleEnter () {
  const dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(link => link.classList.add('hover'));
}

function handleLeave() {
  const dogLinks = document.querySelectorAll('.dog-link');
  dogLinks.forEach(link => link.classList.remove('hover'));
}

const nav = document.querySelector('.drop-down-dog-nav');
nav.addEventListener('mouseenter', handleEnter);
nav.addEventListener('mouseleave', handleLeave);