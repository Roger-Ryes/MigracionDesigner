//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
    //ViewContainer: LoanStatusChangeMain
    task.render = function (entities, renderEventArgs){
        renderEventArgs.commons.execServer = false;
    Amortization.CapitalBalance(entities.Amortization.data());


    };