$(document).on('ready', function(){
// Global Variables
  //Cat Picture Storage Ref
let catArea = document.getElementById('cats');
  //Cat Picture Link Storage Ref
let list = document.getElementById('list');
  //Gets the Counter div
let clicks = document.getElementById('counter');

//List of Cats
let cat = [

  {
    name: 'Cat 1',
    image: 'images/kitten.jpg',
    clicks: 0
  },
  {
    name: 'Cat 2',
    image: 'images/kitten2.jpg',
    clicks: 0
  },
  {
    name: 'Cat 3',
    image: 'images/kitten3.jpg',
    clicks: 0
  },
  {
    name: 'Cat 4',
    image: 'images/kitten4.jpg',
    clicks: 0
  },
  {
    name: 'Cat 5',
    image: 'images/kitten5.jpg',
    clicks: 0
  },
  {
    name: 'Cat 6',
    image: 'images/kitten6.jpg',
    clicks: 0
  }

];

//Loop Through Picture List
for (let c = 0; c < cat.length; c++){

  let name;
  let images;
  let click = 0;

  let kittens = cat[c];
  name = kittens.name;
  images = kittens.image;
  console.log(images);

  //Creates the Links to each picture and stores them in the #List container
  let newP = document.createElement('p');
  list.appendChild(newP);
  newP.innerHTML = '<a href="#'+cat[c].name+'">'+cat[c].name+'</a>'

  //Creates the name and picture and stores them in the catArea Container. A link reference is made out of the name
  let newerP = document.createElement('p');
  catArea.appendChild(newerP);
  newerP.innerHTML = '<div id="name">Clicked: </div><div id="counter">'+click+'</div>' + '<a name="'+name+'">'+name+'</a>' + '<img src="'+images+'">';

//Increments the Clicked counter for each Cat Picture
$(newerP).on('click', function(event){
  click = kittens.clicks++;
  console.log(kittens);
  $(event.currentTarget).html('<div id="name">Clicked: </div><div id="counter">'+kittens.clicks+'</div>' + '<a name="'+kittens.name+'">'+name+'</a>' + '<img src="'+kittens.image+'">');
    });
  };
});
