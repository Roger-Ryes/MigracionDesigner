//Entity: ReadjustmentMEntity
//ReadjustmentMEntity.factor (TextInputBox) View: LoanSearchForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_FACTORGZZGBQQEQ_812423 = function(  entities, changedEventArgs ) {
    
    if(entities.ReadjustmentMEntity.sign !=null && entities.ReadjustmentMEntity.factor != null){
        changedEventArgs.commons.api.viewState.disable('VA_PERCENTAGEJSRSR_369423');
        entities.ReadjustmentMEntity.percentage = null;
    }else{
        changedEventArgs.commons.api.viewState.enable('VA_PERCENTAGEJSRSR_369423');
        entities.ReadjustmentMEntity.percentage = null;
    }
    
    changedEventArgs.commons.execServer = false;

};