
task.gridInitColumnTemplate.QV_PG40_VCD65 = function (idColumn, gridInitColumnTemplateEventArgs) {
    if(idColumn === 'seleccion'){
        return "<input name='seleccion' type='checkbox' value='#=seleccion#' #=seleccion?checked='checked':''# data-bind='value:seleccion' ng-click='vc.grids.QV_PG40_VCD65.events.customRowClick($event,\"VA_CHECKBOXYLXHRAO_645423\",\"ReadjustmenMList\",\"QV_PG40_VCD65\")'/>";    
    }
};