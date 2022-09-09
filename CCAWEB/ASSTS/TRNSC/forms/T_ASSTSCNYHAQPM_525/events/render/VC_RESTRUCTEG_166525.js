//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: RestructuringDetail
task.render = function (entities, renderEventArgs) {

    renderEventArgs.commons.execServer = false;
    var nav = renderEventArgs.commons.api.navigation;
    var params = nav.getCustomDialogParameters();
    $("button.close").hide();
    //RUBROS
    nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRHWGYLNWJ_330',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_OPERATIOEE_354330'
    };
    nav.queryParameters = {
        mode: 2
    };
    nav.customDialogParameters = {
        operation: params.operation,
        money: params.currency,
        typeOperation: params.type
    };
    nav.registerView('G_RESTRUCURN_482261');

};
