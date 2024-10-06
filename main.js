const form = document.getElementById('formulario');
const contato = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

adicionaLinha();
atualizaTabela();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('nome-form');
    const inputTelefoneContato = document.getElementById('numero-form');

    if (contato.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já foi adicionado`);
    } else {
        contato.push(inputNomeContato.value);
        telefone.push(inputTelefoneContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputTelefoneContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputTelefoneContato.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}