//gridRowSelecting QueryView: QV_QV37_LCP47
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        task.gridRowSelecting.QV_QV37_LCP47 = function (entities,gridRowSelectingEventArgs) {
            gridRowSelectingEventArgs.commons.execServer = false;
            
        };