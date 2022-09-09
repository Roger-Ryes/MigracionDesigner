//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: OperationPaymentDayUpdateForm
task.initData.VC_OPERATIOPA_648633 = function (entities, initDataEventArgs) {
    var viewState = initDataEventArgs.commons.api.viewState;
    
    if (initDataEventArgs.commons.api.parentVc.id == 'VC_LOANPARTIR_265871' || 
        initDataEventArgs.commons.api.parentVc.id == 'VC_RESTRUCTEG_166525') {
        entities.OperationEntity.operation = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().operation
        entities.OperationEntity.amount = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().amount;
        //viewState.hide('G_OPERATIAPT_630198');//Amortización - Group 3
        viewState.hide('VA_VAVABUTTONZDFPF_173198');//btn gracia
        viewState.hide('VA_VAVABUTTONNXJJ__482198');//btn adicional
        if (initDataEventArgs.commons.api.parentVc.id == 'VC_LOANPARTIR_265871') {
            viewState.hide('G_OPERATIMTO_363198');//Ocultar Botones
        }
        initDataEventArgs.commons.execServer = true;
    } else {
        initDataEventArgs.commons.execServer = false;
    }
    //initDataEventArgs.commons.serverParameters.entityName = true;
    viewState.hide('VA_EXTENDEDPAYMEDA_710198');
};
