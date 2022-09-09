
//Start signature to Callback event to Q_LOANAELE_GZ51
task.executeQueryCallback.Q_LOANAELE_GZ51 = function(entities, executeQueryCallbackEventArgs) {
     
    if (entities.LoanSaleList.data().length > 0) {
        for (var i = 0; i < entities.LoanSaleList.data().length; i++) {
            if (entities.LoanSaleList.data()[i].state != 'ING' && entities.LoanSaleList.data()[i].state != 'PRO' 
                 && entities.LoanSaleList.data()[i].state != 'ERR') {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList.data()[i], 'delete');
            }
            
            if (entities.LoanSaleList.data()[i].state != 'ING' ) {
                executeQueryCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList.data()[i], 'VA_GRIDROWCOMMMNAA_525584');
            }
        }
    }
};
