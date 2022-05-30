var segunda_horário;
var segunda_descrição;

var terça_horário;
var terça_descrição;

var quarta_horário;
var quarta_descrição;

var quinta_horário;
var quinta_descrição;

var sexta_horário;
var sexta_descrição;

var sabado_horário;
var sabado_descrição;

var domingo_horário;
var domingo_descrição;

var segunda = [];
var terça = [];
var quarta = [];
var quinta = [];
var sexta = [];
var sábado = [];
var domingo = [];

function preencher_frequencia() {
  segunda_horário = document.querySelector("input#segh").value;
  segunda_descrição = document.querySelector("input#segd").value;

  terça_horário = document.querySelector("input#terh").value;
  terça_descrição = document.querySelector("input#terd").value;

  quarta_horário = document.querySelector("input#quah").value;
  quarta_descrição = document.querySelector("input#quad").value;

  quinta_horário = document.querySelector("input#quih").value;
  quinta_descrição = document.querySelector("input#quid").value;

  sexta_horário = document.querySelector("input#sexh").value;
  sexta_descrição = document.querySelector("input#sexd").value;

  sabado_horário = document.querySelector("input#sabh").value;
  sabado_descrição = document.querySelector("input#sabd").value;

  domingo_horário = document.querySelector("input#domh").value;
  domingo_descrição = document.querySelector("input#domd").value;

  alert("Frequência preenchida!");
  gerar_tabela();
}
function preencher_tabela(dia, horario, descriçao) {
  let linha = document.createElement("tr");
  let linha_data_1 = document.createElement("td");
  linha_data_1.innerHTML = dia;
  let linha_data_2 = document.createElement("td");
  linha_data_2.innerHTML = horario;
  let linha_data_3 = document.createElement("td");
  linha_data_3.innerHTML = descriçao;
  linha.appendChild(linha_data_1);
  linha.appendChild(linha_data_2);
  linha.appendChild(linha_data_3);
  return linha;
}

function gerar_tabela() {
  let month = Number(document.querySelector("input#month").value);

  let table = document.createElement("table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");

  table.appendChild(thead);
  table.appendChild(tbody);

  document.querySelector("body").appendChild(table);

  let linha_cabeçalho = document.createElement("tr");
  let cabeçalho1 = document.createElement("th");
  cabeçalho1.innerHTML = "Dia";
  let cabeçalho2 = document.createElement("th");
  cabeçalho2.innerHTML = "Horário";
  let cabeçalho3 = document.createElement("th");
  cabeçalho3.innerHTML = "Descrição";

  linha_cabeçalho.appendChild(cabeçalho1);
  linha_cabeçalho.appendChild(cabeçalho2);
  linha_cabeçalho.appendChild(cabeçalho3);
  thead.appendChild(linha_cabeçalho);

  for (let now_day = 1, _last_day = 31; now_day <= _last_day; now_day += 1) {
    let date = new Date(2022, month, now_day);
    switch (date.getDay()) {
      case 0:
        domingo.push(date.getDate());
        tbody.appendChild(
          preencher_tabela(date.getDate(), domingo_horário, domingo_descrição)
        );
        break;
      case 1:
        segunda.push(date.getDate());
        tbody.appendChild(
          preencher_tabela(date.getDate(), segunda_horário, segunda_descrição)
        );
        break;
      case 2:
        terça.push(date.getDate());
        tbody.appendChild(
          preencher_tabela(date.getDate(), terça_horário, terça_descrição)
        );
        break;
      case 3:
        quarta.push(date.getDate());
        tbody.appendChild(
          preencher_tabela(date.getDate(), quarta_horário, quarta_descrição)
        );
        break;
      case 4:
        quinta.push(date.getDate());
        tbody.appendChild(
          preencher_tabela(date.getDate(), quinta_horário, quinta_descrição)
        );
        break;
      case 5:
        sexta.push(date.getDate());
        tbody.appendChild(
          preencher_tabela(date.getDate(), sexta_horário, sexta_descrição)
        );
        break;
      case 6:
        sábado.push(date.getDate());
        tbody.appendChild(
          preencher_tabela(date.getDate(), sabado_horário, sabado_descrição)
        );
        break;
    }
  }
}
