//gridRowSelecting QueryView: QV_DF84_XNN39
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_DF84_XNN39 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;

    //Open Modal
    let args: any = gridRowSelectingEventArgs;

    let nav: any = args.commons.api.navigation;

    nav.label = this.cobis.translate('ASSTS.LBL_ASSTS_BENEFICIO_10718');
    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'QERYS',
        taskId: 'T_ASSTSZHWXXEQV_571',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_LOANSBENIF_286571'
    };

    nav.queryParameters = {
        mode: 8
    };



    nav.modalProperties = {
        size: 'lg',
        callFromGrid: false
    };
    nav.customDialogParameters = {
        variable: gridRowSelectingEventArgs.rowData
    };

    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    //nav.openModalWindow(args.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    nav.openModalWindow('QV_DF84_XNN39', args.modelRow);
};