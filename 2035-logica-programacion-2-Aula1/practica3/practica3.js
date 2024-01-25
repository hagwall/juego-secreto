let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java');
lenguajesDeProgramacion.push('Ruby');
lenguajesDeProgramacion.push('Golang');

console.log(lenguajesDeProgramacion);

function mostrarLista(){
    let i = 0
    while(i <= lenguajesDeProgramacion.length){
        console.log(lenguajesDeProgramacion[i]);
        i++
    }
}
mostrarLista();

function listarInverso(){
    let i = lenguajesDeProgramacion.length
    while(i >= 0){
        console.log(lenguajesDeProgramacion[i]);
        i--;
    }
}

listarInverso();

