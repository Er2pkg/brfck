//Thanks to github's gist
// https://gist.github.com/samuelfvlcastro/965ca9b9e4036eafe56c5b1d1405b754

class RLE {
constructor(){}
Encode = input => {
let run=0,current=input[0],last=input[0],encoded=''
for(let i =1;i<=input.length;i++){
if(current !== last){
encoded += last+run
run = 0
last = current
}current = input[i];run++}
encoded += last+run
return encoded}

Decode = input => {
let decoded = [], result =
input.replace(/(\D{1}\d+)/g, match => decoded = decoded.concat(Array.apply(null, Array(parseInt(match.slice(1)))).map(String.prototype.valueOf,match[0])))
return decoded
}}
module.exports = new RLE()