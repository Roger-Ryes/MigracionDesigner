//gridRowSelecting QueryView: QV_MD41_JYZ75
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_MD41_JYZ75 = function (entities, gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;
    var nav = gridRowSelectingEventArgs.commons.api.navigation;


    if (gridRowSelectingEventArgs.rowData.rank == 1) {

      
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'MNTNN',
            taskId: 'T_ASSTSGICMCPEO_473',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_ONERANKGVL_254473'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            dataRow: gridRowSelectingEventArgs.rowData

        };
        nav.registerView('G_RATERANEGE_251502');
    } else {
        // gridRowSelectingEventArgs.commons.api.viewState.label("G_RATERANEGE_251502", "Ejemplo Etiqueta sin traducir", false);
        nav.address = {
            moduleId: 'ASSTS',
            subModuleId: 'MNTNN',
            taskId: 'T_ASSTSWJQZCYYQ_887',
            taskVersion: '1.0.0',
            viewContainerId: 'VC_TWORANGESS_307887'
        };
        nav.queryParameters = {
            mode: 2
        };
        nav.customDialogParameters = {
            dataRow: gridRowSelectingEventArgs.rowData

        };
        nav.registerView('G_RATERANEGE_251502');
    }


};
