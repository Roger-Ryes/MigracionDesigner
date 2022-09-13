// (Button)
    task_executeCommand_CM_PAYMENTS_T3A = async (
        entities: Model,
        executeCommandEventArgs: CobisModelExecuteCommandEventArgs
    ) => {
        let api: any=executeCommandEventArgs.commons.api;
        let parameters: any=api.navigation.getCustomDialogParameters();
        let hasError: any = false;
        let msgResourceID: any = "";
        if (entities.Loan.tipo === "I"){
            let condonationValue: any = 0.0;
            let valuesCount: any = 0;

            if (entities.Payment.value == null) 
                entities.Payment.value = 0;

            if (entities.Payment.retention == null)
                entities.Payment.retention = 0;

            if (entities.PaymentMethod.category == null)
                entities.PaymentMethod.category = "";

            if (entities.CondonationDetail) {
                for (let i: any = 0; i < entities.CondonationDetail.length; i++) {
                    condonationValue = condonationValue + entities.CondonationDetail[i].valueToCondone ;
                }
            }


            valuesCount = valuesCount + (entities.Payment.value > 0 ? 1 : 0);
            valuesCount = valuesCount + (condonationValue > 0 ? 1 : 0);
            valuesCount = valuesCount + (entities.LeftOverPayment.value > 0 ? 1 : 0);

            /* if (valuesCount > 1 ) {
                    hasError = true;
                    msgResourceID = "ASSTS.MSG_ASSTS_CONDONACI_18738"; 
             }*/

            if (!hasError && entities.Payment.value <= 0 && condonationValue <= 0 && entities.LeftOverPayment.value <= 0) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18739"; 
            }

            if (!hasError && entities.Payment.value < 0 && entities.Payment.entireFee != 'S') {
                hasError = true;
                msgResourceID = "MSG_ASSTS_PAYMENTSA_18744";
            }

            if (!hasError && entities.Payment.date == null) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18740"; 
            }

            if (!hasError && entities.Payment.value && entities.Payment.currencyType == null) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18741"; 
            }

            if (!hasError && entities.LeftOverPayment.value > 0 && entities.LeftOverPayment.currencyType == null) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18748"; 
            }

            if (!hasError && entities.Payment.value > 0 && !entities.Payment.paymentType) {
                    hasError = true;
                    msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18742";
                }

            if (!hasError && entities.LeftOverPayment.value > 0 && entities.LeftOverPayment.paymentType == null) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18747";
            }

            /*  if(!hasError && entities.PaymentMethod.category.substring(0,2) == "CH" && entities.Payment.bank == null) {
                  hasError = true;
                  msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18745";
              }

              if(!hasError && entities.PaymentMethod.category.substring(0,2) == "CH" && (entities.Payment.numCheck == null || entities.Payment.numCheck == "")) {
                  hasError = true;
                  msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18746";
              }*/

            //if(entities.Payment.paymentType === 'NDAH_FINAN') 
            if (executeCommandEventArgs.commons.api.viewState.getDataItem("VA_TEXTINPUTBOXCFY_310141").pCobis == 4) { // ['Nota de DEbito a Cuenta de Aho']
                if (!hasError && (!entities.Payment.reference) && (entities.Payment.value > 0 || entities.Payment.entireFee == 'S')) {
                        hasError = true;
                        msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18743";
                    }
                }

            if (!hasError && (entities.LeftOverPayment.reference == null || entities.LeftOverPayment.reference == "") && entities.LeftOverPayment.value > 0) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18749"; 
            }

            if (entities.Payment.finePrepayment > 0){
               if (entities.Payment.value >= entities.Payment.amount && entities.Payment.value != entities.Payment.amountPrepayment) {
                   hasError = true;
                   msgResourceID = "ASSTS.MSG_ASSTS_ERRORELRL_73200"; 
               }
               if (entities.Payment.value == entities.Payment.amountPrepayment){
                    entities.Loan.newStatus = 'S';
               }else{
                    entities.Loan.newStatus = 'N';
               }
             }

            if (!hasError) {
                let quotationValue: any = 0.0;
                quotationValue = this.getQuotation(entities.QuotationCurrency, entities.Payment.operationCurrencyType)
                entities.Payment.quotationValue = quotationValue

                quotationValue = 0.0;
                quotationValue = this.getQuotation(entities.QuotationCurrency, entities.Payment.currencyType)
                entities.Payment.payQuotationValue = quotationValue

                quotationValue = 0.0;
                quotationValue = this.getQuotation(entities.QuotationCurrency, entities.LeftOverPayment.currencyType)
                entities.LeftOverPayment.leftoverQuotationValue = quotationValue;
            }
        } else {
            
            if (entities.PaymentGroup.value == null || entities.PaymentGroup.value == "") 
                entities.PaymentGroup.value = 0;
            
            if (!hasError && entities.PaymentGroup.date == null) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18740"; 
            }
            
            if (!hasError && entities.PaymentGroup.paymentsType == null) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18742";
            }
            
            if (!hasError && (entities.PaymentGroup.reference == null || entities.PaymentGroup.reference == "")) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18743"; 
            }
            
            if (!hasError && entities.PaymentGroup.value <= 0) {
                hasError = true;
                msgResourceID = "ASSTS.MSG_ASSTS_PAYMENTSA_18739"; 
            }

            if (!hasError && entities.PaymentGroup.value < 0) {
                hasError = true;
                msgResourceID = "MSG_ASSTS_PAYMENTSA_18744";
            }
            
            entities.PaymentGroup.operacion = this.ioperacionGrupal;
        }

        if (hasError) {
            executeCommandEventArgs.commons.messageHandler.showMessagesError(msgResourceID,true);
            executeCommandEventArgs.commons.execServer = false;
        } else {
        // executeCommandEventArgs.commons.execServer = true;

        if (entities.Payment.value < entities.Payment.amountPrepayment) {
             executeCommandEventArgs.commons.execServer = true;
        }else if (entities.Payment.value > entities.Payment.amountPrepayment) {
            let response: any = await firstValueFrom(
                executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_MONTOESEC_40993")
            );

            switch (response.buttonIndex) {
                    case 0: //cancel
                        console.log('se cancelo..');
                        executeCommandEventArgs.commons.execServer = false;
                      return false;
                    case 1: //accept
                        console.log('se acepto..');
                        executeCommandEventArgs.commons.execServer = true;
                       return true;

                }
        }

        }
    };