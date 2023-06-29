
let salir = true;
let respuesta;
let textoAlimentosRicos = "Alimentos ricos en vitamina ";
let listaAlimentos = inicializoArrayAlimentos();


while (salir === true) {
    respuesta = prompt("Seleccione la opción deseada: [A] Buscar el índice calórico de un alimento; [B] Buscar alimentos por vitamina; [C] Calular las calorías de una receta. [X] Salir")
    if (respuesta == "A") {
        let alimentoCaloria = prompt("Selecciona un alimento de la lista: [1] salmón, [2] hígado, [3] huevo, [4]papa, [5] brócoli, [6] tomate, [7] queso, [8] manzana o [9] frutilla");
        caloriasDeXAlimento(alimentoCaloria);
        // Buscar el índice calórico de un alimento
    } else if (respuesta == "B") {
        // Buscar alimentos por vitamina
        let vitamina = prompt("Selecciona una vitamina: A, B, C, D.").toUpperCase();
        queAlimentosTienenXVitamina(vitamina);
    } else if (respuesta == "C") {
        caloriasPorReceta();
        // Calular las calorías de una receta
    } else if (respuesta == "X") {
        salir = false;
    } else {
        alert("Respuesta incorrecta, seleccione una opción.");
    }
}

function queAlimentosTienenXVitamina(vit) {
    switch (vit) {
        case 'A':
            alert(textoAlimentosRicos + "A: Salmón, hígado vacuno, espinacas, batatas, zanahorias, brócoli, calabaza, melón, mango, manzana.");
            break;
        case 'B':
            alert(textoAlimentosRicos + "B: Cereales integrales, productos cárnicos, pescados, huevos, legumbres.");
            break;
        case 'C':
            alert(textoAlimentosRicos + "C: brócoli, frutilla, melón, papas, tomates.");
            break;
        case 'D':
            alert(textoAlimentosRicos + "D: Los pescados grasos, hígado de ganado vacuno, yema de huevo, queso, hongos.");
            break;
    }
}

function inicializoArrayAlimentos() {
    let caloriasPorCienGramos = new Array(2);
    caloriasPorCienGramos[0] = new Array(2);
    caloriasPorCienGramos[1] = new Array(2);
    caloriasPorCienGramos[2] = new Array(2);
    caloriasPorCienGramos[3] = new Array(2);
    caloriasPorCienGramos[4] = new Array(2);
    caloriasPorCienGramos[5] = new Array(2);
    caloriasPorCienGramos[6] = new Array(2);
    caloriasPorCienGramos[7] = new Array(2);
    caloriasPorCienGramos[8] = new Array(2);


    caloriasPorCienGramos[0][0] = ("salmon");
    caloriasPorCienGramos[0][1] = (208);

    caloriasPorCienGramos[1][0] = ("hígado");
    caloriasPorCienGramos[1][1] = (165);

    caloriasPorCienGramos[2][0] = ("huevo");
    caloriasPorCienGramos[2][1] = (155);

    caloriasPorCienGramos[3][0] = ("papa");
    caloriasPorCienGramos[3][1] = (86);

    caloriasPorCienGramos[4][0] = ("brócoli");
    caloriasPorCienGramos[4][1] = (34);

    caloriasPorCienGramos[5][0] = ("tomate");
    caloriasPorCienGramos[5][1] = (20);

    caloriasPorCienGramos[6][0] = ("queso");
    caloriasPorCienGramos[6][1] = (402);

    caloriasPorCienGramos[7][0] = ("manzana");
    caloriasPorCienGramos[7][1] = (52);

    caloriasPorCienGramos[8][0] = ("frutilla");
    caloriasPorCienGramos[8][1] = (25);

    return caloriasPorCienGramos;
}

function caloriasDeXAlimento(alimento) {
    alert("100gr de " + listaAlimentos[alimento - 1][0] + " tienen " + listaAlimentos[alimento - 1][1] + "calorías.");
}

function caloriasPorReceta() {
    let seguir = true;
    let sumaCalorias = 0;
    while (seguir) {
        let respuesta = prompt("Selecciona un alimento de la lista: [1] salmón, [2] hígado, [3] huevo, [4]papa, [5] brócoli, [6] tomate, [7] queso, [8] manzana o [9] frutilla");
        let cantidad = prompt("Ingrese el número de gramos (minimo 100gr).") / 100;
        sumaCalorias += (listaAlimentos[respuesta - 1][1] * cantidad);
        if ("N" == prompt("Desea sumar otro alimento? [S] Si, [N] No").toUpperCase()) {
            alert("La suma de calorías para esa receta es: " + sumaCalorias);
            seguir = false;
        }
    }
}


