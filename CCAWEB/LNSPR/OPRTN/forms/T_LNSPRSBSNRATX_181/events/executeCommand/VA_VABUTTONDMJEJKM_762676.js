// (Button) 
task.executeCommand.VA_VABUTTONDMJEJKM_762676 = function (entities, executeCommandEventArgs) {

    executeCommandEventArgs.commons.execServer = false;
    entities.ProductLineDistribution.product = null;
    entities.ProductLineDistribution.clientCod = null;
    entities.ProductLineDistribution.opTypePas = null;
    entities.ProductLineDistribution.opTypeAc = null;
    entities.ProductLineDistribution.currency = null;
    entities.ProductLineDistribution.amount = null;
    entities.ProductLineDistribution.controlsAmount = false;
    entities.ProductLineDistribution.observations = null;
    entities.ProductLineDistribution.used = 0;
    entities.ProductLineDistribution.available = 0;

    executeCommandEventArgs.commons.api.viewState.enable('VA_PRODUCTWKWZPDFA_211676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_CLIENTCODHNEWWJ_288676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_OPTYPEPASINULZZ_450676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_OPTYPEACPEUXTGS_100676');
    executeCommandEventArgs.commons.api.viewState.enable('VA_CURRENCYIMFFWXD_243676');

    entities.ProductLineDistribution.editionMode = executeCommandEventArgs.commons.constants.mode.Insert;


};
