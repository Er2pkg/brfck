const Main = require('./classes/main')
class Brainfuck extends Main {

exec = (code, input = '', lang = 'brf', ...a) => {
if(code.startsWith('CC') && this.getLang(code.slice(-6, -3)))
lang = code.slice(-6, -3)
let llang = this.getLang(lang)
if(!llang) throw new this.Error('Language is not found', new this.Result)
if(code.startsWith('CC'))
code = this.decompile(code)
return super.exec(code, input, lang, ...a)
}
run = this.exec
execute = this.exec
compile = (code, lang = 'brf') => {
if(code.startsWith('CC')) throw new this.Error('I can\'t compile compiled code', new this.Result())
let llang = this.getLang(lang)
if(!llang) throw new this.Error('Language is not found', new this.Result())
super.exec(code, '', lang) //SyntaxCheck
let codde = this.genCC(code)
code = this.RLE.Encode(code)
return 'CC'+code+llang.names[0].toUpperCase()+codde
}
decompile = code => {
if(!code.startsWith('CC')) throw new this.Error('I can\'t decompile decompiled code', new this.Result())
let cc = code.slice(-3)
code = this.RLE.Decode(code.slice(2, -6))
if(this.check(code, cc)!=='ok') throw new this.Error('Signature check error', new this.Result())
return code
}
check = (code, cc) => {let ccode = (cc?cc:code.slice(-3)).toString();if(!ccode.match(/[0-9]{3}/gim)) return 'no check code';if(this.genCC(code) == ccode) return 'ok';else return 'not ok'}
genCC = code => {code = code.length.toString();if(code.length == 1) code+='00';if(code.length == 2) code+='0';if(code.length >= 4) code=code.slice(0, -3);return code}

get clone(){return Object.assign(Object.create(this), this)}
}
module.exports = new Brainfuck