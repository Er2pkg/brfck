//Thanks to github's gist
// https://gist.github.com/samuelfvlcastro/965ca9b9e4036eafe56c5b1d1405b754

class RLE {
constructor(){}

Encode = input => {
let segmentLength = input.length, run = 0, current = '', last = '', encoded = ''
current = last = input[0]
for(let i =1;i<=segmentLength;i++){
if(current !== last){
encoded += run + last
run = 0
last = current
}
current = input[i]
run++
}
encoded += run + last
return encoded
}

Decode = input => {
let decoded = [], result =
input.replace(/(\d+\D{1})/g, match => decoded = decoded.concat(Array.apply(null, Array(parseInt(match.slice(0, -1)))).map(String.prototype.valueOf,match.slice(-1))))
return decoded
}

}
module.exports = new RLE()