
//Start signature to Callback event to VA_6427AZGDIHWLKXG_205584
task.executeCommandCallback.VA_6427AZGDIHWLKXG_205584 = function(entities, executeCommandCallbackEventArgs) {
     var viewState = executeCommandCallbackEventArgs.commons.api.viewState;
    
     if (executeCommandCallbackEventArgs.success) {
           entities.LoanSaleList._data[0].user=JSON.parse(sessionStorage.UserName); 
           viewState.enable('CM_TLNSPRII_6S6'); //boton guardar
           executeCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList.data()[0], 'VA_GRIDROWCOMMMNAA_525584');
           uploadedFile = true;
         }
};
