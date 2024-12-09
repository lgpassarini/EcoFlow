function calcularConsumo() {
    var tempoBanho = document.getElementById('tempo-banho').value;
    var escovacao = document.getElementById('escovacao').value;
    
    if (tempoBanho === "" || escovacao === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    tempoBanho = parseInt(tempoBanho);
    escovacao = parseInt(escovacao);
    
    var consumoBanho = tempoBanho * 12; 
    var consumoEscovacao = escovacao * 2; 

    var consumoTotal = consumoBanho + consumoEscovacao;

    document.getElementById('result').innerHTML = "Consumo diário de água: " + consumoTotal + " litros";
    document.getElementById('result').style.display = "block";
}

document.getElementById('calc-button').addEventListener('click', function(e) {
    e.preventDefault();
    calcularConsumo();
})