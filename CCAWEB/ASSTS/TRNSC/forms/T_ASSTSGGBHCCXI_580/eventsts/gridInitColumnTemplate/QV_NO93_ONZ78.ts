
task_gridInitColumnTemplate_QV_NO93_ONZ78 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
) => {
    if(idColumn === 'approved'){
        return "<div><input type='checkbox' value='#=approved#' #=approved?checked='checked':''# data-bind='value:approved'  ng-click='vc.change(null,\"VA_COMBOBOXDBBXSFA_201960\",this.dataItem,\"approved\", $event)' /></div>";
    }
};
