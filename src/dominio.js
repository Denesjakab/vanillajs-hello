let pronombres= ["El", "La", "Tu", "El", "Los"];
let sustantivos= ["portal", "casa", "rincon", "viajero", "viajes"];
let adjetivos= ["magico", "gamer", "oculto", "explorador", "secretos"]; 

function generarDominio(){
    let dominio= "Lista de Dominios Publicos:";
    console.log(dominio);

    for( let pronombre of pronombres){
        for(let sustantivo of sustantivos){
            for(let adjetivo of adjetivos){
                let dominiopublico = pronombre + sustantivo + adjetivo + ".com";

             console.log(dominiopublico);

                
            }
        }
    }
    
}
generarDominio(); 