function enviarReserva(){
    const nome =document.getElementById("nome");
    const telefone = document.getElementById("telefone");
    const data = document.getElementById("data");
    const div = document.getElementById("dadosReserva");
    const tel = telefone.value.replace(/\D/g, '');
    const mensagem = "Ops, parece que o número de telefone inserido está incorreto. Certifique-se de digitar um número com 10 ou 11 dígitos e tente novamente.";
    if(tel.length < 10 || tel.length>11){
        alert(mensagem);
    }
    else{
        div.innerHTML = `<b>Dados da Reserva:</b><br><b>Nome:</b> ${nome.value}<br><b>Telefone:</b> ${telefone.value}<br><b>Data desejada:</b> ${data.value}<br>`;
        document.getElementById("reservaForm").reset();
    }
}