//Start signature to Callback event to Q_OPEREEOA_SH40
task.executeQueryCallback.Q_OPEREEOA_SH40 = function (entities, executeQueryCallbackEventArgs) {
    var opType;
    if (executeQueryCallbackEventArgs.commons.api.vc.mode == executeQueryCallbackEventArgs.commons.constants.mode.Update) {
        for (let i = 0; i < entities.ProductLineDistributionList.data().length; i++) {
            if (entities.ProductLineDistribution.sequential == entities.ProductLineDistributionList.data()[i].sequential) {
                opType = entities.ProductLineDistributionList.data()[i].opType;
                break;
            }
        }
        if (executeQueryCallbackEventArgs.commons.api.vc.model.ProductLineDistribution.nature == "A") {
            entities.ProductLineDistribution.opTypeAc = opType;
        } else {
            entities.ProductLineDistribution.opTypePas = opType;
        }
    }
};
