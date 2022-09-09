// (Button) 
task.executeCommand.VA_VAVABUTTONTR__P_260587 = function (entities, executeCommandEventArgs) {
    
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
