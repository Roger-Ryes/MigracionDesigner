// (Button) 
//designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TASSTSAM_7AT'.
task_executeCommand_CM_TASSTSAM_7AT = (
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    entities: Model,
    //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (this.cobis.container.tabs.getCurrentTab().name != undefined) {
        nameAux = this.cobis.container.tabs.getCurrentTab().name;
    } else {
        nameAux = this.cobis.translate("ASSTS.LBL_ASSTS_REESTRURC_23393");
    }

    this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
};
