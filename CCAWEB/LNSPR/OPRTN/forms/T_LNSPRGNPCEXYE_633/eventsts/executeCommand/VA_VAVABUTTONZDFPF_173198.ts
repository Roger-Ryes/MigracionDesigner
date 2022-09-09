// (Button) - Gracias
task_executeCommand_VA_VAVABUTTONZDFPF_173198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;

    let selectedRow: any = executeCommandEventArgs.commons.api.grid.getSelectedRows('QV_ECPR_JAA30');
    let navigation: any = executeCommandEventArgs.commons.api.navigation;
    let dividend: any = 1;

    navigation.address = {
        moduleId: "LOANS",
        subModuleId: "TRNSC",
        taskId: "T_LOANSZQQDQSAY_947",
        taskVersion: "1.0.0",
        viewContainerId: "VC_GRACEUOHZY_605947",
        useMinification: false
    };
    navigation.label = this.cobis.translate('LNSPR.LBL_LNSPR_DASDEGROA_98393');
    navigation.modalProperties = {
        size: 'md'
    };
    if (selectedRow.length > 0) {
        dividend = selectedRow[0].dividend;
    }
    //navigation.queryParameters = {
    //    mode: 0
    //};    
    navigation.customDialogParameters = {
        dividend : dividend,
        operation : entities.OperationEntity.operation
    };
    navigation.openModalWindow(executeCommandEventArgs.commons.controlId, null);
};