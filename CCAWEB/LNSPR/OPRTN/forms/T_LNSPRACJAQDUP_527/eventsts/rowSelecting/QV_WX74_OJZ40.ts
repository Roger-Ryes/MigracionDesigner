
//gridRowSelecting QueryView: QV_WX74_OJZ40
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_WX74_OJZ40 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
     gridRowSelectingEventArgs.commons.args.mode = gridRowSelectingEventArgs.commons.constants.mode.Update
     gridRowSelectingEventArgs.commons.execServer = true;
};




