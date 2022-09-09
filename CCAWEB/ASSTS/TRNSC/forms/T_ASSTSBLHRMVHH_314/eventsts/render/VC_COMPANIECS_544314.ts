
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: CompaniesDiscountsFileFormModal
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let api: any = renderEventArgs.commons.api;
    let mode: any = renderEventArgs.commons.constants.mode;
    if(api.vc.mode == mode.Query ){
        api.viewState.hide('CM_TASSTSBL__S7')
        api.viewState.disable('G_COMPANISDF_845596')
    }
    if (!entities.CompaniesDiscountsFileList.errorDesc){
        api.viewState.hide('VA_ERRORDESCQGHVJA_314596')
    }
};