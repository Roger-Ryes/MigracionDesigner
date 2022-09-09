
//gridRowSelecting QueryView: QV_5831_17646
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_5831_17646 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {

     gridRowSelectingEventArgs.commons.execServer = false;
     //gridRowSelectingEventArgs.commons.serverParameters.ReadjustmentLoanCab = true;

};




