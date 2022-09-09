// (Button) - Adicional
task_executeCommand_VA_VAVABUTTONNXJJ__482198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    executeCommandEventArgs.commons.execServer = false;
    let navigation: any = executeCommandEventArgs.commons.api.navigation;
    navigation.address = {
        moduleId: "LOANS",
        subModuleId: "TRNSC",
        taskId: "T_LOANSZXSLOKQN_747",
        taskVersion: "1.0.0",
        viewContainerId: "VC_ADDITIONES_341747",
        useMinification: false
    };
    navigation.label = this.cobis.translate('LNSPR.LBL_LNSPR_CUOTASALL_23751');
    navigation.modalProperties = {
        size: 'md'
    };
    navigation.queryParameters = {
        mode: 2
    };
    navigation.customDialogParameters = {
        operation : entities.OperationEntity.operation
    };
    navigation.openModalWindow(executeCommandEventArgs.commons.controlId, null);
};