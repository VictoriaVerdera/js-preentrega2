
let finalizar = false;
let respuesta;
let textoAlimentosRicos = "Alimentos ricos en vitamina ";

/* while (finalizar == false) {*/
function queAlimentosTienenXVitamina(vit) {
    switch (vit) {
        case 'A':
            alert(textoAlimentosRicos + "A: Algunos tipos de pescado, como arenques y salmón.Hígado de vacuno y otras vísceras.Hortalizas de hojas verdes y otras verduras de color verde, anaranjado y amarillo, como espinacas, batatas, zanahorias, brócoli, y calabaza de invierno.Frutas, como melón, mangos y albaricoques.");
            break;
        case 'B':
            break;
        case 'C':
            break;
        case 'D':
            break;
    }

}

let vitamina = prompt("Selecciona una vitamina: A, B, C, D.");
queAlimentosTienenXVitamina(vitamina);

