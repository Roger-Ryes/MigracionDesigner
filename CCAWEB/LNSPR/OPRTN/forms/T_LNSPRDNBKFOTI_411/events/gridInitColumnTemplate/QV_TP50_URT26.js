
task.gridInitColumnTemplate.QV_TP50_URT26 = function (idColumn, gridInitColumnTemplateEventArgs) {
    if(idColumn === 'seleccion'){
        return "<input name='seleccion' type='checkbox' value='#=seleccion#' #=seleccion?checked='checked':''# data-bind='value:seleccion' ng-click='vc.grids.QV_TP50_URT26.events.customRowClick($event,\"VA_CHECKBOXDANDSPV_892293\",\"LoanList\",\"QV_TP50_URT26\")'/>";    
    }
};




