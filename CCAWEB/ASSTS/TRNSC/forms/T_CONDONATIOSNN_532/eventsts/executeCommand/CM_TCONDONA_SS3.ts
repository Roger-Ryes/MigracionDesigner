// (Button) 
    task_executeCommand_CM_TCONDONA_SS3 = (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let hasError: any = false;
        let msgResourceID: any = "";
        //valida que no ingrese mas de una vez el mismo rubro
        for (let i: any = 0; i < entities.CondonationDetail.length; i++) {
            let concept: any = entities.CondonationDetail[i].concept;
            for (let j: any = i + 1; j < entities.CondonationDetail.length; j++) {
                if (entities.CondonationDetail[j].concept == concept) {
                    hasError = true;
                    msgResourceID = "ASSTS.MSG_ASSTS_NOPUEDEOR_19224";
                    break;
                }
            }
            if (hasError)
                break;
        }

        if (hasError) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation(msgResourceID,false, null, timer);
        } else {
            let dataGrid: any = {
                data: entities.CondonationDetail
            };

            executeCommandEventArgs.commons.api.navigation.closeModal(dataGrid);
        }
    };