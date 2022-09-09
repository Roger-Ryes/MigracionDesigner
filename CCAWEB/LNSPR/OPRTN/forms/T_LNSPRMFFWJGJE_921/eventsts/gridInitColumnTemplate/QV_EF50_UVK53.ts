task_gridInitColumnTemplate_QV_EF50_UVK53 = (
  idColumn: any,
  gridInitColumnTemplateEventArgs: CobisModelGridInitColumnTemplateEventArgs
) => {
        if(idColumn === 'seleccion'){
          return "<div><input type='checkbox' value='#=seleccion#' #=seleccion?checked='checked':''# data-bind='value:seleccion'  ng-click='vc.change(null,\"VA_SELECCIONBGDZXY_881423\",this.dataItem,\"seleccion\", $event)' /></div>";
        }
    };