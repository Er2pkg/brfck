const BF = require('./brainfuck')
class COW extends BF {
constructor() {
super()
this.regex = '[^mo]'
this.split = 3
chVals = {
'+': 'MoO',
'-': 'MOo',
'>': 'moO',
'<': 'mOo',
'[': 'moo',
']': 'MOO',
'.': 'OOM',
',': 'oom',
}
this.ocmds = this.cmds
this.cmds = {}
Object.keys(this.ocmds).forEach(k => this.cmds[chVals[k]] = this.ocmds[k])
delete this.ocmds
}}
module.exports = COW