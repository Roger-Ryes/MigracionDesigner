

//Entity: OperationItemsList
//OperationItemsList.reference (DropDownList) View: ModalOperationItems
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_REFERENCESIEQUP_560800 = function(  entities, changedEventArgs ) {

    if(changedEventArgs.newValue){
           changedEventArgs.commons.execServer = true;
    }else{
           changedEventArgs.commons.execServer = false;
    }
 
    //changedEventArgs.commons.serverParameters.OperationItemsList = true;

};