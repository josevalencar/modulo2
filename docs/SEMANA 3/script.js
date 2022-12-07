function calcular1() {
    var vel = parseInt(document.getElementById('velocidade').value);
    var g = 10 //gravidade
    document.getElementById('saida1').innerHTML = "Resultados: Tempo = " +
        vel / g + "; Altura máxima = " + (vel * vel) / 2 * g;

}

function calcular2() {
    var a = parseInt(document.getElementById('a').value);
    var b = parseInt(document.getElementById('b').value);
    var c = parseInt(document.getElementById('c').value);
    var delta = (b * b) - (4 * (a * c));
    if (a > 0) {
        document.getElementById('saida2').innerHTML = "Sua parábola tem um ponto minímo de (" + -((b) / (2 * a)) + ", "
            + -((delta) / (4 * a)) + ")";
    }
    if (a < 0) {
        document.getElementById('saida2').innerHTML = "Sua parábola tem um ponto máximo de (" + -((b) / (2 * a)) + ", "
            + -((delta) / (4 * a)) + ")";
    }


}

function calcular3() {
    var temp = parseInt(document.getElementById("temp").value);
    var resp = document.getElementById("saida3");

    if (document.getElementById("CtoF").checked === true)
        resp.innerHTML = ctof(temp);

    if (document.getElementById("FtoC").checked === true)
        resp.innerHTML = ftoc(temp);
}

// Celsius para Fahrenheit //
function ctof(x) {
    return (1.8 * x + 32) + " Fahrenheit";
}

// Fahrenheit para Celsius //
function ftoc(x) {
    return ((x - 32) * 5 / 9) + " Celsius";
}

function calcular4() {
    let quant = document.getElementById("q").value;
    let unit = document.getElementById("v").value;
    let eletrTotal = quant * unit;

    if (quant > 100) {
        eletrTotal = eletrTotal + (eletrTotal * 0.25)
    }

    else if (quant > 200) {
        eletrTotal = eletrTotal + (eletrTotal * 0.50)
        return eletrTotal
    }
    document.getElementById("saida4").innerHTML = `O preço da sua conta de luz esse mês é de R$${eletrTotal}!`
}