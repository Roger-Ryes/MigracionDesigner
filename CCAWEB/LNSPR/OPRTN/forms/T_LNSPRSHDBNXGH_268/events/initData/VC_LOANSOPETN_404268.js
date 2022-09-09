//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansOperationUpdate
task.initData.VC_LOANSOPETN_404268 = function (entities, initDataEventArgs){
    var parentVc = initDataEventArgs.commons.api.parentVc; 
    
    if (parentVc && parentVc.id == 'VC_LOANSEARCH_100921'){
        entities.GeneralInformation.numeroOperacion = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().loanBankID;
    }else{
        entities.GeneralInformation.numeroOperacion = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().operation;
    }
    if (parentVc && parentVc.id == 'VC_LOANPARTIR_265871') {
        initDataEventArgs.commons.api.viewState.disable('VA_SYNDICATEDRJKWH_210518');
        initDataEventArgs.commons.api.viewState.hide('QV_GM97_JJJ11');
    }
    initDataEventArgs.commons.execServer = true;
    initDataEventArgs.commons.serverParameters.GeneralInformation = true;
    initDataEventArgs.commons.serverParameters.OperationEntity = true;
    initDataEventArgs.commons.serverParameters.AmortizationFormEntity = true;
};