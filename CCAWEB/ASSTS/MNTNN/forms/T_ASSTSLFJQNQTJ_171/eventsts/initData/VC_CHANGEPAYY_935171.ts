
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: ChangePayDayForm
task_initData_VC_CHANGEPAYY_935171 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {
    let commons: any = initDataEventArgs.commons;
    let api: any = initDataEventArgs.commons.api;
    let parameters: any = api.navigation.getCustomDialogParameters();
    let viewState: any = initDataEventArgs.commons.api.viewState;

    entities.ChangePayDayEntity.operation = parameters.parameters.loan.loanBankID;

    viewState.disable('VA_CURRENTPAYDAYYY_672429');

    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;
};