let counter = 0;
let stopCounter = 3;

setTimeout(() => {
for (let i =0; i < stopCounter; i++) {
    counter++

    console.log(counter);
   }
   console.log(`the timer stoped at exactly ${stopCounter} seconds`);
  }, 1000)

let clear = setInterval(() => {
  counter++
  console.log(counter);
  if(counter === stopCounter){
    clearInterval(clear);
     console.log(`the timer cleared succesfully`);
  }
}, 2000);