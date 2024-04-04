let vetor = []
for(let posicao = 0; posicao < vetor.length; posicao++) {
    console.log(vetor[posicao])
}

let formContato = document.getElementById("form-contato")
let divLista = document.getElementById("lista")
let nome = []
let email = []
let telefone = []
let assunto = []
let msg = []

formContato.addEventListener('submit', (event) => {
    event.preventDefault();

    if(nome.includes(formContato.nome.value)) { // Verifica se já existe esse NOME na lista
       alert('Nome já incluso em nosso banco de dados (Para resolver tente adicionar um sobrenome)')
    } else if (email.includes(formContato.email.value)) { // Verifica se já existe esse EMAIL na lista
        alert('Esse e-mail já esta em nosso banco de dados, insira outro e-mail válido.')
    } else if(telefone.includes(formContato.telefone.value)) { // Verifica já existe esse TELEFONE na lista
        alert('Esse telefone já esta incluso em nosso banco de dados. Insira outro número válido')

        /* 
        OBS* Não há nessecidade de verificação de duplicidade em ASSUNTO e MENSAGEM, por conta que podem ter, assuntos e mensagens iguais.
        */
    } else { // Caso essas condições a cima passe, irá printar uma tabela com os dados inceridos
        nome.push(formContato.nome.value);
        email.push(formContato.email.value);
        telefone.push(formContato.telefone.value);
        assunto.push(formContato.assunto.value);
        msg.push(formContato.mensagem.value);

        gerarLista()
        formContato.reset()
    }
})

function gerarLista() {
    let auxLista = ""

        for(let posicao = 0; posicao < nome.length; posicao++) {
                auxLista += `<div class="card">
                                <div class="dados-label">
                                    <div>Nome completo:</div>
                                    <div>${nome[posicao]}</div>
                                </div>
                                <div class="dados-label">
                                    <div>E-mail:</div>
                                    <div>${email[posicao]}</div>
                                </div>
                                <div class="dados-label">
                                    <div>Telefone:</div>
                                    <div>${telefone[posicao]}</div>
                                </div>
                                <div class="dados-label">
                                    <div>Assunto:</div>
                                    <div>${assunto[posicao]}</div>
                                </div>
                                <div class="dados-label">
                                    <div>Mensagem:</div>
                                    <div>${msg[posicao]}</div>
                                </div>
                            </div>`
        }

        divLista.innerHTML = auxLista
}
