

//Entity: GeneralParametersQuery
//GeneralParametersQuery.benefitInterestRate (CheckBox) View: OperationGeneralParametersForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_4223IMHHOSVYCXY_300309 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    var viewState = changedEventArgs.commons.api.viewState;
    var baseRate = entities.GeneralParametersQuery.benefitBaseRate;
    
    if(changedEventArgs.newValue == 'S'){
        viewState.enable('VA_9193TCVDUUBRZAN_137309');
        if(!baseRate){
            entities.GeneralParametersQuery.benefitBaseRate = 'A';
           }
       }else{
        entities.GeneralParametersQuery.benefitBaseRate = null;
        viewState.disable('VA_9193TCVDUUBRZAN_137309'); 
       }

};