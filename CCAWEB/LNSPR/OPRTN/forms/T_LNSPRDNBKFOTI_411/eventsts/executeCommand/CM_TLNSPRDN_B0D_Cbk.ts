
//Start signature to Callback event to CM_TLNSPRDN_B0D
task_executeCommandCallback_CM_TLNSPRDN_B0D = (
    entities: Model,
    executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {

    if(executeCommandCallbackEventArgs.success){
        let loans: any = entities.LoanList;
        let contError: any = 0;

        for (let i: any=0; i<loans.length; i++) {
            if(loans[i].descriptionMistake){
            contError++;
            }
        }

        if(contError==0){
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671',   false,null,timer);
    }
    }else{
    executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_VABUTTONUSCBRTC_509293');
    executeCommandCallbackEventArgs.commons.api.viewState.enable('VA_ARCHIVOEWNXRMQG_617293');
    }

};
