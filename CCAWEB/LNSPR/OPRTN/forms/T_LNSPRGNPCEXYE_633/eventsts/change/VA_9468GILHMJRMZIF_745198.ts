

//Entity: AmortizationFormEntity
//AmortizationFormEntity.graceDividend (TextInputBox) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_9468GILHMJRMZIF_745198 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
  changedEventArgs.commons.execServer = false;

  let grace: any = (entities.AmortizationFormEntity.termGraceInterest) ? entities.AmortizationFormEntity.termGraceInterest : 0;
  let numDividend: any = (entities.AmortizationFormEntity.graceDividend) ? entities.AmortizationFormEntity.graceDividend : 0;
  let totalTerm: any = grace + numDividend;

  if(entities.AmortizationFormEntity.typeGrace == 'S' && totalTerm > entities.AmortizationFormEntity.term){
      
      changedEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELNUMDEOS_71652', false, null, timer);
      
       entities.AmortizationFormEntity.graceDividend = 0;
      
     }else if(entities.AmortizationFormEntity.typeGrace == 'S' &&  entities.AmortizationFormEntity.graceDividend < 0){
       changedEventArgs.commons.messageHandler.showMessagesInformation('LNSPR.MSG_LNSPR_ELNUMDEOD_39674', false, null, timer);
         
         entities.AmortizationFormEntity.graceDividend = 0;
     }
};