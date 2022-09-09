//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: SyndicatedListForm
task.initData.VC_SYNDICATDI_660858 = function (entities, initDataEventArgs) {

    entities.OperationEntity.amount = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().amount;
    entities.OperationEntity.typeSyndicated = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().typeSindicated;

    if (initDataEventArgs.commons.api.navigation.getCustomDialogParameters().typeSindicated == 'G') {
        entities.OperationEntity.amountParticipants = initDataEventArgs.commons.api.navigation.getCustomDialogParameters().amount;
        entities.OperationEntity.percentageParticipants = 100;
        entities.OperationEntity.typeParticipants = 'P';
        initDataEventArgs.commons.api.viewState.disable('VA_AMOUNTPARTICTSP_895405');
        initDataEventArgs.commons.api.viewState.disable('VA_PERCENTAGEPAISA_378405');
        initDataEventArgs.commons.api.viewState.disable('VA_AMOUNTNHJBKJSFP_420405');
        initDataEventArgs.commons.api.viewState.disable('VA_PERCENTAGEPAISA_378405');
        initDataEventArgs.commons.api.viewState.disable('VA_TYPEPARTICIPNNN_397405');

    } else {
        initDataEventArgs.commons.api.viewState.enable('VA_AMOUNTPARTICTSP_895405');
        initDataEventArgs.commons.api.viewState.enable('VA_PERCENTAGEPAISA_378405');
        initDataEventArgs.commons.api.viewState.disable('VA_AMOUNTNHJBKJSFP_420405');
        initDataEventArgs.commons.api.viewState.disable('VA_PERCENTAGEPAISA_378405');
    }

    initDataEventArgs.commons.execServer = true;

};
