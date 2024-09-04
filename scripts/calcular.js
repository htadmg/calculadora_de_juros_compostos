document.querySelector("form").addEventListener("submit", (event) =>{
    event.preventDefault();
    calcular();
})
document.querySelector("form").addEventListener("reset", (event) =>{
    document.getElementById('montante').innerHTML = "";
})
const calcular = () => {
    const capital = parseFloat(calculadora.capital.value);
    const taxa = parseFloat(calculadora.taxa.value) / 100;
    const meses = parseFloat(calculadora.meses.value);
    console.log(capital)
    console.log(taxa)
    console.log(meses)
    if (isNaN(capital) || isNaN(taxa) || isNaN(meses)) {
        return
    }
    else{
        var montante = capital * Math.pow(1 + taxa, meses)
        montante = montante.toLocaleString('pt-Br',{style: 'currency', currency: 'BRL'} )
        document.getElementById('montante').innerHTML = montante;
    }
    
}