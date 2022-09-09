// (Button) 
task.executeCommand.CM_TLNSPRMF_9NN = function (entities, executeCommandEventArgs) {

    return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_ESTASEGSR_43909").then(
        function (response) {
            
            switch (response.buttonIndex) {
                
                case 0: //cancel
                    
                    executeCommandEventArgs.commons.execServer = false;
                    break;
                case 1: //accept
                    executeCommandEventArgs.commons.api.viewState.show('CM_TLNSPRMF_NMS');
                    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_9NN');
                    executeCommandEventArgs.commons.api.viewState.hide('CM_TLNSPRMF_F7N');

                    executeCommandEventArgs.commons.execServer = true;
                    return true;
                    break;
            }
        }
    );

    

   
    //executeCommandEventArgs.commons.serverParameters.entityName = true;

};
