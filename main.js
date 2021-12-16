let tabela = document.querySelector('#tabela');

let dados = [
    {id: 1, nome: "José Almir", nasc: "26-08-1995", tel: 88988164029},
    {id: 2, nome: "Victor Ikoma", nasc: "26-08-1995", tel: 88988164029},
    {id: 3, nome: "Felipe Marques", nasc: "26-08-1995", tel: 88988164029},
    {id: 4, nome: "Joaozinho", nasc: "26-08-1995", tel: 88988164029},
    {id: 5, nome: "Mariazinha", nasc: "26-08-1995", tel: 88988164029},
]

let th = ["#", "Nome", "Nascimento", "Telefone"];

function criarTabela(){
    //Criando tabela
    let tbl = document.createElement('table');

    //Criando TH
    let thlinha = document.createElement('tr');
    th.forEach(titulo => {
        let header = document.createElement('th');
        let texto = document.createTextNode(titulo);
        header.appendChild(texto);
        thlinha.appendChild(header);
    });
    tbl.appendChild(thlinha);

    //Criando elementos da Tabela (TD)
    dados.forEach(dado => {
        let linha = document.createElement('tr');
        Object.values(dado).forEach(item => {
            let td = document.createElement('td');
            let conteudo = document.createTextNode(item);
            td.appendChild(conteudo);
            linha.appendChild(td);
        })
        tbl.appendChild(linha);
    });
    tabela.appendChild(tbl);
}

criarTabela();

    