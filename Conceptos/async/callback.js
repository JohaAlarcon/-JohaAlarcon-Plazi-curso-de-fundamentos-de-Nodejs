function hola(nombre, miCallback){
    console.log ('Hola,' + nombre  );
    setTimeout(function()  {
        console.log ('Estoy siendo asincrono')
        miCallback();
    }, 1000);

}

function adios(nombre, otroCalback){
    setTimeout(function()  {
        console.log ('Adios '+ nombre);
        otroCalback();
        
    }, 3000);
}

console.log ('Iniciando proceso...');
hola('Johana',function(){
    adios('johana',function(){
    console.log ('Terminado  proceso...');
    });

});