
//Start signature to Callback event to VA_6427AZGDIHWLKXG_205584
task_executeCommandCallback_VA_6427AZGDIHWLKXG_205584 = (
  entities: Model,
  executeCommandCallbackEventArgs: CobisModelExecuteCommandCallbackEventArgs
) => {
  let viewState: any = executeCommandCallbackEventArgs.commons.api.viewState;

  if (executeCommandCallbackEventArgs.success) {
        entities.LoanSaleList[0].user=JSON.parse(sessionStorage.UserName); 
        viewState.enable('CM_TLNSPRII_6S6'); //boton guardar
        executeCommandCallbackEventArgs.commons.api.grid.hideGridRowCommand('QV_PT51_RHB11', entities.LoanSaleList[0], 'VA_GRIDROWCOMMMNAA_525584');
        uploadedFile = true;
      }
};
