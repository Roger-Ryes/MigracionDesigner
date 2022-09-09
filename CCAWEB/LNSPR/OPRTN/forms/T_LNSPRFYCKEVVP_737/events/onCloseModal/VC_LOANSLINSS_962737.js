//Evento onCloseModalEvent : Evento que actua como listener cuando se cierra ventanas modales.
    //ViewContainer: LoansLines
    task.onCloseModalEvent = function (entities, onCloseModalEventArgs){
        onCloseModalEventArgs.commons.execServer = false;
    
        var clienteModal = onCloseModalEventArgs.result.selectedData;
    
    if (clienteModal) {
        entities.LoansLines.clientCode = clienteModal.code;
        entities.LoansLines.clienteDesc = clienteModal.code + " - " + clienteModal.name;
        isGroup = clienteModal.isGroup;
        }

        if (onCloseModalEventArgs.closedViewContainerId === 'VC_LOANLINECR_703328' && onCloseModalEventArgs.result.respuesta) {
            onCloseModalEventArgs.commons.api.grid.refresh('QV_AXPR_HBZ60', {
                secuencial: entities.LoansLines.secuencial
            });
        }
        
        if (onCloseModalEventArgs.closedViewContainerId === 'VC_LOANLINESS_983793' && onCloseModalEventArgs.result.respuesta) {
            entities.LoansLines.clientCode = onCloseModalEventArgs.result.clienteCodigo;
            entities.LoansLines.clienteDesc = onCloseModalEventArgs.result.clienteNombre;
            
        onCloseModalEventArgs.commons.api.grid.refresh('QV_ZTPR_WQQ92', {
            secuencial: entities.LoansLines.clientCode
        });
        }
    };