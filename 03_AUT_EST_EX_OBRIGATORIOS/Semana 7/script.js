function calcular1() {
    let valor = parseInt(document.getElementById("valor").value);
    let comeco = parseInt(document.getElementById("comeco").value);
    let fim = document.getElementById("fim").value;
    let resultado;

    for (var i = comeco; i <= fim; i++) {
        comeco += 1;
        resultado = valor * comeco;
        document.getElementById("resultado").innerHTML += resultado;
        console.log(resultado);
    }

};