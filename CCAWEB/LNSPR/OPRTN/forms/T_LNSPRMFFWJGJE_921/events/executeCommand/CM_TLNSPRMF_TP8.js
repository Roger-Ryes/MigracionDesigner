// (Button) 
task.executeCommand.CM_TLNSPRMF_TP8 = function(entities, executeCommandEventArgs) {
    var idAux = cobis.container.tabs.getCurrentTab().id;
    var urlAux = cobis.container.tabs.getCurrentTab().url;
    var nameAux = undefined;
    // executeCommandEventArgs.commons.execServer = true;
    return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_VAASALITS_91042").then(
        function (response) {
            
            switch (response.buttonIndex) {
                
                case 0: //cancel
                    executeCommandEventArgs.commons.execServer = false;
                    break;
                case 1: //accept
                    executeCommandEventArgs.commons.execServer = true;

                    if (cobis.container.tabs.getCurrentTab().text != undefined) {
                        nameAux = cobis.container.tabs.getCurrentTab().text;
                    } else {
                        nameAux = cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAOS_76833");
                    }

                    cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
                    return true;
                    break;
            }
        }
    );
    

};