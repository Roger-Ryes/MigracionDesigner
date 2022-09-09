//Entity: 
    //.percentage (TextInputBox) View: LoanSearchForm
    //Evento Change: Se ejecuta al cambiar el valor de un InputControl.
    task_change_VA_PERCENTAGEJSRSR_369423 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {

    if(changedEventArgs.newValue!=null){
    changedEventArgs.commons.api.viewState.disable('VA_SIGNKLSEFBDNEKD_114423');
    changedEventArgs.commons.api.viewState.disable('VA_FACTORGZZGBQQEQ_812423');
        changedEventArgs.commons.api.viewState.disable('VA_REFERENCIALHVKA_159423');
        
    entities.ReadjustmentMEntity.sign = null;
    entities.ReadjustmentMEntity.factor = null;
        entities.ReadjustmentMEntity.referencial = null;
    }else{
    changedEventArgs.commons.api.viewState.enable('VA_SIGNKLSEFBDNEKD_114423');
    changedEventArgs.commons.api.viewState.enable('VA_FACTORGZZGBQQEQ_812423');
        changedEventArgs.commons.api.viewState.enable('VA_REFERENCIALHVKA_159423');
    }
    
        
    changedEventArgs.commons.execServer = false;
    
        
    };