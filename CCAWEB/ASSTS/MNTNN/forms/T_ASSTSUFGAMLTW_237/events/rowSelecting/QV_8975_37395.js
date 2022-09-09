
//gridRowSelecting QueryView: QV_8975_37395
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_8975_37395 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;
     var api = gridRowSelectingEventArgs.commons.api;


     api.vc.closeModal({
            result: {
                participanteSindicado: gridRowSelectingEventArgs.rowData.fundId,
                nombreParticipante: gridRowSelectingEventArgs.rowData.fundName
            }
        });

};




