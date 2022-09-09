//Start signature to Callback event to VA_VABUTTONQQAURTL_245520
task.executeCommandCallback.VA_VABUTTONQQAURTL_245520 = function(entities, executeCommandCallbackEventArgs) {
    if(executeCommandCallbackEventArgs.success){

        entities.Members.editionMode = executeCommandCallbackEventArgs.commons.constants.mode.Insert;
        entities.Members.member = null;
        entities.Members.currency = null;
        entities.Members.amount = null;
        entities.Members.used = 0;
        entities.Members.available = 0;
        entities.Members.observations = null;
         entities.Members.control='N';

        executeCommandCallbackEventArgs.commons.api.parentVc.viewState.G_LOANLINRER_722461.visible = true;
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_OPERACIOA_60671',false, null, timer);
        executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_NW92_QCN40');
        
    }
    

    
};
