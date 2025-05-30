/*
O método addQuery(campo, valor) serve para aplicar filtros na consulta, similar a um WHERE em SQL.

O método query() executa de fato a busca no banco de dados.

x.next() percorre cada resultado retornado pela consulta.

gs.print() é usado para exibir mensagens no log do ServiceNow (server-side script).

*/


// Cria um novo objeto GlideRecord apontando para a tabela 'incident'
var x = new GlideRecord('incident');

// Adiciona um filtro para buscar apenas os incidentes cuja categoria seja 'software'
x.addQuery('category', 'software');

// Executa a consulta no banco de dados com o filtro aplicado
x.query();

// Enquanto houver resultados (registros) da consulta, faz um loop
while (x.next()) {
    // Imprime o número do incidente atual no log do ServiceNow
    gs.print("O numeros são:" + x.number);


}

