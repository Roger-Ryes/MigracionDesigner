//Start signature to Callback event to VC_SYNDICATDI_660858
task.initDataCallback.VC_SYNDICATDI_660858 = function (entities, initDataCallbackEventArgs) {

    let parameters = initDataCallbackEventArgs.commons.api.navigation.getCustomDialogParameters();
    document.getElementById('VA_PARTICIPANTSTOP_981405').readOnly = true
    

    if (initDataCallbackEventArgs.commons.api.navigation.getCustomDialogParameters().typeSindicated == 'G') {
        entities.OperationEntity.participantS = entities.OperationEntity.codBank + "      " + entities.OperationEntity.nameBank;
        entities.OperationEntity.selectedParticipants = entities.OperationEntity.codBank;
 
    }
    
    
    if (parameters.gridPercentajeTotal===100){
        entities.OperationEntity.amountParticipants = 0;
        entities.OperationEntity.percentageParticipants = 0;
    }


};
