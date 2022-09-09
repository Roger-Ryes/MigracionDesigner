
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OperationLoansForm
task_initData_VC_OPERATIONL_208539 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let viewState: any = initDataEventArgs.commons.api.viewState;
    let nav: any = initDataEventArgs.commons.api.navigation;
    let params: any = nav.getCustomDialogParameters();

    initDataEventArgs.commons.api.vc.model.OperationEntity = initDataEventArgs.commons.api.parentVc?.model.OperationEntity;
    entities.OperationEntity = initDataEventArgs.commons.api.vc.model.OperationEntity;

    initDataEventArgs.commons.execServer = false;
};