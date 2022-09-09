//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansUpdateForm
task.initData.VC_LOANSUPDEE_628908 = function (entities, initDataEventArgs){

    if(initDataEventArgs.commons.api.parentVc.customDialogParameters != null){
        //Asigno valores a Entidad
        entities.GeneralInformation.numeroOperacion = initDataEventArgs.commons.api.parentVc.customDialogParameters.loanBankID;
        entities.GeneralInformation.nombreCliente = initDataEventArgs.commons.api.parentVc.customDialogParameters.client;
        
        var viewState = initDataEventArgs.commons.api.viewState; 
        //Ejecuto Server
        initDataEventArgs.commons.execServer = true;
    }else{
       initDataEventArgs.commons.execServer = false;
    }
    
    initDataEventArgs.commons.serverParameters.Loan = true;
    
    initDataEventArgs.commons.serverParameters.GeneralInformation = true;
    initDataEventArgs.commons.serverParameters.GenericEntity = true;
    //initDataEventArgs.commons.serverParameters.CreateOperationOne = true;
    //initDataEventArgs.commons.serverParameters.CreateOperationTwo = true;

    initDataEventArgs.commons.serverParameters.GeneralParametersQuery = true;//Datos Parametros Generales
    initDataEventArgs.commons.serverParameters.AmortizationFormEntity = true;//Datos Amortización
    initDataEventArgs.commons.serverParameters.AmortizationTitleEntity = true; 
    initDataEventArgs.commons.serverParameters.AmortizationEntity = true; 

    initDataEventArgs.commons.serverParameters.OperationEntity = true;//Diseño
    initDataEventArgs.commons.api.vc.viewState.G_LOANSOPENT_770518.visible = false;
 // Bloqueo de check de sindicado
    initDataEventArgs.commons.api.viewState.disable('VA_SYNDICATEDRJKWH_210518');
    initDataEventArgs.commons.api.viewState.hide('QV_GM97_JJJ11');
    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters. = true;

    initDataEventArgs.commons.api.viewState.disable('CM_TLNSPRVJ_776');

};