var x = new GlideRecord('incident');
x.addQuery('state', '!=', '7'); // Filtra a tabela e seleciona somente incidentes que  não estão fechados.
x.addQuery('description', 'CONTAINS', 'Palavra Chave');// Filtra a tabela e seleciona somente incidentes com palavra chave

x.query();
//Percorre cada registro retornado
while (x.next()){ 
x.state = 6; //Estado 6 é resolvido

//Define o motivo do fechamento.
x.close_code = 'Closed/Resolved por Script';
//Define a descrição do fechamento
x.close_notes = 'Encerrado auomaticamento por conter a "Palavra Chave"';

// Salva registro no BD 
x.update();

}
