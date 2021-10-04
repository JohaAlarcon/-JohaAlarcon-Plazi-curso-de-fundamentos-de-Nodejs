let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || 'No tienes web ';

console.log ('Hola '+ nombre);
console.log ('Tu web es '+ web);