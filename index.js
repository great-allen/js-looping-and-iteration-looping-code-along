// Code your solutions in this file

function writeCards(names, event) {
    let thankYouMessage = []
    for (let i=0; i <names.length; i++) {
        thankYouMessage.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return thankYouMessage;
}

let countDown = function(num){

    while (num > 0) {
        console.log (num);
        num --;
    }
    console.log(num);
}