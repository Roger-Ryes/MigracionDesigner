// (Button) 
task_executeCommand_CM_TLNSPRII_7SR = (
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
            nameAux = this.cobis.translate("LNSPR.LBL_LNSPR_VENTACAET_55114");    
    }

    this.cobis.container.tabs.changeCurrentTab(idAux, urlAux, nameAux, true);
};