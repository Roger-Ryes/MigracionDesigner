//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
//ViewContainer: SyndicatedListForm
task.onCloseModalEvent = function (entities, onCloseModalEventArgs) {

    onCloseModalEventArgs.commons.execServer = false;
    entities.OperationEntity.participantS = onCloseModalEventArgs.result.result.participanteSindicado + "   " + onCloseModalEventArgs.result.result.nombreParticipante;
    entities.OperationEntity.selectedParticipants = onCloseModalEventArgs.result.result.participanteSindicado;



};
