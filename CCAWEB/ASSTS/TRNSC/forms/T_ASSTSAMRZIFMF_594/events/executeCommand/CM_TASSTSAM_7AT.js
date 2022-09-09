// (Button) 
task.executeCommand.CM_TASSTSAM_7AT = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    var idAux = cobis.container.tabs.getCurrentTab().id;
    var urlAux = cobis.container.tabs.getCurrentTab().url;
    var nameAux = undefined;

    if (cobis.container.tabs.getCurrentTab().name != undefined) {
        nameAux = cobis.container.tabs.getCurrentTab().name;
    } else {
        nameAux = cobis.translate("ASSTS.LBL_ASSTS_REESTRURC_23393");
    }

    cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);

};
