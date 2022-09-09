
//gridRowSelecting QueryView: QV_CU83_UDH39
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_CU83_UDH39 = function (entities,gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;
    
    var identificador = gridRowSelectingEventArgs.rowData.identificador;
    var nav = gridRowSelectingEventArgs.commons.api.navigation; 

    var option = nav.getCustomDialogParameters().param;
    
    if (option == 1) {
        nav.closeModal({referencial: identificador, param: 1});
    } else {
        nav.closeModal({referencial: identificador});    
    }
    
    

};




