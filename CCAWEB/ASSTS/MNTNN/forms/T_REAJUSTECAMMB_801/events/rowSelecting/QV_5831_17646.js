
//gridRowSelecting QueryView: QV_5831_17646
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowSelecting.QV_5831_17646 = function (entities,gridRowSelectingEventArgs) {

     gridRowSelectingEventArgs.commons.execServer = false;
     //gridRowSelectingEventArgs.commons.serverParameters.ReadjustmentLoanCab = true;

};




