function enviarCadastro(){
    const div = document.createElement("div");
    document.body.appendChild(div);
    const formulario = document.getElementById("cadastroForm");
    let c="<b>Dados do Usuário:</b> <br>";   
    for(let i = 0;i<formulario.length-1;i++){
        c+=`<p><b style="text-transform:capitalize">${formulario[i].name}:</b> ${formulario[i].value}</p>`
    }
    div.innerHTML = c;
    formulario.reset();
}
