// (Button) 
task_executeCommand_CM_TLNSPRZY_N35 = async (
    entities: Model,
    executeCommandEventArgs: CobisModelExecuteCommandEventArgs
) => {
    let auxData: any = [];
    entities.LoanList.forEach((itemData: any) => {
       if (itemData.loanBankID) {
           auxData.push(itemData);
       }
     })
    entities.LoanList = auxData;

    let response: any = await firstValueFrom(
        executeCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_VAASALITS_91042")
    );

    switch (response.buttonIndex) {
            
            case 0: //cancel
                executeCommandEventArgs.commons.execServer = false;
                break;
            case 1: //accept
                executeCommandEventArgs.commons.execServer = true;
                return true;
                break;
        }
};
  