//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
    //ViewContainer: ProjectionQuotaFormMain
    task.initData.VC_PROJECTIIU_405244 = function (entities, initDataEventArgs){

    var api = initDataEventArgs.commons.api;
    var parameters = api.navigation.getCustomDialogParameters();
    entities.Loan = parameters.parameters.loan;

    var apiHeader = initDataEventArgs.commons.api.cobisPatterns.header;

    initDataEventArgs.commons.api.viewState.hide('VC_XAGJYCIGBI_296244');
    if (initDataEventArgs.commons.api.parentVc.id == "VC_GENERALIAO_289119") {
        // initDataEventArgs.commons.api.viewState.hide('VC_XAGJYCIGBI_296244');
        apiHeader.loadHeader(false);
         initDataEventArgs.commons.execServer = false;
    } else {
        //initDataEventArgs.commons.api.viewState.show('VC_XAGJYCIGBI_296244');
        apiHeader.loadHeader(true);
         initDataEventArgs.commons.execServer = true;
    }
        
   

    };