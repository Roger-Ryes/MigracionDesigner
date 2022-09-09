

//Entity: OperationEntity
//OperationEntity.typeSyndicated (RadioButtonList) View: OperationForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_TYPESYNDICATEEE_795221 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = true;
  
    changedEventArgs.commons.execServer = false;
   
 
};