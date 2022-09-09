//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: GeneralInformationLine
task.initData.VC_GENERALIAN_158721 = function (entities, initDataEventArgs) {
    var params;
    var nav = initDataEventArgs.commons.api.navigation;

    if (initDataEventArgs.commons.api.parentVc && initDataEventArgs.commons.api.parentVc.id == 'VC_LOANSLINSS_962737') {
        params = initDataEventArgs.commons.api.navigation.getCustomDialogParameters();
    } else {
        params = getParams();
    }

    entities.LoansLinesHeader.cupo = params.cupo;

    nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRASFFUCSU_551',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_CURRENTSSN_601551'
    };
    nav.queryParameters = {
        mode: 8
    };
    nav.customDialogParameters = {
        secuencial: params.secuencial
    };
    nav.registerView('G_GENERALAAO_224243', false);

    nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPREHKSWWGN_923',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_MEMBERSLNN_871923'
    };
    nav.queryParameters = {
        mode: 8
    };
    nav.customDialogParameters = {
        secuencial: params.secuencial
    };
    nav.registerView('G_GENERALLII_531243', false);


    initDataEventArgs.commons.execServer = true;
    //initDataEventArgs.commons.serverParameters.entityName = true;

};
