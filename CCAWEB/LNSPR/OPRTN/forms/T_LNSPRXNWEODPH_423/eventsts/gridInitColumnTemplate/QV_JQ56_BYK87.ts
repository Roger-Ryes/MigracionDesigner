task_gridInitColumnTemplate_QV_JQ56_BYK87 = (
    idColumn: any,
    gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
) => {

    if (idColumn === 'selected') {
        return "<input name='selected' type='checkbox' value='#=selected#' #=selected?checked='checked':''# data-bind='value:selected' ng-click='vc.grids.QV_JQ56_BYK87.events.customRowClick($event,\"VA_CHECKBOXGIYYTMJ_813800\",\"OfficialOfficeTransferList\",\"QV_JQ56_BYK87\")'/>";

    }

};
