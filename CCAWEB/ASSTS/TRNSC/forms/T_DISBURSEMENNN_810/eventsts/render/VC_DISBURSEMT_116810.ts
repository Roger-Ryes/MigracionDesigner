//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: DisbursementForm
    //designer-hint: 2304: Cannot find name 'task_render'.
    //designer-hint: 2304: Cannot find name 'Model'.
    //designer-hint: 2304: Cannot find name 'CobisModelRenderEventArgs'.
    //designer-hint: 6133: 'entities' is declared but its value is never read.
    task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
        renderEventArgs.commons.execServer = false;
        
    };