const BF = require('./brainfuck')
class EZscript extends BF {
// (c) Er2 EZscript xD
constructor() {
super()
this.regex = '[^NPLMOISE]'
this.chVals = {
'+': 'L',
'-': 'M',
'>': 'N',
'<': 'P',
'[': 'S',
']': 'E',
'.': 'O',
',': 'I',
}
this.ocmds = this.cmds
this.cmds = {}
Object.keys(this.ocmds).forEach(k => this.cmds[this.chVals[k]] = this.ocmds[k])
delete this.ocmds
}}
module.exports = EZscript