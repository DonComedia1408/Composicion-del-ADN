function generarADN(longitud) {
    const bases = ['A', 'C', 'G', 'T'];
    let miADN = [];
    
    for (let i = 0; i < longitud; i++) {
        const baseAleatoria = bases[Math.floor(Math.random() * bases.length)];
        miADN.push(baseAleatoria);
    }
    
    return miADN;
}

const miADN = generarADN(24);
console.log(miADN);