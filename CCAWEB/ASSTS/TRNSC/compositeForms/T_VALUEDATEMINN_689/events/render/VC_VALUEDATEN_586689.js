//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: ValueDateMain
    task.render = function (entities, renderEventArgs){

        renderEventArgs.commons.execServer = false;
         renderEventArgs.commons.api.grid.refresh('QV_1244_89323');
    };