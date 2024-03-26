// write a function that writes and reads a file simultaneously.
const fs = require('fs');
const hhttp = require('http');

function file(){
    fs.writeFile("Ijeoma.html", "Hey, my in-law. How are you doing?", (error) =>{
    if(error){
        throw error;
    }
    console.log("This file has been created");
})

fs.readFile("Ijeoma.html", 'utf-8', (error, data) => {
    if(error){
        throw error;
    }

    console.log(data);
})
}

file();