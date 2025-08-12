(function executeRule(current, previous /*null quando 'before'*/) {

    // Acessa os valores dos campos de orçamento.
    // Usamos parseFloat() para garantir que os valores sejam tratados como números.
    var orcamentoEstimado = parseFloat(current.orcamento_estimado);
    var orcamentoReal = parseFloat(current.orcamento_real);

    // Verifica se os valores são válidos antes de calcular para evitar erros.
    if (isNaN(orcamentoEstimado)) {
        orcamentoEstimado = 0;
    }
    if (isNaN(orcamentoReal)) {
        orcamentoReal = 0;
    }

    // Realiza o cálculo da diferença.
    var diferenca = orcamentoReal - orcamentoEstimado;

    // Atribui o resultado ao campo "diferenca_de_orcamento".
    current.diferenca_de_orcamento = diferenca;

    // Adiciona um log para fins de depuração (opcional, mas recomendado).
    gs.info('Diferença de Orçamento recalculada: ' + diferenca);

})(current, previous);