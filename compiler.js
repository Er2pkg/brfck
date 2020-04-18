const RLE = require('./RLE'),
Main = require('./main')
class Brainfuck extends Main {
constructor() {super();this.bf={exec:this.exec};this.exec=this.run;this.execute=this.exec;this.getLang = lang => this.langs[lang.toLowerCase()]}
run = (code, input = '', lang = 'brainfuck') => {
let llang = this.getLang(lang);if(!llang) throw new Error('Language is not found')
if(code.startsWith('CC')) code = this.decompile(code)
code = code.replace(new RegExp(llang.regex, 'gim'), '')
if(code.length<1) throw new Error('Enter correct code')
return this.bf.exec(code, input, lang)
}
compile = (code, lang = 'brainfuck') => {
if(code.startsWith('CC')) throw new Error('I can\'t compile compiled code')
let llang = this.getLang(lang)
if(!llang) throw new Error('Language is not found')
code = code.replace(new RegExp(llang.regex, 'gim'), '')
if(code.length<1) throw new Error('Enter correct code')
this.bf.exec(code, '', lang) //SyntaxCheck
let codde = this.genCC(code)
code = RLE.Encode(code.split(''))
return 'CC'+code+codde
}
decompile = code => {
if(!code.startsWith('CC')) throw new Error('I can\'t decompile decompiled code')
let cc = code.slice(code.length-3)
code = RLE.Decode(code.slice(0, -3)).join('')
if(this.check(code+cc)!=='ok') throw new Error('Signature check error')
return code
}
check = code => {let ccode = code.slice(code.length-3);if(!ccode.match(/[0-9]{3}/gim)) return 'no check code';code = code.slice(0, -3);if(this.genCC(code) == ccode) return 'ok';else return 'not ok'}
genCC = code => {code = code.length.toString();if(code.length == 1) code+='00';if(code.length == 2) code+='0';if(code.length >= 4) code=code.slice(0, -(code.length-3));return code}
}
module.exports = new Brainfuck()