// (Button) 
task.executeCommand.CM_TASSTSHR_TNS = function(entities, executeCommandEventArgs) {
    
    var parameters = executeCommandEventArgs.commons.api.navigation.getCustomDialogParameters();
    var msgConfirm = "ASSTS.MSG_ASSTS_VAAELIMEE_70525";
    var showMessage = true;

    if (showMessage){			
        return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm(msgConfirm).then(function(resp){
            var response = false;
            switch(resp.buttonIndex){
                case 0 : //CANCEL
                    executeCommandEventArgs.commons.execServer = false;
					break;
                case 1 : //ACCEPT										
                    executeCommandEventArgs.commons.execServer = true;
					response = true;
                    break;
				}
            return response;
        });
    }
};