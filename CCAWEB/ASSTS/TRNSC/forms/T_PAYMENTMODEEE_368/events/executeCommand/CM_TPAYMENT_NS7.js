// (Button) 
    task.executeCommand.CM_TPAYMENT_NS7 = function(entities, executeCommandEventArgs) {
    entities.LoanAdditionalInformation = executeCommandEventArgs.commons.api.parentVc.model.LoanAdditionalInformation

    //executeCommandEventArgs.commons.serverParameters.PaymentForm = true;
    //executeCommandEventArgs.commons.serverParameters.Loan = true;
    //executeCommandEventArgs.commons.serverParameters.LoanAdditionalInformation = true;
        var cm = executeCommandEventArgs.commons;
      if(cm.api.vc.viewState.Spacer1695.visible == false){
         entities.PaymentForm.economicDestination = null;
      }



    if (entities.PaymentForm.amountTr > entities.DisbursementResult.difference) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_VALORDEEA_97215', false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
        return;
        // changeEventArgs.commons.api.viewState.disable('VA_4212YIFTVBCOPPD_140216');
    }

    if (executeCommandEventArgs.commons.api.viewState.getDataItem("Spacer2675").pCobis == 4 && !entities.PaymentForm.accountNumber) {
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation('ASSTS.MSG_ASSTS_CUENTARQA_93919', false, null, timer);
        executeCommandEventArgs.commons.execServer = false;
        return;
    } else {
        executeCommandEventArgs.commons.execServer = true;
    }

    };