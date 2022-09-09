//Start signature to Callback event to VA_VABUTTONBWOPFCN_144412
task_executeCommandCallback_VA_VABUTTONBWOPFCN_144412 = (
 entities: Model,
 executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
     if (executeCommandCallbackEventArgs.success) {
        executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINACR_870461.visible = true;
        executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINTRE_952461.visible = true;
        executeCommandCallbackEventArgs.commons.api.parentVc!.model.LoanLinesCreation = entities.LoanLinesCreation;
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671', false, null, timer);
              
        if (entities.ValidationGroup.result == 'S') {
         executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINACR_870461.visible = true;   
        }else{
              executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINRER_722461.visible = true; 
             executeCommandCallbackEventArgs.commons.api.parentVc!.viewState.G_LOANLINACR_870461.visible = false; 
        }
         
        executeCommandCallbackEventArgs.commons.api.viewState.disable('VA_VABUTTONBWOPFCN_144412');
    }
};
