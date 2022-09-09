
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: CompanyCreateForm
task.initData.VC_COMPANYCEE_242845 = function (entities, initDataEventArgs){

    var api = initDataEventArgs.commons.api;
    var mode = initDataEventArgs.commons.constants.mode;
    var execServer = true;
    if(api.vc.mode == mode.Insert){
        execServer = false;
        //initialize
        entities.Company.paymentFormService = (entities.Company.paymentFormService)?entities.Company.Company:'T';
        entities.Company.paymentFrequency = (entities.Company.paymentFrequency)?entities.Company.paymentFrequency:'Q';
        entities.Company.agreement = (entities.Company.agreement)?entities.Company.agreement:'N';
        entities.Company.paymentPercentage = 0.0
        entities.Company.rateApply = 0.0
    }else if(api.vc.mode == mode.Update){
        execServer = true;
    }else if(api.vc.mode == mode.Query){
        if ( api.parentVc && (api.parentVc.id == 'VC_COMPANIECR_302580')) {
            var nav = initDataEventArgs.commons.api.navigation;
            if(nav.getCustomDialogParameters()){
                entities.CompaniesList.institution = nav.getCustomDialogParameters().institution;
                execServer = true;
            }
        }
    }
    initDataEventArgs.commons.execServer = execServer;
    initDataEventArgs.commons.serverParameters.Company = true;
    initDataEventArgs.commons.serverParameters.CompaniesList = true;
};