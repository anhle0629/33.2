//Part 1A

$.get("http://numbersapi.com/3/trivia", function Integer(data){
    $('#number').text(data);
})

//Part 1B

let fourfavroitenumber = []

for (let i = 5; i<10 ; i++){
    $.get(`http://numbersapi.com/${i}/trivia`, favorite => {
        $('#numbers').text(favorite);
    })
}

//Part 1C

let baseURL = ('http://numbersapi.com')

$.get(`${baseURL}/3/trivia`, trivia1 =>{
    $('#trivia1').text(trivia1)
})
$.get(`${baseURL}/3/trivia`, trivia2 =>{
    $('#trivia2').text(trivia2)
})
$.get(`${baseURL}/3/trivia`, trivia3 =>{
    $('#trivia3').text(trivia3)
})
$.get(`${baseURL}/3/trivia`, trivia4 =>{
    $('#trivia4').text(trivia4)
})


$(function (){

    //2A
    let deckURL = "https://deckofcardsapi.com/api/deck"

    $.getJSON(`${deckURL}/new/draw/`, function(data){
        let {value, suit} = data.card
        console.log(`{${value.toLowerCase()} of ${suit.toLowerCase()}}`)
    })

    //2B
        $.getJSON(`${deckURL}/new/draw/`, function(data){
            let firstcard = data.card[0]
            let deckID = data.deck_id; 
            $.getJSON(`${deckURL}/${deckID}/draw/`, function(data){
                let secondcard = data.card[0]
                [firstcard, secondcard].foreach(function(card){
            console.log(`${card.value.toLowerCase} of ${suit.value.toLowerCase()}}`)
                })
            })
        })

 // 3.
  let deckId = null;
  let $btn = $('button');
  let $cardArea = $('#card-area');

  $.getJSON(`${baseURL}/new/shuffle/`, function(data) {
    deckId = data.deck_id;
    $btn.show();
  });

  $btn.on('click', function() {
    $.getJSON(`${baseURL}/${deckId}/draw/`, function(data) {
      let cardSrc = data.cards[0].image;
      let angle = Math.random() * 90 - 45;
      let randomX = Math.random() * 40 - 20;
      let randomY = Math.random() * 40 - 20;
      $cardArea.append(
        $('<img>', {
          src: cardSrc,
          css: {
            transform: `translate(${randomX}px, ${randomY}px) rotate(${angle}deg)`
          }
        })
      );
      if (data.remaining === 0) $btn.remove();
    });
  });

})




