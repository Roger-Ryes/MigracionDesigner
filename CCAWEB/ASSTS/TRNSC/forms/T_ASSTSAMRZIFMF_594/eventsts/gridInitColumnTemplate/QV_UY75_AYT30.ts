//designer-hint: 2304: Cannot find name 'task_gridInitColumnTemplate_QV_UY75_AYT30'.
task_gridInitColumnTemplate_QV_UY75_AYT30 = (
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


    if (idColumn === 'finalOp') {
        return "<input name='finalOp' type='checkbox' value='#=finalOp#' #=finalOp?checked='checked':''# data-bind='value:finalOp' ng-click='vc.grids.QV_UY75_AYT30.events.customRowClick($event,\"VA_CHECKBOXWFQPYPQ_909701\",\"EntidadPadre\",\"QV_UY75_AYT30\")'/>";

    }

    if (idColumn === 'reest') {
        return "<input name='reest' type='checkbox' value='#=reest#' #=reest?checked='checked':''# data-bind='value:reest' ng-click='vc.grids.QV_UY75_AYT30.events.customRowClick($event,\"VA_CHECKBOXVYTZVCZ_150701\",\"EntidadPadre\",\"QV_UY75_AYT30\")'/>";

    }
};
