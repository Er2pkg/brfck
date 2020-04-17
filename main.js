class Brainfuck {
constructor() {
this.memory = require('./memory')
this.langs = require('./langs/langs')
this.output = ''
this.input = []
}
exec = (code, input = '', lang = 'brainfuck') => {
if(!this.langs[lang.toLowerCase()]) throw new Error('Language is not found')
else lang = this.langs[lang.toLowerCase()]
this.output = ''
this.input = input.split('').map(c => c.charCodeAt(0) % 256)
this.code = code.replace(new RegExp(lang.regex, 'gim'), '')
if(this.code.length == 0) throw new Error('Provide a normal code')
let memory = new this.memory(),
position = new this.memory(65536)
for(; position.current<this.code.length; position.increment()) {
let char = this.code.charAt(position.current), act = lang.cmds[char]
if(!act) throw new Error(`Invalid operator '${char}'`)
else act(memory, this, position)
}
return this.output
}
execute = this.exec
}
module.exports = new Brainfuck()