

//Entity: RateRangeList
//RateRangeList.rank (DropDownList) View: RateRangeForm
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_TEXTINPUTBOXEGT_745502 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    if (changedEventArgs.newValue == 1) {
        changedEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'title2');
        changedEventArgs.commons.api.grid.disabledColumn('QV_MD41_JYZ75', 'dataType2');
    }else{
        changedEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'title2');
        changedEventArgs.commons.api.grid.enabledColumn('QV_MD41_JYZ75', 'dataType2');
    }

};