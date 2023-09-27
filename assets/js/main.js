'user strict';
let local = document.querySelector('#datos');
setInterval( () => {
//fecha y hora local
const fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth();
let año = fecha.getFullYear();
let hora = fecha.getHours();
let minuto = fecha.getMinutes();
let segundo = fecha.getSeconds();
let fechaLocal ='  '+ dia + '/' + mes + '/' + año+'    ' + hora + ':' + minuto + ':' + segundo;
local.value = fechaLocal;
},
1000);





