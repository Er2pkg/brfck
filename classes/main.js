class Main {
constructor() {
this.bf = {
exec: (code, input = '', lang = 'brainfuck') => {
if(!this.getLang(lang.toLowerCase())) throw new Error('Language is not found')
else lang = this.getLang(lang)
this.output = ''
this.input = input.split('').map(c => c.charCodeAt(0) % 256)
this.code = code.replace(new RegExp(lang.regex, 'gim'), '')
if(this.code.length == 0) throw new Error('Provide a normal code')
let memory = new this.memory(),
position = new this.memory(65536)
for(; position.current<this.code.length; position.increment()) {
let char = this.code.charAt(position.current), cmds = lang.cmds
if(!cmds || (cmds && !cmds[char])) throw new Error(`Invalid operator '${char}'`)
else cmds[char](memory, this, position, lang.chVals || {})
} return this.output}
}
this.version = require('../package.json').version
this.memory = require('./memory')
this.RLE = require('./RLE')
this.langs = require('../langs/langs')
this.output = ''
this.input = []
this.getLang = lang => this.langs.find(i => i.names.find(x => x == lang.toLowerCase()))
}}
module.exports = Main