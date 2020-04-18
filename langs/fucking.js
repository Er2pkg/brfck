const BF = require('./brainfuck')
class FuckingScript extends BF {
// (c) Er2 FuckingScript xD
constructor() {
super()
this.regex = '[^\^\_\{\}\*>\+\-]'
this.chVals = {
'+': '^',
'-': '_',
'>': '+',
'<': '-',
'[': '{',
']': '}',
'.': '*',
',': '>',
}
this.ocmds = this.cmds
this.cmds = {}
Object.keys(this.ocmds).forEach(k => this.cmds[this.chVals[k]] = this.ocmds[k])
delete this.ocmds
}}
module.exports = FuckingScript