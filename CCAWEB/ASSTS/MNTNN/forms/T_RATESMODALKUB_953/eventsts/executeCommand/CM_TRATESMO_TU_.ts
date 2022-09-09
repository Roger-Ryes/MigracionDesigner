// (Button) 
    task_executeCommand_CM_TRATESMO_TU_ = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = true;
        
        if (entities.Rates.clase == 'F') {
            if (entities.Rates.referenceValue == '') {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBEIEI_21995", false,null,timer);
                executeCommandEventArgs.commons.execServer = false;
                return;
            }
            if (entities.Rates.typePoints == '') {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_DEBESELNT_56184", false,null,timer);
                executeCommandEventArgs.commons.execServer = false;
                return;
            }

            if (entities.Rates.signDefault == '' || entities.Rates.signMin == '' || entities.Rates.signMax == '') {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_SEDEBENST_55237", false,null,timer);
                executeCommandEventArgs.commons.execServer = false;
                return;
            }
        }

        if (entities.Rates.lockedMin > entities.Rates.lockedMax) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_VALORMNIA_88442", false,null,timer);
            executeCommandEventArgs.commons.execServer = false;
            return;
        }
        if (entities.Rates.lockedDefault < entities.Rates.lockedMin || entities.Rates.lockedDefault > entities.Rates.lockedMax) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("ASSTS.MSG_ASSTS_VALORESDA_30202", false,null,timer);
            executeCommandEventArgs.commons.execServer = false;
            return;
        }
        //executeCommandEventArgs.commons.serverParameters.entityName = true;
    };