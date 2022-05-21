var segunda_horário
var segunda_descrição

var terça_horário
var terça_descrição

var quarta_horário
var quarta_descrição

var quinta_horário
var quinta_descrição

var sexta_horário
var sexta_descrição

var sabado_horário
var sabado_descrição

var domingo_horário
var domingo_descrição

var segunda = []
var terça = []
var quarta = []
var quinta = []
var sexta = []
var sábado = []
var domingo = []

function preencher_frequencia(){
segunda_horário = document.querySelector('input#segh').value
segunda_descrição = document.querySelector('input#segd').value

terça_horário = document.querySelector('input#terh').value
terça_descrição = document.querySelector('input#terd').value

quarta_horário = document.querySelector('input#quah').value
quarta_descrição = document.querySelector('input#quad').value

quinta_horário = document.querySelector('input#quih').value
quinta_descrição = document.querySelector('input#quid').value

sexta_horário = document.querySelector('input#sexh').value
sexta_descrição = document.querySelector('input#sexd').value

sabado_horário = document.querySelector('input#sabh').value
sabado_descrição = document.querySelector('input#sabd').value

domingo_horário = document.querySelector('input#domh').value
domingo_descrição = document.querySelector('input#domd').value

alert('Frequência preenchida!')

}

function buscar_dias() {
    let month = Number(document.querySelector('input#month').value)

    for(let now_day = 1, _last_day = 31; now_day <= _last_day; now_day+=1){
        let date = new Date(2022,month,now_day)
        switch (date.getDay()) {
            case 0:
                domingo.push(date.getDate())
                break
            case 1:
                segunda.push(date.getDate())
                break
            case 2:
                terça.push(date.getDate())
                break
            case 3:
                quarta.push(date.getDate())
                break
            case 4:
                quinta.push(date.getDate())
                break
            case 5:
                sexta.push(date.getDate())
                break
            case 6:
                sábado.push(date.getDate())
                break
        }
    }
    alert(month)
    alert(domingo)
    alert('ok')
}

function gerar_tabela() {
//apenas um código de exemplo para criar minha tabela depois
let table = document.createElement('table')
let thead = document.createElement('thead')
let tbody = document.createElement('tbody')

table.appendChild(thead)
table.appendChild(tbody)

document.querySelector('body').appendChild(table)

let row_1 = document.createElement('tr');
let heading_1 = document.createElement('th');
heading_1.innerHTML = "Sr. No.";
let heading_2 = document.createElement('th');
heading_2.innerHTML = "Name";
let heading_3 = document.createElement('th');
heading_3.innerHTML = "Company";

row_1.appendChild(heading_1);
row_1.appendChild(heading_2);
row_1.appendChild(heading_3);
thead.appendChild(row_1);

let row_2 = document.createElement('tr');
let row_2_data_1 = document.createElement('td');
row_2_data_1.innerHTML = segunda_horário
let row_2_data_2 = document.createElement('td');
row_2_data_2.innerHTML = segunda_descrição
let row_2_data_3 = document.createElement('td');
row_2_data_3.innerHTML = "Netflix";

row_2.appendChild(row_2_data_1);
row_2.appendChild(row_2_data_2);
row_2.appendChild(row_2_data_3);
tbody.appendChild(row_2);
}