
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: StatusChangeMassive
task.initData.VC_STATUSCHVI_933411 = function (entities, initDataEventArgs){
    
    initDataEventArgs.commons.api.vc.viewState.VA_CODCURRENCYNEWR_137293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_DISBURSEMENTETD_259293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_STATESICWPQOPFM_485293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_MIGRATEDOPERIAA_938293.visible = false;
    initDataEventArgs.commons.api.vc.viewState.VA_TYPEFPEZUZQRCCT_308293.visible = false;
    initDataEventArgs.commons.api.viewState.disable('VA_DESCSTATUSKOPMT_184293');
    
    initDataEventArgs.commons.execServer = false;

};