// (Button) 
task.executeCommand.CM_TLNSPRWQ_N5S = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;

    var idAux = cobis.container.tabs.getCurrentTab().id;
    var urlAux = cobis.container.tabs.getCurrentTab().url;
    var nameAux = undefined;

    if (cobis.container.tabs.getCurrentTab().name != undefined) {
        nameAux = cobis.container.tabs.getCurrentTab().name;
    } else {
        nameAux = cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAIV_19760");
    }

    cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
};
