export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");

  if (funcionamento) {
    const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
    const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horaAgora = dataAgora.getHours();

    if (
      diasSemana.includes(diaAgora) &&
      horaAgora >= horarioSemana[0] &&
      horaAgora <= horarioSemana[1]
    ) {
      funcionamento.classList.add("aberto");
    }
  }
}
