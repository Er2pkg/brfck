class Main {
constructor() {
this.bf = {
exec: (code, input = '', lang = 'brf') => {
if(!this.getLang(lang.toLowerCase())) throw new this.Error('Language is not found', new this.Result())
else lang = this.getLang(lang)
this.output = ''
this.input = input.split('').map(c => c.charCodeAt(0) % 256)
this.code = code.replace(/\n/gim, '').replace(new RegExp(lang.regex, 'gim'), '')
if(this.code.length<1) throw new this.Error('Provide a normal code', new this.Result())
let memory = new this.memory(),
position = new this.memory(65536),
steps = 0,
time = Date.now()
for(; position.current<this.code.length; position.increment()) {
let char = this.code.charAt(position.current), cmds = lang.cmds
if(!cmds || (cmds && !cmds[char])) throw new this.Error(`Invalid operator '${char}'`, new this.Result(this.output, memory, steps, time))
else {
if(++steps == this.max_steps) throw new this.Error(`Too many steps (${steps} reached)`, new this.Result(this.output, memory, steps, time))
cmds[char](memory, this, position, lang.chVals || {})
}
} return new this.Result(this.output, memory, steps, time)}
}
this.version = require('../package.json').version
this.memory = require('./memory')
this.RLE = require('./RLE')
this.Error = require('./BFerror')
this.Result = require('./result')
this.langs = require('../langs/langs')
this.output = ''
this.input = []
this.max_steps = 1000000
this.getLang = lang => this.langs.find(i => i.names.find(x => x == lang.toLowerCase()))
}}
module.exports = Main