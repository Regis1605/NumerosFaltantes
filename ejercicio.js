



function Numeros() {
    const Nfaltante = [0,1,2,4,5];

    for(let i = 0; i < Nfaltante.length; i++){
        if(Nfaltante[i] !== i ){
            console.log(`El numero que falta es el: ${i}`);
            break;
        }
    }
}
Numeros();

