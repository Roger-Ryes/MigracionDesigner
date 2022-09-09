
//Start signature to Callback event to Q_LOANAELE_GZ51
task_executeQueryCallback_Q_LOANAELE_GZ51 = (
    entities: Model,
    executeQueryCallbackEventArgs: CobisModelExecuteQueryCallbackEventArgs
) => {
     
    if (entities.LoanSaleList.length > 0) {
        for (let i: any = 0; i < entities.LoanSaleList.length; i++) {
            if (entities.LoanSaleList.data()[i].state != 'ING' && entities.LoanSaleList[i].state != 'PRO' 
                 && entities.LoanSaleList[i].state != 'ERR') {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[i], 'delete');
            }
            
            if (entities.LoanSaleList[i].state != 'ING' ) {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[i], 'VA_GRIDROWCOMMMNAA_525584');
            }
        }
    }
};
