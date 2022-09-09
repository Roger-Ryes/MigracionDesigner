
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: AggregateDeferredItemsForm
task_initData_VC_AGGREGATRT_463195 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    initDataEventArgs.commons.execServer = false;

    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    let viewState: any = initDataEventArgs.commons.api.viewState;

    entities.AggregateDeferredItemsEntity.operation = parameters.parameters.loan.loanBankID;

    viewState.disable('VA_8482SGVAKLBEUXQ_566397'); //monto 
    viewState.disable('CM_TASSTSHR_TNS');  //transmitir
};