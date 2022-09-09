// (Button) 
task.executeCommand.CM_TLNSPRII_7SR = function(entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    var idAux = cobis.container.tabs.getCurrentTab().id;
    var urlAux = cobis.container.tabs.getCurrentTab().url;
    var nameAux = undefined;

    if (cobis.container.tabs.getCurrentTab().text != undefined) {
        nameAux = cobis.container.tabs.getCurrentTab().text;
    } else {
            nameAux = cobis.translate("LNSPR.LBL_LNSPR_VENTACAET_55114");    
    }

    cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);

};