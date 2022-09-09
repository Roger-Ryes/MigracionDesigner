// (Button) 
    //designer-hint: 2304: Cannot find name 'task_executeCommand_CM_TREFINAN_9NC'.
    task_executeCommand_CM_TREFINAN_9NC = async (
        //designer-hint: 2304: Cannot find name 'Model'.
        entities: Model,
        //designer-hint: 2304: Cannot find name 'CobisModelExecuteCommandEventArgs'.
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        executeCommandEventArgs.commons.execServer = false;
        let msgResourceID: any = "";
        let hasError: any = false;

        if (entities.RefinanceLoanFilter.additionalValue == null) 
            entities.RefinanceLoanFilter.additionalValue = 0;

        if (entities.RefinanceLoans.length == 0) {
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
            //designer-hint: 2304: Cannot find name 'firstValueFrom'.
            let response: any = await firstValueFrom(
                executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTSEGUAL_93590")
            );

            switch (response.buttonIndex) {
                    case 0: //cancel
                        executeCommandEventArgs.commons.execServer = false;
                        return false;
                    case 1: //accept
                        executeCommandEventArgs.commons.execServer = true;
                        return true;

                }
        }


        if (hasError) {           
        //designer-hint: 2304: Cannot find name 'timer'.
        executeCommandEventArgs.commons.messageHandler.showMessagesInformation(msgResourceID, false, null, timer);
        }else{
           executeCommandEventArgs.commons.execServer = true;
        }
    };