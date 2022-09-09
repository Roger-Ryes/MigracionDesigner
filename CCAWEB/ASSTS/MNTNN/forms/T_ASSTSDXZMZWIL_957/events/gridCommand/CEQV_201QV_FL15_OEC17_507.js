//gridCommand (Button) QueryView: QV_FL15_OEC17
//Evento GridCommand: Sirve para personalizar la acción que realizan los botones de Grilla.
task.gridCommand.CEQV_201QV_FL15_OEC17_507 = function (entities, gridExecuteCommandEventArgs) {
    gridExecuteCommandEventArgs.commons.execServer = false;

    //Open Modal
    var nav = gridExecuteCommandEventArgs.commons.api.navigation;
    nav.label = 'ASSTS.LBL_ASSTS_ASOCIARAE_28270';
    nav.address = {
        moduleId: 'ASSTS',
        subModuleId: 'MNTNN',
        taskId: 'T_ASSTSFPNDGGEH_445',
        taskVersion: '1.0.0',
        viewContainerId: 'VC_MODALLOAIS_799445'
    };

    nav.queryParameters = {
        mode: 1
    };
    nav.modalProperties = {
        size: 'md',
        callFromGrid: false
    };

    nav.customDialogParameters = {
        loan: gridExecuteCommandEventArgs.commons.api.navigation.getCustomDialogParameters().loan
    };

    //Si la llamada es desde un evento de un control perteneciente a la cabecera de la página
    //nav.openModalWindow(args.commons.controlId, null);
    //Si la llamada es desde un evento de un control perteneciente a una grilla de la página
    nav.openModalWindow('CEQV_201QV_FL15_OEC17_507', gridExecuteCommandEventArgs.nameEntityGrid);

};
