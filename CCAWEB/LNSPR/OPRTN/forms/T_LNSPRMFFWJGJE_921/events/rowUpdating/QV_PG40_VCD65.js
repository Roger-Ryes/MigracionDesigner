//gridRowUpdating QueryView: QV_PG40_VCD65
        //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
        task.gridRowUpdating.QV_PG40_VCD65 = function (entities,gridRowUpdatingEventArgs) {
            gridRowUpdatingEventArgs.commons.execServer = false;
            
        };