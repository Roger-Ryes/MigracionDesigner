//Entity: ReadjustmentMEntity
//ReadjustmentMEntity.factor (TextInputBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_FACTORGZZGBQQEQ_812423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    
    if(entities.ReadjustmentMEntity.sign !=null && entities.ReadjustmentMEntity.factor != null){
        changedEventArgs.commons.api.viewState.disable('VA_PERCENTAGEJSRSR_369423');
        entities.ReadjustmentMEntity.percentage = null;
    }else{
        changedEventArgs.commons.api.viewState.enable('VA_PERCENTAGEJSRSR_369423');
        entities.ReadjustmentMEntity.percentage = null;
    }
    
    changedEventArgs.commons.execServer = false;

};