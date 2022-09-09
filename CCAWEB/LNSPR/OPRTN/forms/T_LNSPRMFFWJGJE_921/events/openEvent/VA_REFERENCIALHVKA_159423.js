//Entity: ReadjustmentMEntity
//ReadjustmentMEntity.referencial (TextInputButton) View: MassiveReadjustmentForm

task.textInputButtonEvent.VA_REFERENCIALHVKA_159423 = function( textInputButtonEventArgs ) {
    textInputButtonEventArgs.commons.execServer = false;

    //Open Modal
    var nav = textInputButtonEventArgs.commons.api.navigation;
    
    nav.label = cobis.translate('LNSPR.LBL_LNSPR_REFERENIC_88346');
    nav.address = {
        moduleId: 'LNSPR',
        subModuleId: 'OPRTN',
        taskId: 'T_LNSPRUPDQTUXI_446',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_MODALREFTE_678446'
    };
    nav.queryParameters = {
        mode: 8
    };
    nav.modalProperties = {
        size: 'lg',
        callFromGrid: false
    };

    nav.customDialogParameters = {
        param: 1
    };

//Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
//nav.openModalWindow(args.commons.controlId, null);
//Si la llamada es desde un evento de un control perteneciente a una grilla de la página
//nav.openModalWindow(id, args.modelRow);

};