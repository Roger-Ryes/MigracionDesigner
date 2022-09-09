//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: LoanSearchForm
    task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
        renderEventArgs.commons.execServer = false;
        
    entities.LoanSearchFilter.group = entities.LoanSearchFilter.group ? entities.LoanSearchFilter.group : 'N';

    };