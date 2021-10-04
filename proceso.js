const { fork } = require('child_process');

const sp1 = fork('subproceso.js');
const sp2 = fork('subproceso.js');
const sp3 = fork('subproceso.js');

console.log("Rodríguez Domínuez Luis Fernando");

sp1.send({msg: "2020090287"});
sp2.send({msg: "5IV7"});
sp3.send({msg: "carita fachera 😎"});
