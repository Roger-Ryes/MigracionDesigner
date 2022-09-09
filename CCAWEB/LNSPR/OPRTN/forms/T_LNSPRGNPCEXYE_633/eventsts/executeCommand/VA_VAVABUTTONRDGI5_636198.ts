// (Button) - Calcular
task_executeCommand_VA_VAVABUTTONRDGI5_636198 = (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    $('.k-link.k-pager-nav.k-pager-first').click();
   
    if (entities.AmortizationFormEntity.ballonFee == 'S' && entities.AmortizationFormEntity.fee <= 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_CUOTANO0S_13536", false, null, timer);
        flagUpdateTerm = false;
        executeCommandEventArgs.commons.execServer = false;

    } else if (entities.AmortizationFormEntity.term < 0) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_LAPERIOON_28622", false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
       
    } else {
        entities.OperationEntity.creationDate=entities.AmortizationFormEntity.valueDate;
        
        executeCommandEventArgs.commons.serverParameters.Loan = true;
        executeCommandEventArgs.commons.serverParameters.GenericEntity = true;
        executeCommandEventArgs.commons.serverParameters.OperationEntity = true;
        executeCommandEventArgs.commons.serverParameters.GeneralParametersQuery = true;
        executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true;
        executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true;
        executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true;

        executeCommandEventArgs.commons.execServer = true;
    }



};