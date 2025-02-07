export function timestampToDate(timestamp: number): string {
  const data = new Date(timestamp * 1000);

  const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const diaDaSemanaAbrev = diasDaSemana[data.getDay()];

  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear();

  return `${diaDaSemanaAbrev}. - ${dia}/${mes}/${ano}`;
}
