
//gridRowUpdating QueryView: QV_ON17_ABV99
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task.gridRowUpdating.QV_ON17_ABV99 = function (entities,gridRowUpdatingEventArgs) {

     gridRowUpdatingEventArgs.commons.execServer = false;
     
};




