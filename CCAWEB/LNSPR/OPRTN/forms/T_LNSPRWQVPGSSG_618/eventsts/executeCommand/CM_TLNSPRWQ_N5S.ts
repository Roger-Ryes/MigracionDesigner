// (Button) 
task_executeCommand_CM_TLNSPRWQ_N5S = (
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
        nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_PAGOSMAIV_19760");
    }

    this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
};
