
//Entity: NoAppliedPayment
//NoAppliedPayment. (Button) View: NoAppliedPaymentsForm
task.gridRowCommand.VA_GRIDROWCOMMMNDD_641728 = function(  entities, gridRowCommandEventArgs ) {

    return gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("ASSTS.MSG_ASSTS_ESTSEGUNA_86756").then(
                 function (response) {
                     switch (response.buttonIndex) {
                         case 0: //cancel
                             
                             gridRowCommandEventArgs.commons.execServer = false;
                           break;
                         case 1: //accept
                             
                             gridRowCommandEventArgs.commons.execServer = true;
                             return true;
                             break;
                     }
                 }
    );

};