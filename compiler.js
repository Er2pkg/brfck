const Main = require('./classes/main')
class Brainfuck extends Main {
constructor() {super();this.exec=this.run;this.execute=this.exec}
run = (code, input = '', lang = 'brainfuck', legacy = false) => {
if(code.startsWith('CC') && this.getLang(code.slice(-6, -3)))
lang = code.slice(-6, -3)
let llang = this.getLang(lang);if(!llang) throw new this.Error('Language is not found', {})
if(code.startsWith('CC')) code = this.decompile(code, legacy)
code = code.replace(new RegExp(llang.regex, 'gim'), '')
if(code.length<1) throw new this.Error('Enter correct code', {})
if(!legacy) return this.bf.exec(code, input, lang)
else return this.legacy.bf.exec(code, input, lang)
}
compile = (code, lang = 'brainfuck', legacy = false) => {
if(code.startsWith('CC')) throw new this.Error('I can\'t compile compiled code', {})
let llang = this.getLang(lang)
if(!llang) throw new this.Error('Language is not found', {})
code = code.replace(new RegExp(llang.regex, 'gim'), '')
if(code.length<1) throw new this.Error('Enter correct code', {})
if(!legacy) this.bf.exec(code, '', lang) //SyntaxCheck
else this.legacy.bf.exec(code, '', lang)
let codde = this.genCC(code)
code = legacy?this.legacy.RLE.Encode(code.split('')):this.RLE.Encode(code.split(''))
return 'CC'+code+llang.names[0].toUpperCase()+codde
}
decompile = (code, legacy = false) => {
if(!code.startsWith('CC')) throw new this.Error('I can\'t decompile decompiled code', {})
let cc = code.slice(-3)
code = (legacy?this.legacy.RLE.Decode(code.slice(0, -6)):this.RLE.Decode(code.slice(0, -6))).join('')
if(this.check(code, cc)!=='ok') throw new this.Error('Signature check error', {})
return code
}
check = (code, cc) => {let ccode = cc?cc:code.slice(-3);if(!ccode.match(/[0-9]{3}/gim)) return 'no check code';if(this.genCC(code) == ccode) return 'ok';else return 'not ok'}
genCC = code => {code = code.length.toString();if(code.length == 1) code+='00';if(code.length == 2) code+='0';if(code.length >= 4) code=code.slice(0, -3);return code}
}
module.exports = new Brainfuck()