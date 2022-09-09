
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: CompaniesDiscountsFileFormModal
task.render = function (entities, renderEventArgs){

    renderEventArgs.commons.execServer = false;
    var api = renderEventArgs.commons.api;
    var mode = renderEventArgs.commons.constants.mode;
    if(api.vc.mode == mode.Query ){
        api.viewState.hide('CM_TASSTSBL__S7')
        api.viewState.disable('G_COMPANISDF_845596')
    }
    if (!entities.CompaniesDiscountsFileList.errorDesc){
        api.viewState.hide('VA_ERRORDESCQGHVJA_314596')
    }
};