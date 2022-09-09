//Start signature to Callback event to Q_READJUSM_7240
    task.executeQueryCallback.Q_READJUSM_7240 = function(entities, executeQueryCallbackEventArgs) {
        if (entities.ReadjustmenMList.data().length > 0) {
            if (entities.LoanSearchFilter.archivo != null) {
                entities.LoanSearchFilter.archivo = null;
            }
            
            //Readjust data clean
    
            //Field: Rubro
            if (entities.ReadjustmentMEntity.item != null) {
                entities.ReadjustmentMEntity.item = null;
            }

            //Field: Reajustar el
            if (entities.ReadjustmentMEntity.readjustDate != null) {
                entities.ReadjustmentMEntity.readjustDate = null;
            }    

            //Field: Referencial
            if (entities.ReadjustmentMEntity.referencial != null) {
                entities.ReadjustmentMEntity.referencial = null;
            }

            //Field: Signo
            if (entities.ReadjustmentMEntity.sign != null) {
                entities.ReadjustmentMEntity.sign = null;
            }

            //Field: Factor
            if (entities.ReadjustmentMEntity.factor != null) {
                entities.ReadjustmentMEntity.factor = null;
            }

            //Field: Porcentaje
            if (entities.ReadjustmentMEntity.percentage != null) {
                entities.ReadjustmentMEntity.percentage = null;
            }
            
            executeQueryCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_R04');//Commando Guardar
            //executeQueryCallbackEventArgs.commons.api.viewState.enable('CM_LOANSEAR_PN2');//Commando Aplicar
        } else {
            executeQueryCallbackEventArgs.commons.api.viewState.disable('CM_LOANSEAR_R04');//Commando Guardar
            //executeQueryCallbackEventArgs.commons.api.viewState.disable('CM_LOANSEAR_PN2');//Commando Aplicar
        }
    };