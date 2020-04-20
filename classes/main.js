class Main {
constructor() {
this.bf = {
exec: (code, input = '', lang = 'brainfuck') => {
if(!this.getLang(lang.toLowerCase())) throw new this.Error('Language is not found', {})
else lang = this.getLang(lang)
this.output = ''
this.input = input.split('').map(c => c.charCodeAt(0) % 256)
this.code = code.replace(new RegExp(lang.regex, 'gim'), '')
if(this.code.length == 0) throw new this.Error('Provide a normal code', {})
let memory = new this.memory(),
position = new this.memory(65536),
steps = 0
for(; position.current<this.code.length; position.increment()) {
let char = this.code.charAt(position.current), cmds = lang.cmds
if(!cmds || (cmds && !cmds[char])) throw new this.Error(`Invalid operator '${char}'`, {output: this.output, memory: memory, steps: steps})
else {
if(++steps == this.max_steps) throw new this.Error(`Too many steps (${steps} reached)`, {output: this.output, memory: memory, steps: steps})
cmds[char](memory, this, position, lang.chVals || {})
}
} return {output: this.output, memory: memory, steps: steps}}
}
this.version = require('../package.json').version
this.memory = require('./memory')
this.RLE = require('./RLE')
this.Error = require('./BFerror')
this.langs = require('../langs/langs')
this.output = ''
this.input = []
this.max_steps = 1000000
this.getLang = lang => this.langs.find(i => i.names.find(x => x == lang.toLowerCase()))
}}
module.exports = Main