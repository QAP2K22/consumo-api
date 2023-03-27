import conectaAPI from "./requestApi.js";

var retornoDados = await conectaAPI("deputados")
for (let i = 0; i < retornoDados.length; i++) {
    document.getElementById("tabela").appendChild(criarTabela([
      [i+1,retornoDados[i]["nome"],retornoDados[i]["siglaPartido"],retornoDados[i]["email"],retornoDados[i]["id"],retornoDados[i]["idLegislatura"],retornoDados[i]["siglaUf"],retornoDados[i]["urlFoto"]],
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
        if (o == 7) {
          var image = document.createElement("img")
  
          image.src = conteudo[i][7]
          image.height = 120
          image.width = 120
          t.appendChild(image);
  
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

  