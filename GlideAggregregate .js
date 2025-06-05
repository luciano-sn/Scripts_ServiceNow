

var incidentPorGrupo = new GlideAggregate('incident'); // Cria um objeto GlideAggregate para trabalhar com a tabela 'incident'
incidentPorGrupo.addQuery('state','7'); // Valor 7 representa os chamados o estado fechado
incidentPorGrupo.addAggregate('COUNT');// Adiciona uma agregação para contar os registros resultantes da query

incidentPorGrupo.groupBy('assignment_group');

incidentPorGrupo.query();

while(incidentPorGrupo.next()){
        // Exibe no log o nome do grupo de atribuição e a quantidade de incidentes fechados por esse grupo

gs.info('Grupo  ' + incidentPorGrupo.getDisplayValue('assignment_group') + "-" + "incidentes fechados  " + incidentPorGrupo.getAggregate('COUNT'));// Exibe no log o nome do grupo de atribuição e a quantidade de incidentes fechados por esse grupo


}
