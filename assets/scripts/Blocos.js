import conectaAPI from "./requestApi.js";


var retornoDados = await conectaAPI("blocos")


console.log(retornoDados.length)
for (let i = 0; i < retornoDados.length; i++) {
    document.getElementById("tabela").appendChild(criarTabela([
      [retornoDados[i]["id"],retornoDados[i]["nome"],retornoDados[i]["uri"]],
    ]));
}

function criarTabela(conteudo) {
    var tabela = document.getElementById("table");
    var thead = document.getElementById("thead");
    var tbody=document.getElementById("tbody");
    for (var i=0;i<conteudo.length;i++) {
      var tr = document.createElement("tr");
      for(var o=0;o<conteudo[i].length;o++){
        var t = document.createElement("td");
        console.log(o)
        if (o == 2) {
          var a = document.createElement("a")
  
          a.href = conteudo[i][2]
          a.innerHTML = "Link Api"
          t.appendChild(a);
  
          tr.appendChild(t);
        } else {
          var texto=document.createTextNode(conteudo[i][o]);
          t.appendChild(texto);
        }
        tr.appendChild(t);
  
       
      }
      (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);

    return tabela
}

  