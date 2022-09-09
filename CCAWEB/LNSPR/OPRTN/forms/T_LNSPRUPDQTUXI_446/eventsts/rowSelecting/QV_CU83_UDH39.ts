
//gridRowSelecting QueryView: QV_CU83_UDH39
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_CU83_UDH39 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;

    let identificador: any = gridRowSelectingEventArgs.rowData.identificador;
    let nav: any = gridRowSelectingEventArgs.commons.api.navigation;
    let option: any = nav.getCustomDialogParameters().param;

    if (option == 1) {
        nav.closeModal({referencial: identificador, param: 1});
    } else {
        nav.closeModal({referencial: identificador});    
    }
};




