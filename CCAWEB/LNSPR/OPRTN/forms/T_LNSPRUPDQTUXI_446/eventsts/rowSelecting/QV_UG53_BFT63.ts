//gridRowSelecting QueryView: QV_UG53_BFT63
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        task_gridRowSelecting_QV_UG53_BFT63 = (
            entities: Model,
            gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
        ) => {
            gridRowSelectingEventArgs.commons.execServer = false;
            let typeValue: any = gridRowSelectingEventArgs.rowData.typeValue;
            let nav: any = gridRowSelectingEventArgs.commons.api.navigation;
            let option: any = nav.getCustomDialogParameters().param;
            if (option == 1) {
                nav.closeModal({referencial: typeValue, param: 1});
            } else {
                nav.closeModal({referencial: typeValue});    
            }
        };