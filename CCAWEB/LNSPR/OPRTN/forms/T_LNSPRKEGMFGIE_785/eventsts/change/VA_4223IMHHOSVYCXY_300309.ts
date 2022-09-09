

//Entity: GeneralParametersQuery
//GeneralParametersQuery.benefitInterestRate (CheckBox) View: OperationGeneralParametersForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task_change_VA_4223IMHHOSVYCXY_300309 = (entities: Model, changedEventArgs: CobisModelChangeEventArgs) => {
    changedEventArgs.commons.execServer = false;
    let viewState: any = changedEventArgs.commons.api.viewState;
    let baseRate: any = entities.GeneralParametersQuery.benefitBaseRate;

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