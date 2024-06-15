$(function(){
  let baseURL = 'https://deckofcardsapi.com/api/deck'

  //1.
  async function part1(){
    let data = await $.getJSON(`${baseURL}/new/draw/`);
    let {suit, value} = data.card[0]
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
  }


  //2.
  async function part2(){
    let firstCardData = await $.getJSON(`${baseURL}/new/draw/`)
    let deckID = firstCardData.deck_ID;
    let secondCardData = await $.getJSON(`${baseURL}/${deckID}/draw/`) 
    [firstCardData, secondCardData].forEach(card => {
      let {suit, value} = card.card[0]
      console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
    });

  }

  //3. 
  async function part3(){
    let $btn = $('button');
    let $cardArea = $('#card-area');

    let deckdata = await $.getJSON(`${baseURL}/new/shuffle/`)
    $btn.show().on('click', async function(){
      let cardData = await $.getJSON(`${baseURL}/${deckdata.deck_ID}/draw/`)
      let cardSrc = cardData.card[0].image;
      let angle = Math.random()* 90 - 45;
      let randomX= Math.random()* 40-20; 
      let randomY= Math.random()* 40-20; 

      $cardArea.append(
        src:cardSrc,
        css:{
          transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
        }
      )
      if (cardData.remaining === 0) $btn.remove();
    })
  }
  setup();
})