//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OperationItems
task.initData.VC_OPERATIOEE_354330 = function (entities, initDataEventArgs) {

    var nav = initDataEventArgs.commons.api.navigation;
    if (nav.getCustomDialogParameters() && (nav.getCustomDialogParameters().money || nav.getCustomDialogParameters().money == 0) && nav.getCustomDialogParameters().typeOperation &&
        nav.getCustomDialogParameters().operation) {

        entities.OperationEntity.money = nav.getCustomDialogParameters().money;
        entities.OperationEntity.typeOperation = nav.getCustomDialogParameters().typeOperation;
        entities.OperationEntity.operation = nav.getCustomDialogParameters().operation;
        
        if (initDataEventArgs.commons.api.parentVc && initDataEventArgs.commons.api.parentVc.id == 'VC_LOANPARTIR_265871') {
            entities.AmortizationFormEntity.operationCode = codOperacion;
            initDataEventArgs.commons.api.viewState.hide('VA_VAVABUTTONTR__P_260587');

        }
        initDataEventArgs.commons.execServer = true;
    }

};
