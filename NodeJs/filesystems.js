const fileSystem = require('fs');

// fileSystem.writeFile("Ijeoma.html", "Hey, my in-law. How are you doing?", (error) =>{
//     if(error){
//         throw error;
//     }
//     console.log("This file has been created");
// })

// fileSystem.readFile("Ijeoma.html", 'utf-8', (error, data) => {
//     if(error){
//         throw error;
//     }

//     console.log(data);
// })
fileSystem.unlink ("Ijeoma.html", (error) => {
    if(error){
        throw error;
    }
    console.log("This file has been deleted");
})



let filehandle;
try {
  filehandle = await open('Ijeoma.html', 'r');
} finally {
  await filehandle?.close();
}