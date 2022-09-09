
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OperationGeneralParametersForm
task_initData_VC_OPERATIONN_207785 = (entities: Model, initDataEventArgs: CobisModelInitDataEventArgs) => {

    //initDataEventArgs.commons.serverParameters.entityName = true;
    if (initDataEventArgs.commons.api.parentVc?.id == 'VC_RESTRUCTEG_166525') {
        let nav: any = initDataEventArgs.commons.api.navigation;

        entities.OperationEntity.operation = nav.getCustomDialogParameters().operation;
        entities.OperationEntity.money = nav.getCustomDialogParameters().money;
        entities.AmortizationFormEntity.numOperation = nav.getCustomDialogParameters().operation;

        initDataEventArgs.commons.execServer = true;
    } else {
        initDataEventArgs.commons.execServer = false;
    }
};