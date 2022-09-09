task.gridInitColumnTemplate.QV_3105_20065 = function (idColumn) {
    /*if (idColumn === 'item') {
        return "<input type=\'checkbox\' ng-model='dataItem.item' name=\'item\' id=\'VA_TEXTINPUTBOXDUI_728334\' #if (item) {# checked #}else{# unchecked #} # />";
    }*/



    if (idColumn === 'item') {
        return "<input name='item' type='checkbox' value='#=item#' #=item?checked='checked':''# data-bind='value:item' ng-click='vc.grids.QV_3105_20065.events.customRowClick($event,\"VA_TEXTINPUTBOXDUI_728334\",\"PrintingDocuments\",\"QV_3105_20065\")'/>";

    }

};