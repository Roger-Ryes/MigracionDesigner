// (Button) 
task_executeCommand_CM_TREFINAN_4A_ = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let idAux: any = this.cobis.container.tabs.getCurrentTab().id;
    let urlAux: any = this.cobis.container.tabs.getCurrentTab().url;
    let nameAux: any = undefined;

    if (this.cobis.container.tabs.getCurrentTab().name != undefined) {
        nameAux = this.cobis.container.tabs.getCurrentTab().name;
    } else {
        nameAux = this.cobis.translate("ASSTS.LBL_ASSTS_RENOVACMA_67253");
    }

    this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
};
