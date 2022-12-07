function calcular1() {
    let valor = Number(document.getElementById("valor").value);
    let comeco = Number(document.getElementById("comeco").value);
    let fim = Number(document.getElementById("fim").value);
    let resultado;

   
    for (var i = comeco; i <= fim; i++) {
        resultado = (valor * comeco);
        document.getElementById("resultado").innerHTML += `${resultado}` + "<br>";
        comeco += 1;
    }
    
};

function calcular2() {
    const numero = String(document.getElementById('numero').value);
    const resultado = document.getElementById('resultado');


    if(!numero || numero.length == 1){
        resultado.innerHTML = 'Não é possível obter palíndromo com um ou nenhum dígito'
    }
    else{
        const normal = Number(numero);

        //métodos split, reverse e join para separar, reverter e juntar os números
        const palindromo = Number(numero.split('').reverse().join("")); 

        if(normal == palindromo){
            resultado.innerHTML= "Ser: seu número é palíndromo!";
        }
        else{
            resultado.innerHTML = "Não ser: seu número não é palíndromo!";
        }
    }
}

function calcular3(){
    const limite = Number(document.getElementById('limite').value);

    let numeros = [];

    for(let i = 1; i < limite; i++){
        numeros.push(i);

        if(i % 3 == 0){
            numeros.push('PI');
        }
    }

    document.getElementById('resultado').innerHTML = numeros.join(" - ");
}

function calcular4(){
    const alturaAzulejo = Number(document.getElementById('alturaAzulejo').value);
    const comprimentoAzulejo = Number(document.getElementById('comprimentoAzulejo').value);
    const alturaParede = Number(document.getElementById('alturaParede').value);
    const comprimentoParede = Number(document.getElementById('comprimentoParede').value);

    const areaAzulejo = alturaAzulejo * comprimentoAzulejo;
    const areaParede = alturaParede * comprimentoParede;
    
    let quantidadeAzulejo = areaParede / areaAzulejo;

    quantidadeAzulejo = quantidadeAzulejo * 1.05;
    quantidadeAzulejo = Math.ceil(quantidadeAzulejo);

    document.getElementById('resultado').innerHTML = "Seu resultado é: " + quantidadeAzulejo + " unidades!";

}
