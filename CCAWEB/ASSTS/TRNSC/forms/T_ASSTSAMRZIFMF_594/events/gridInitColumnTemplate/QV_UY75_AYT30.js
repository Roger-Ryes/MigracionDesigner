task.gridInitColumnTemplate.QV_UY75_AYT30 = function (idColumn, gridInitColumnTemplateEventArgs) {
    //if(idColumn === 'NombreColumna'){
    //  return "<span></span>";
    //}
    //if(idColumn === 'NombreColumna'){
    //  return  "#=nombreColumna#" ;
    //}


    if (idColumn === 'finalOp') {
        return "<input name='finalOp' type='checkbox' value='#=finalOp#' #=finalOp?checked='checked':''# data-bind='value:finalOp' ng-click='vc.grids.QV_UY75_AYT30.events.customRowClick($event,\"VA_CHECKBOXWFQPYPQ_909701\",\"EntidadPadre\",\"QV_UY75_AYT30\")'/>";

    }

    if (idColumn === 'reest') {
        return "<input name='reest' type='checkbox' value='#=reest#' #=reest?checked='checked':''# data-bind='value:reest' ng-click='vc.grids.QV_UY75_AYT30.events.customRowClick($event,\"VA_CHECKBOXVYTZVCZ_150701\",\"EntidadPadre\",\"QV_UY75_AYT30\")'/>";

    }
};
