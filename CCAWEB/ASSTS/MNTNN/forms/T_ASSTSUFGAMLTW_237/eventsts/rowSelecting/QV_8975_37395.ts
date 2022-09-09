
//gridRowSelecting QueryView: QV_8975_37395
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_8975_37395 = (
    entities: Model,
    gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
    gridRowSelectingEventArgs.commons.execServer = false;
    let api: any = gridRowSelectingEventArgs.commons.api;


    api.vc.closeModal({
           result: {
               participanteSindicado: gridRowSelectingEventArgs.rowData.fundId,
               nombreParticipante: gridRowSelectingEventArgs.rowData.fundName
           }
       });
};




