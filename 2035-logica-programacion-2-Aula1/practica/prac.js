function mostrar(){
    console.log('hola mundo');
}

mostrar();

function holaNombre(nombre){
    console.log('hola' + nombre + '');
}

holaNombre('juan');

function dobleNumero(numero){
    console.log(numero*2);
}

dobleNumero(5);

function promedio(num1, num2, num3){
    console.log((num1+num2+num3)/3);
}

promedio(5,10,10);

function mayorMenor(num1, num2){
    console.log("el mayor es: "+ num1 > num2 ? num1 : num2 +"");
}

mayorMenor(20,10);