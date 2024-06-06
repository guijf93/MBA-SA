function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura)) {
        alert('Por favor, insira valores válidos para peso e altura.');
        return;
    }

    const imc = peso / (altura * altura);
    let classificacao = '';

    if (imc < 18.5) {
        classificacao = 'Magreza';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Normal';
    } else if (imc >= 24.9 && imc < 30) {
        classificacao = 'Sobrepeso';
    } else {
        classificacao = 'Obesidade';
    }

    document.getElementById('resultado').innerText = `Seu IMC é ${imc.toFixed(2)} (${classificacao})`;
}
