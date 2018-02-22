//10 Lines
for(var i = 0; i < 100; i++){
    isFizzbuzz = i % 15 === 0;
    isFizz = i % 3      === 0;
    isBuzz = i % 5      === 0;
    if(isFizzbuzz)  { console.log('FizzBuzz') }
    else if(isFizz) { console.log('Fizz')     }
    else if(isBuzz) { console.log ('Buzz')    }
    else            { console.log(i)          }
}