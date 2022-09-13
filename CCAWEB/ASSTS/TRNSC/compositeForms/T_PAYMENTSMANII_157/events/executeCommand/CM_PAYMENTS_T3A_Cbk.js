//Start signature to Callback event to CM_PAYMENTS_T3A
task.executeCommandCallback.CM_PAYMENTS_T3A = function(entities, executeCommandCallbackEventArgs) {
    //here your code
    var messages = '';
    var unappliedValue = '';
    
    if (executeCommandCallbackEventArgs.success) {

        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_T3A');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_SS1');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_T7N');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_PAYMENTS_NNS');
        executeCommandCallbackEventArgs.commons.api.viewState.disable('CM_TPAYMENT_MA5');
        executeCommandCallbackEventArgs.commons.messageHandler.showMessagesSuccess("ASSTS.LBL_ASSTS_TRANSACEC_23845", false, null, 3000);

        //executeCommandCallbackEventArgs.commons.api.viewState.disable("CM_PAYMENTS_T3A");
    /*if (entities.LoanInstancia.tipo == 'G' && entities.Payment.unappliedPayments > 0) {
        unappliedValue = entities.Payment.unappliedAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); 
        messages = 'Existen ' + entities.Payment.unappliedPayments + ' pago(s) grupal(es) por un monto de ' + unappliedValue + ' pesos pendiente de aplicar. Desea continuar aplicando el pago?'
        cobis.getMessageManager().showMessagesConfirm(messages).then(function (resp) {
            switch (resp.buttonIndex) {
            case 0: //cancel
                console.log('se cancelo..');
                entities.Payment.continuePayment = null;
                break;
            case 1: //accept
                console.log('se acepto..');
                entities.Payment.continuePayment = 'S';
                executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_TPAYMENT_Y_2', 'PaymentsMain', undefined, true, false, 'VC_PAYMENTSAN_916157', false);
                break;
            }
        });
    }*/
    
    if (entities.Loan.tipo == 'G' && ioperacionGrupal == 'F') {
        ioperacionGrupal = null;
        if (entities.PaymentGroup.fechaVen > entities.PaymentGroup.fechaUltProc){
            /*executeCommandCallbackEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_DESEAAPNN_11437")
                .then(function (response) {
                    if (response.buttonIndex == 0){
                       ioperacionGrupal = 'F';
                    }
					if (response.buttonIndex == 1){
						executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_PAYMENTS_T3A', 'PaymentsMain', undefined, true, false, 'VC_PAYMENTSAN_916157', false);
					}
                });    */        
        } else {
            executeCommandCallbackEventArgs.commons.api.vc.executeCommand('CM_PAYMENTS_T3A', 'PaymentsMain', undefined, true, false, 'VC_PAYMENTSAN_916157', false);
        }
    }
    }

};