
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: OperationForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    let viewState: any = renderEventArgs.commons.api.viewState;
    renderEventArgs.commons.execServer = false;
    entities.OperationEntity.office = JSON.parse(sessionStorage.userOffice).code;

    //Beneficio interes
    viewState.disable('VA_4223IMHHOSVYCXY_300309');

    if(entities.GeneralParametersQuery.benefitInterestRate == 'S'){
         viewState.enable('VA_9193TCVDUUBRZAN_137309');//parametros generales - Tasa Base Beneficio
     }else{
          entities.GeneralParametersQuery.benefitBaseRate = null;
          viewState.disable('VA_9193TCVDUUBRZAN_137309'); //parametros generales - Tasa Base Beneficio
    }
};