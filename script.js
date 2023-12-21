document.addEventListener('DOMContentLoaded', function() {
    // Definir as variáveis de nomes com os caminhos das imagens
    const nomes = [
        { imagem: "assets/barcelona.png" },
        { imagem: "assets/arsenal.png" },
        { imagem: "assets/atletico.png" },
        { imagem: "assets/psg.png" },
        { imagem: "assets/bayer.png" },
        { imagem: "assets/inter.png" },
        { imagem: "assets/liverpool.png" },
        { imagem: "assets/mancity.png" },
        { imagem: "assets/realmadrid.png" }
        // Adicione outras variáveis com seus caminhos de imagem correspondentes
    ];

    // Array com os nomes dos jogadores
    var nomesParticipantes = ['Leonardo', 'Gabriel', 'Marlon'];

    // Função para embaralhar o array
    function embaralharArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    }

    // Embaralha os nomes
    var nomesEmbaralhados = embaralharArray(nomesParticipantes);

    // Atribui os nomes aos divs
    document.querySelector('.jogador1').textContent = nomesEmbaralhados[0];
    document.querySelector('.jogador2').textContent = nomesEmbaralhados[1];


    const shuffledNomes = nomes.slice().sort(() => Math.random() - 0.5);
    const confrontos = [];
    while (shuffledNomes.length >= 2) {
        confrontos.push(selecionarConfronto(shuffledNomes));
    }

    function selecionarConfronto(nomes) {
        const time1 = nomes.pop();
        const time2 = nomes.pop();
        return { time1, time2 };
    }

    // Exibir as imagens nas tabelas HTML
    confrontos.forEach((confronto, i) => {
        const partidaId = `qf${i + 1}`;
        document.getElementById(`img-time1-${partidaId}`).src = confronto.time1.imagem;
        document.getElementById(`img-time2-${partidaId}`).src = confronto.time2.imagem;
    });

    // Exibir a imagem do time que fica de fora
    if (shuffledNomes.length === 1) {
        document.getElementById('img-time-fora').src = shuffledNomes[0].imagem;
    }

    // Exibir as imagens dos participantes na tabela "Participantes do Torneio"
    nomesParticipantes.forEach((participante, i) => {
        const colunaId = `coluna${i + 1}`;

        for (let j = 0; j < 3; j++) {
            const timeId = `coluna${i + 1}-time${j + 1}`;
            const time = shuffledNomes.pop();

            // Verificar se o elemento foi encontrado antes de tentar definir a imagem
            const elementoTime = document.getElementById(timeId);
            if (elementoTime) {
                // Adicionar a imagem
                document.getElementById(`img-${timeId}`).src = time.imagem;
            } else {
                console.error(`Elemento ${timeId} não encontrado.`);
            }
        }
    });
});
