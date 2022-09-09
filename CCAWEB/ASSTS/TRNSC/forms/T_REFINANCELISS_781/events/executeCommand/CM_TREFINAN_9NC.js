// (Button) 
    task.executeCommand.CM_TREFINAN_9NC = function(entities, executeCommandEventArgs) {
        executeCommandEventArgs.commons.execServer = false;
        var msgResourceID = "";
        var hasError = false;
        
        if (entities.RefinanceLoanFilter.additionalValue == null) 
            entities.RefinanceLoanFilter.additionalValue = 0;
            
        if (entities.RefinanceLoans._data.length == 0) {
            hasError = true;
            msgResourceID = "ASSTS.MSG_ASSTS_NOEXISTRI_36661";
        }
        
    if (!hasError && !entities.RefinanceLoanFilter.operationType) {
            hasError = true;
            msgResourceID = "ASSTS.MSG_ASSTS_ELCAMPOOR_72789";
        }
        
        if (!hasError && entities.RefinanceLoanFilter.totalRefinance <= 0) {
            hasError = true;
            msgResourceID = "ASSTS.MSG_ASSTS_ELSALDOAU_44947";
        }
        
        if (!hasError && entities.RefinanceLoanFilter.additionalValue  < 0) {
            hasError = true;
            msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18739";
        }
        
        if (entities.RefinanceLoanFilter.additionalValue  > 0) {
        if (!hasError && !entities.RefinanceLoanFilter.addicionalPayMethod) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_ELCAMPOLR_45229";
            }
            
        }
                
    if (entities.RefinanceLoanFilter.capitalizeBalance == "N" && entities.RefinanceLoanFilter.valuePay != 0) {
        hasError = true;
        msgResourceID = "ASSTS.MSG_ASSTS_DEBEPAGUS_92215";
    }

        
    if (!hasError) {
        return executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTSEGUAL_93590").then(
            function (response) {
                switch (response.buttonIndex) {
                    case 0: //cancel
                        executeCommandEventArgs.commons.execServer = false;
                        return false;
                    case 1: //accept
                        executeCommandEventArgs.commons.execServer = true;
                        return true;

                }
            }
        );

    }


        if (hasError) {           
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation(msgResourceID, false, null, timer);
        }else{
           executeCommandEventArgs.commons.execServer = true;
        }
    };