//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: ValueDateMain
    task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {

        renderEventArgs.commons.execServer = false;
         renderEventArgs.commons.api.grid.refresh('QV_1244_89323');
    };