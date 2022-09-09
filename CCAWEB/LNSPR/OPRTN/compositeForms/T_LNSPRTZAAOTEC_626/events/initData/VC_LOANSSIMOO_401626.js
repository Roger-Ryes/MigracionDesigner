
     
//Evento initData : Inicialización de datos del formulario, después de este evento se realiza el seguimiento de cambios en los datos
//ViewContainer: LoansSimulationForm
task.initData.VC_LOANSSIMOO_401626 = function (entities, initDataEventArgs){

    var viewState = initDataEventArgs.commons.api.viewState;
    var nav = initDataEventArgs.commons.api.navigation;
    var grid = initDataEventArgs.commons.api.grid;
     //Beneficio interes
     viewState.disable('VA_4223IMHHOSVYCXY_300309');
    
    //OCULTAR TABS
    //viewState.hide('VC_MWEGHJFEQQ_170626');// información General
    viewState.hide('VC_FUAFKEKXSW_812626');// Rubros
    viewState.hide('VC_TPJGHFAFBF_762626');// Parámetros generales
    viewState.hide('VC_GIMALDPDEW_251626');// Amortización
    //Préstamos Sindicados
    initDataEventArgs.commons.api.vc.viewState.G_OPERATIALO_494221.visible = false;
    initDataEventArgs.commons.api.viewState.hide('VA_TYPESYNDICATEEE_795221');
    initDataEventArgs.commons.api.viewState.hide('VA_SYNDICATEDMLJZC_821221');


    funcionality = Utils.IsNullOrEmpty(getQueryStrings().funcionality)?'SCO':getQueryStrings().funcionality;
    
    //entities.OperationEntity.processDate = new Date(2020,4,5);//desarrollo
    entities.OperationEntity.processDate = new Date(cobis.containerScope.preferences.processDate);
    entities.OperationEntity.sector = 1;
    entities.OperationEntity.functionality = funcionality;
    //entities.OperationEntity.amount = 0; //supr 0.0
    //entities.OperationEntity.amountApproved = 0; //supr 0.0
    //entities.OperationEntity.creationDate = new Date(2020,4,5);//desarrollo
    entities.OperationEntity.creationDate = new Date(cobis.containerScope.preferences.processDate);
    entities.OperationEntity.doubleAliquot = 'E';
    entities.AmortizationFormEntity.baseInterestCalculation = 'E'; 
    
    initDataEventArgs.commons.execServer = false;

    viewState.disable('CM_TLNSPRMB_TRO');//T_LNSPRMBVLAOGA_193 = Commando//Transmitir

    //Ocultar Adicional
    viewState.hide('VA_CODEWKXBYDDSGNQ_399221');// Información General - Cod.Cliente
    viewState.show('VA_FULLNAMENVMNPEV_901221');// Información General - Nombre Cliente
    viewState.enable('VA_FULLNAMENVMNPEV_901221');// Información General - Nombre Cliente
    viewState.readOnly('VA_FULLNAMENVMNPEV_901221', false);// Información General - Nombre Cliente
   // viewState.disable('VA_AMOUNTAPPROVEDE_512221');//Monto Aprobado

    viewState.hide('VA_ROLEGMHNCTPDKZE_265221');// Información General - Deudor Principal

    viewState.hide('CM_TLNSPRTZ_RRO');//Commando Finalizar
};