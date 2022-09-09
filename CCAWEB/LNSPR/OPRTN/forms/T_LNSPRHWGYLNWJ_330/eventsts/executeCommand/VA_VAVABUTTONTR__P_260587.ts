// (Button) 
task_executeCommand_VA_VAVABUTTONTR__P_260587 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    
    executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true;

    executeCommandEventArgs.commons.serverParameters.GeneralParametersQuery = true;
    executeCommandEventArgs.commons.serverParameters.GenericEntity = true;
    executeCommandEventArgs.commons.serverParameters.OperationEntity = true;
    
    executeCommandEventArgs.commons.serverParameters.OperationItemList = true;
    executeCommandEventArgs.commons.execServer = true;
    //executeCommandEventArgs.commons.serverParameters. = true;

};
