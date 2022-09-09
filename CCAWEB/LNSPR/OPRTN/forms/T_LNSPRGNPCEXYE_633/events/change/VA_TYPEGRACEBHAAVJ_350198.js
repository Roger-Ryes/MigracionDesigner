//Entity: AmortizationFormEntity
//AmortizationFormEntity.typeGrace (RadioButtonList) View: OperationPaymentDayUpdateForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TYPEGRACEBHAAVJ_350198 = function (entities, changedEventArgs) {
    changedEventArgs.commons.execServer = false;
    var viewState = changedEventArgs.commons.api.viewState;
    
    if(changedEventArgs.newValue == 'S'){
       viewState.show('VA_9468GILHMJRMZIF_745198');
    }else{
       viewState.hide('VA_9468GILHMJRMZIF_745198'); 
       entities.AmortizationFormEntity.graceDividend = 0;
    }
    
};