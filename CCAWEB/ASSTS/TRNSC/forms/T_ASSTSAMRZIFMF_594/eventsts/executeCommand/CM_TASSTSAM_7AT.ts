// (Button) 
task_executeCommand_CM_TASSTSAM_7AT = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (this.ASSTS.tab.name != undefined) {
        nameAux = this.ASSTS.tab.name;
    } else {
        nameAux = this.cobis.translate("ASSTS.LBL_ASSTS_REESTRURC_23393");
    }

    this.ASSTS.container.changeCurrentTab(idAux, urlAux, nameAux, true);
};
