
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OperationGeneralParametersForm
task.initData.VC_OPERATIONN_207785 = function (entities, initDataEventArgs){

    //initDataEventArgs.commons.serverParameters.entityName = true;
    if (initDataEventArgs.commons.api.parentVc.id == 'VC_RESTRUCTEG_166525') {
        var nav = initDataEventArgs.commons.api.navigation;
        
        entities.OperationEntity.operation = nav.getCustomDialogParameters().operation;
        entities.OperationEntity.money = nav.getCustomDialogParameters().money;
        entities.AmortizationFormEntity.numOperation = nav.getCustomDialogParameters().operation;

        initDataEventArgs.commons.execServer = true;
    } else {
        initDataEventArgs.commons.execServer = false;
    }
};