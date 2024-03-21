const tokenString = 'abcdefghABCDEFGH0123456789'
const tokenlen = 10
let token = ''

for (let i = 0; i < tokenlen; i++){
    token += tokenString[Math.floor(Math.random() * tokenString.length)]
}
console.log(token);