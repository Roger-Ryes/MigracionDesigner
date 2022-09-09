
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoanSaleDetailForm
task_initData_VC_LOANSALEDE_341511 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
   entities.LoanSaleList = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loanSale;
   let uploadedFile: any = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().uploadedFile;

   if(uploadedFile){
   entities.LoanSaleDetailList = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loanSaleDetail;
      initDataEventArgs.commons.execServer = false;
   }else{
      initDataEventArgs.commons.execServer = true; 
   }
};