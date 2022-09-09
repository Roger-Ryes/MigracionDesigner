//gridRowSelecting QueryView: QV_UG53_BFT63
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        task.gridRowSelecting.QV_UG53_BFT63 = function (entities,gridRowSelectingEventArgs) {
            gridRowSelectingEventArgs.commons.execServer = false;
            var typeValue = gridRowSelectingEventArgs.rowData.typeValue;
            var nav = gridRowSelectingEventArgs.commons.api.navigation; 

            var option = nav.getCustomDialogParameters().param;
            if (option == 1) {
                nav.closeModal({referencial: typeValue, param: 1});
            } else {
                nav.closeModal({referencial: typeValue});    
            }
        };