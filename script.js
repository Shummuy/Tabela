document.addEventListener('DOMContentLoaded', function() {
  const nomes = ["Barcelona", "PSG", "Atletico de Madrid", "Real Madrid", "Arsenal", "Bayer de Munique", "Man. City", "Inter de Milão", "Liverpool"];
  const shuffledNomes = nomes.slice().sort(() => Math.random() - 0.5);

  const nomesParticipantes = ["Gabriel", "Leonardo", "Marlon"];

  function selecionarConfronto(nomes) {
      const time1 = nomes.pop();
      const time2 = nomes.pop();
      return { time1, time2 };
  }

  const confrontos = [];

  while (shuffledNomes.length >= 2) {
      confrontos.push(selecionarConfronto(shuffledNomes));
  }

  // Exibir os nomes nas tabelas HTML
  confrontos.forEach((confronto, i) => {
      const partidaId = `qf${i + 1}`;
      document.getElementById(`time1-${partidaId}`).textContent = confronto.time1;
      document.getElementById(`time2-${partidaId}`).textContent = confronto.time2;
  });

  // Exibir o nome do time que fica de fora
  if (shuffledNomes.length === 1) {
      document.getElementById('time-fora').textContent = shuffledNomes[0];
  }

  // Exibir os nomes dos participantes e seus times na tabela "Participantes do Torneio"
  nomesParticipantes.forEach((participante, i) => {
      const colunaId = `coluna${i + 1}`;
      document.getElementById(colunaId).textContent = participante;

      for (let j = 0; j < 3; j++) {
          const timeId = `coluna${i + 1}-time${j + 1}`;
          const time = shuffledNomes.pop();

          // Verificar se o elemento foi encontrado antes de tentar definir o texto
          const elementoTime = document.getElementById(timeId);
          if (elementoTime) {
              elementoTime.textContent = time;
          } else {
              console.error(`Elemento ${timeId} não encontrado.`);
          }
      }
  });
});
