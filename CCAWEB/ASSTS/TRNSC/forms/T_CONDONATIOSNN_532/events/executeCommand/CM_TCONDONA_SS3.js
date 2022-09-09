// (Button) 
    task.executeCommand.CM_TCONDONA_SS3 = function(entities, executeCommandEventArgs) {
        executeCommandEventArgs.commons.execServer = false;
        var hasError = false;
        var msgResourceID = "";
        //valida que no ingrese mas de una vez el mismo rubro
        for (var i = 0; i < entities.CondonationDetail._data.length; i++) {
            var concept = entities.CondonationDetail._data[i].concept
            for (var j = i + 1; j < entities.CondonationDetail._data.length; j++) {
                if (entities.CondonationDetail._data[j].concept == concept) {
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
            var dataGrid = {
                data: entities.CondonationDetail
            }
            executeCommandEventArgs.commons.api.navigation.closeModal(dataGrid);
        }
    };