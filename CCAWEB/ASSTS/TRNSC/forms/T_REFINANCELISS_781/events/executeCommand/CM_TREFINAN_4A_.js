// (Button) 
task.executeCommand.CM_TREFINAN_4A_ = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    var idAux = cobis.container.tabs.getCurrentTab().id;
    var urlAux = cobis.container.tabs.getCurrentTab().url;
    var nameAux = undefined;

    if (cobis.container.tabs.getCurrentTab().text != undefined) {
        nameAux = cobis.container.tabs.getCurrentTab().text;
    } else {
        nameAux = cobis.translate("ASSTS.LBL_ASSTS_RENOVACMA_67253");
    }

    cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);

};
