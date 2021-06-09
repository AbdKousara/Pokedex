let data = [  
  {
    thumbnail: 'media/001.png',
    id: 1,
    name: 'Bulbasaur',
    type: ['Grass','Poison']
  },
  
  {
    thumbnail: 'media/002.png',
    id: 2,
    name: 'Ivysaur',
    type: ['Grass','Poison']
  },
  {
    thumbnail: 'media/003.png',
    id: 3,
    name: 'Venusaur',
    type: ['Grass','Poison'],
    btnColor: 'background-color-fire'
  },
  {
    thumbnail: 'media/004.png',
    id: 4,
    name: 'Charmander	',
    type: ['Fire']
  },
  {
    thumbnail: 'media/005.png',
    id: 5,
    name: 'Charmeleon',
    type: ['Fire']
  },
  {
    thumbnail: 'media/006.png',
    id: 6,
    name: 'Charizard',
    type: ['Fire','Flying']
  },
  {
    thumbnail: 'media/007.png',
    id: 7,
    name: 'Squirtle',
    type: ['water']
  },
  {
    thumbnail: 'media/008.png',
    id: 8,
    name: 'Wartortle',
    type: ['water']
  },
  {
    thumbnail: 'media/009.png',
    id: 9,
    name: 'Blastoise',
    type: ['water']
  },
]	


for(i = 0; i < data.length ; i++){
  let cardElement = document.createElement('div');
  cardElement.classList.add('card');
  cardElement.innerHTML=`<div class="card_head"><img id="poke_img" src="${data[i].thumbnail}"
       alt="pokemon img"></div>
       <div class="card_body">
          <span>${data[i].id}</span>
          <h4>${data[i].name}</h4>
          ${data[i].type.length == 2 ? `<p class="pill">${data[i].type[0]}</p> <p class="pill">${data[i].type[1]}</p>` 
          : `<p class="pill">${data[i].type[0]}</p>`}
       </div>`;
  document.querySelector('.poke_cards').appendChild(cardElement);
}
