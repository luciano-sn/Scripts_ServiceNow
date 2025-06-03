var Verifica_user = Class.create();
Verifica_user.prototype = {
    initialize: function() {

        var vr = new GlideRecord('sys_user');


        vr.addQuery('active', false);
        vr.query();

        while (vr.next()) {

            gs.info('Esse é o Usuário...' + vr.getValue('name'));

            var VI = new GlideRecord('incident');
			
            VI.addEncodedQuery('sys_created_onONThis month@javascript:gs.beginningOfThisMonth()@javascript:gs.endOfThisMonth()');
            VI.query();
            while (VI.next()) {

                gs.info("Numero..." + VI.getValue('number') + "Descrição resumidada" + VI.getValue('short_description') + "Aberto por ...." + VI.getDisplayValue('caller_id') + "Status  " + VI.getDisplayValue('state') + "Prioridade" + VI.getDisplayValue('priority'));
            }



        }




    },





    type: 'Verifica_user'
};