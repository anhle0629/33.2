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






