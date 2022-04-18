function correioElegante() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const msn = [];
    

    function enviarMensagem (evento){
        evento.preventDefault();

        const remetente = form.querySelector('.remetente');
        const paraAlguem= form.querySelector('.paraAlguem');
        const mensagem = form.querySelector('.mensagem');

        msn.push({
            remetente: remetente.value,
            paraAlguem: paraAlguem.value,
            mensagem: mensagem.value
        });
        
        console.log(msn);
        
        resultado.innerHTML += `De: ${remetente.value} Para: ${paraAlguem.value} `+
         `Mensagem : ${mensagem.value}`
    }

    form.addEventListener('submit', enviarMensagem);

}

correioElegante();