
    
//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: DeferredItemsForm
task.render = function (entities, renderEventArgs){
    var viewState = renderEventArgs.commons.api.viewState;
    var DeferredList = entities.DeferredItemsList;
    
    //botón imprimir
    if(DeferredList && DeferredList.data().length > 0){
          viewState.show('VA_VABUTTONJVWDERX_391268');  
    }else{
          viewState.hide('VA_VABUTTONJVWDERX_391268');        
    }
    
    renderEventArgs.commons.execServer = false;

};