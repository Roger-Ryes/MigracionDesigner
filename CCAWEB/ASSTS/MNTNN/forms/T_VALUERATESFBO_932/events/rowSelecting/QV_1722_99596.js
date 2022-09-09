//gridRowSelecting QueryView: QV_1722_99596
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task.gridRowSelecting.QV_1722_99596 = function (entities, gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.api.grid.showToolBarButton('QV_5693_54772', 'create');
    id = gridRowSelectingEventArgs.rowData.identifier;
    clase = gridRowSelectingEventArgs.rowData.clase;
        gridRowSelectingEventArgs.commons.execServer = false;
    gridRowSelectingEventArgs.commons.api.grid.refresh('QV_5693_54772');
    /*var nav = gridRowSelectingEventArgs.commons.api.navigation;
        entities.ServerParameter.selectedRow = gridRowSelectingEventArgs.rowIndex;
        if (entities.ServerParameter.flag == false || entities.ServerParameter.flag == null) {
            entities.ServerParameter.flag = true;
        } else {
            entities.ServerParameter.flag = false;
        }
        //gridRowSelectingEventArgs.commons.serverParameters.TypeRates = true;
        
        nav.customDialogParameters = {
            ratesT: entities.TypeRates
    };*/
        

    };