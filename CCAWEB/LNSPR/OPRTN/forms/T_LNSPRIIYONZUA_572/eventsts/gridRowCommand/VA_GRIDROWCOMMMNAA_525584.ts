
//Entity: LoanSaleList
//LoanSaleList. (Button) View: LoanSaleForm
task_gridRowCommand_VA_GRIDROWCOMMMNAA_525584 = async (
   entities: Model,
   gridRowCommandEventArgs: CobisModelGridRowCommandExecuteEventArgs
) => {
   let saleEntity: any = gridRowCommandEventArgs.rowData;

   if(uploadedFile){
      entities.LoanSaleFilter.fileUploaded = true;
   }else{
      entities.LoanSaleFilter.fileUploaded = false;
   }

   let response: any = await firstValueFrom(
       gridRowCommandEventArgs.commons.messageHandler.showMessagesConfirm("LNSPR.MSG_LNSPR_SEPROCEAE_46460")
   );

   switch (response.buttonIndex) {
           case 0: //cancel
               gridRowCommandEventArgs.commons.execServer = false;
               break;
           case 1: //accept
              if(saleEntity){
               entities.LoanSaleFilter.sequential = saleEntity.sequential;
               gridRowCommandEventArgs.commons.execServer = true;
               }
               return true;
               break;
       }
};