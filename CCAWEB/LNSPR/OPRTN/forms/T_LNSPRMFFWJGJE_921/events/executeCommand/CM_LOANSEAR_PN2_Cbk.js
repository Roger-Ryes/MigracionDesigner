//Start signature to Callback event to CM_LOANSEAR_PN2
task.executeCommandCallback.CM_LOANSEAR_PN2 = function (entities, executeCommandCallbackEventArgs) {
    if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_TRANSACEC_84918', false, null, timer);
        //executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_LOANSEAR_PN2');
        executeCommandCallbackEventArgs.commons.api.grid.removeAllRows('ReadjustmenMList');
        
        entities.ReadjustmentMEntity.item = null;
        entities.ReadjustmentMEntity.readjustDate = null;
        entities.ReadjustmentMEntity.referencial = null;
        entities.ReadjustmentMEntity.sign = null;
        entities.ReadjustmentMEntity.factor = null;
        entities.ReadjustmentMEntity.percentage = null;
        entities.ReadjustmentMEntity.tasaMin = 'N';
        entities.ReadjustmentMEntity.mantieneCuota = 'N';
        
        //Field: Código cliente
        if (entities.LoanSearchFilter.numIdentification != null) {
            entities.LoanSearchFilter.numIdentification = null;
        }

        //Field: Num. préstamo
        if (entities.LoanSearchFilter.operation != null) {
            entities.LoanSearchFilter.operation = null;
        }

        //Field: Num. trámite
        if (entities.LoanSearchFilter.numProcedures != null) {
            entities.LoanSearchFilter.numProcedures = null;
        }

        //Field: Oficina
        if (entities.LoanSearchFilter.office != null) {
            entities.LoanSearchFilter.office = null;
        }

        //Field: Moneda
        if (entities.LoanSearchFilter.codCurrency != null) {
            entities.LoanSearchFilter.codCurrency = null;
        }

        //Field: Fecha desembolso
        if (entities.LoanSearchFilter.disbursementDate != null) {
            entities.LoanSearchFilter.disbursementDate = null;
        }

        //Field: Próximo reajuste
        if (entities.LoanSearchFilter.nextReadjDate != null) {
            entities.LoanSearchFilter.nextReadjDate = null;
        }

        //Field: Estado préstamo
        if (entities.LoanSearchFilter.state != null) {
            entities.LoanSearchFilter.state = null;
        }

        //Field: Préstamo migrado
        if (entities.LoanSearchFilter.migratedOperation != null) {
            entities.LoanSearchFilter.migratedOperation = null;
        }

        //Field: Tipo operación
        if (entities.LoanSearchFilter.type != null) {
            entities.LoanSearchFilter.type = null;
        }

    }
     else {
        entities.ReadjustmenMList.data().pop();
    }
};
