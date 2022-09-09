// (Button) 
    task.executeCommand.CM_TCONDONA_NAN = function(entities, executeCommandEventArgs) {
        executeCommandEventArgs.commons.execServer = false;
        executeCommandEventArgs.commons.api.navigation.closeModal(true);
    };