


// (Button) 
task.executeCommand.VA_VABUTTONXCGGMOI_839221 = function(  entities, executeCommandEventArgs ) {
    //se ejecuta la pantalla desde update
    var execServer = true;
    let porcentajeTotalGrid = 0;
    let countAdministrator = 0;

    if (stateCreateUpdate === 'P') {
        //Valida el campo monto debe ser mayor a cero
        if (!entities.OperationEntity.amount || entities.OperationEntity.amount <= 0) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELMONTOOE_93388", false, null, timer);
            execServer = false;
        }
        //Valida la lista el cliente ingresado.
        if (execServer && entities.OperationCRUDFormEntity.code) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_AADAALARD_86290", false, null, timer);
            execServer = false;
        }
        //Validaexistir por lo menos un cliente principal.
        if (execServer) {
            var mainDebtor = true;
            for (var idx = 0; idx < entities.DebtorEntity._data.length; idx++) {
                if (entities.DebtorEntity._data[idx].role === 'D') {
                    mainDebtor = false;
                }
            }
            if (execServer && mainDebtor) {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEEXIRI_69031", false, null, timer);
                execServer = false;
            }
        }
        //Valida El número de la obligación es obligatorio
        if (execServer && entities.OperationEntity.classOperation === 'R' && !entities.OperationEntity.previousNumber) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ELNMEROCB_51300", false, null, timer); 
            execServer = false;
        }
        //Valida la alicuota 1 (Certificados) y sino debe ingresar la alicuota 2 (Ahorros)
        if (execServer && (entities.OperationEntity.doubleAliquot && entities.OperationEntity.doubleAliquot === 'S')) {
            if (!entities.OperationEntity.aliquota1) {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEINGAT_13902", false, null, timer);
                execServer = false;
            } else if (!entities.OperationEntity.aliquota2) {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEINGSR_39231", false, null, timer);
                execServer = false;
            }
        }
        //Valida la alicuota 1 (Certificados)
        if (execServer && (entities.OperationEntity.doubleAliquot && entities.OperationEntity.doubleAliquot === 'N')) {
            if (!entities.OperationEntity.aliquota1) {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_DEBEINGAT_13902", false, null, timer);
                execServer = false;
            }
        }
        //Validaciones Sindicados
        if (execServer && entities.OperationEntity.syndicated && !entities.OperationEntity.typeSyndicated) {

                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_TIPODESRE_41966", false, null, timer);
                execServer = false;

        }

        if (execServer && (entities.SyndicatedList.data().length == 0 && entities.OperationEntity.syndicated && entities.OperationEntity.typeSyndicated)) {
            executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_PARTICIIA_96996", false, null, timer);
            execServer = false;
        } else if (execServer && entities.SyndicatedList.data().length > 0) {
            for (let i = 0; i < entities.SyndicatedList.data().length; i++) {
                porcentajeTotalGrid = porcentajeTotalGrid + entities.SyndicatedList.data()[i].percentageParticipants
                if (entities.SyndicatedList.data()[i].roleP === 'A') {
                    countAdministrator = countAdministrator + 1;
                }
            }

            if (porcentajeTotalGrid > 100) {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_NOEXCEDER_58370", false, null, timer);
                execServer = false;
            }
            if (countAdministrator === 0 && entities.OperationEntity.typeSyndicated == 'A') {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_ROLADMIRR_22323", false, null, timer);
                execServer = false;
            }

        }

        //Valida La fecha de creación debe ser menor o igual a la fecha de proceso
        if (execServer) {
            //var dateProccess = new Date(2020,4,5);//desarrollo
            var dateProccess = new Date(cobis.containerScope.preferences.processDate);
            entities.OperationEntity.creationDate.setMilliseconds(0);
            if (entities.OperationEntity.creationDate.getTime() > dateProccess.getTime()) {
                executeCommandEventArgs.commons.messageHandler.showMessagesInformation("LNSPR.MSG_LNSPR_LAFECHALA_93688", false, null, timer);
                execServer = false;
            }
        }
        //Para al Realizarlo no volve a crear otro
        if (execServer) {
            stateCreateUpdate = 'V';
        }
    }

    
    executeCommandEventArgs.commons.serverParameters.Loan = true;
    
    executeCommandEventArgs.commons.serverParameters.GenericEntity = true;
    executeCommandEventArgs.commons.serverParameters.CreateOperationOne = true;
    executeCommandEventArgs.commons.serverParameters.CreateOperationTwo = true;
    executeCommandEventArgs.commons.serverParameters.AmortizationFormEntity = true;//Datos Amortización
    executeCommandEventArgs.commons.serverParameters.GeneralParametersQuery = true;

    executeCommandEventArgs.commons.serverParameters.AmortizationTitleEntity = true; 
    executeCommandEventArgs.commons.serverParameters.AmortizationEntity = true; 

    executeCommandEventArgs.commons.serverParameters.OperationCRUDFormEntity = true;//Diseño
    executeCommandEventArgs.commons.serverParameters.DebtorEntity = true;//Diseño
    executeCommandEventArgs.commons.serverParameters.OperationEntity = true;//Diseño

    executeCommandEventArgs.commons.execServer = execServer;
    //executeCommandEventArgs.commons.serverParameters. = true;
};