


const pizzas = [
    {id: 1, nombre: `muzza`, ingredientes: [`muzzarella`], precio: 500, },
    {id: 2, nombre: `jamon`, ingredientes: [`muzzarella`, `jamon`], precio: 530,},
    {id: 3, nombre: `tomate`, ingredientes: [`muzzarella`, `tomate`], precio: 550,},
    {id: 4, nombre: `salame`, ingredientes: [`muzzarella`, `salame`], precio: 580,},
    {id: 5, nombre: `roquefort`, ingredientes: [`muzzarella`, `roquefort`], precio: 610,},
    {id: 6, nombre: `palmitos`, ingredientes: [`muzzarella`, `palmitos`], precio: 650,}];


  

// a) Las pizzas que tengan un id impar.

    // const impares = [];
    // pizzas.filter( pizza => {
    //     if(pizza.id % 2 != 0){
    //         impares.push(pizza.nombre)
        
    //     }
    // });
    // console.log(`Las pizzas con Id´s impares son: ${impares}`);

    //-------------------------------------


//   // b) ¿Hay alguna pizza que valga menos de $600?
//     const preciomenor = [];
//     pizzas.forEach( pizza => {
//         if( pizza.precio <= 600){
//         preciomenor.push(pizza.nombre);
//         }
//     });
//     console.log(`Las pizzas con precio menor a $600 son: ${preciomenor}`);


    // console.log(pizzas.filter(pizzas => pizzas.precio <= 600)) //otra manera distinta
    
    // --------------------------------

// c)   Los nombres de todos las pizzas
    //sin array

    // pizzas.forEach( pizza => console.log((pizza.nombre)
    // )
    // )

// c) con array


    // const nombrar = [];
    // pizzas.filter( pizza => {
    //     if(pizza.nombre != 0){
    //     nombrar.push(pizza.nombre)
    //     }
    // });

    // console.log(nombrar);
    

//-------------------------------------------------------

// d)  Los precios de las pizzas.


// const preciosTodo = [];
// pizzas.forEach( pizza => {
//     if( pizza.precio >= 0){
//        preciosTodo.push(pizza.precio);
//        preciosTodo.toString()
//     }
// });
// console.log(`Los precios son: ${preciosTodo}`);


   

// //------------------------------------------




 // e) El nombre de cada pizza con su respectivo precio.


// pizzas.forEach( pizza => console.log(`La pizza de ${pizza.nombre}, tiene un precio de $${pizza.precio}`));







