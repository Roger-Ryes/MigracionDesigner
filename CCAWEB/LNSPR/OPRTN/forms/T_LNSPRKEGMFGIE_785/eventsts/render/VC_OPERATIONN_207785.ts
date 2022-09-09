
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: OperationGeneralParametersForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let viewState: any = renderEventArgs.commons.api.viewState;

    if (entities.GeneralParametersQuery){
        entities.GeneralParametersQuery.paymentMethod = entities.GeneralParametersQuery.wayPayment
        if (
            entities.GeneralParametersQuery.paymentCategory == 'NDAH' || 
            entities.GeneralParametersQuery.paymentCategory == 'PLANO'
        ) {
            viewState.show('VA_VABUTTONOHXRHAO_106309');
        }else{
            viewState.hide('VA_VABUTTONOHXRHAO_106309');
        }
    } else {
        viewState.hide('VA_VABUTTONOHXRHAO_106309');//button establecer
        entities.GeneralParametersQuery.account = null;
    }
};