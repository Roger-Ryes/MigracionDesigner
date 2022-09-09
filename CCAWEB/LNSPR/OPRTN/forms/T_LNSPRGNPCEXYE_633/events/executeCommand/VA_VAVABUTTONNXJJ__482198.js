// (Button) - Adicional
task.executeCommand.VA_VAVABUTTONNXJJ__482198 = function (entities, executeCommandEventArgs) {
    executeCommandEventArgs.commons.execServer = false;
    var navigation = executeCommandEventArgs.commons.api.navigation;    
    navigation.address = {
        moduleId: "LOANS",
        subModuleId: "TRNSC",
        taskId: "T_LOANSZXSLOKQN_747",
        taskVersion: "1.0.0",
        viewContainerId: "VC_ADDITIONES_341747",
        useMinification: false
    };    
    navigation.label = cobis.translate('LNSPR.LBL_LNSPR_CUOTASALL_23751'); 
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