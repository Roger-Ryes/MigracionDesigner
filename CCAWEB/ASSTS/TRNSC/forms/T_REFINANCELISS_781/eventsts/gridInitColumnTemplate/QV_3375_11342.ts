//designer-hint: 2304: Cannot find name 'task_gridInitColumnTemplate_QV_3375_11342'.
task_gridInitColumnTemplate_QV_3375_11342 = (
    idColumn: any,
    //designer-hint: 2304: Cannot find name 'CobisModelGridInitColumnTemplateEventArgs'.
    //designer-hint: 6133: 'gridInitColumnTemplateEventArgs' is declared but its value is never read.
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
) => {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "#=nombreColumna#" ;
    //}

    /* if (idColumn === 'selected') {
         return "<div><input type='checkbox' ng-click='vc.grids.QV_3375_11342.events.customRowClick($event,\"VA_CHECKBOXKZZRISM_582515\",\"RefinanceLoans\",\"QV_3375_11342\")' /></div>";

     }*/

    if (idColumn === 'selected') {
        return "<input name='selected' type='checkbox' value='#=selected#' #=selected?checked='checked':''# data-bind='value:uno' ng-click='vc.grids.QV_3375_11342.events.customRowClick($event,\"VA_CHECKBOXKZZRISM_582515\",\"EntidadPadre\",\"QV_3375_11342\")'/>";

    }
};
