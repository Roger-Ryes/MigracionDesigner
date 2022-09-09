task.gridInitColumnTemplate.QV_3375_11342 = function (idColumn, gridInitColumnTemplateEventArgs) {
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
