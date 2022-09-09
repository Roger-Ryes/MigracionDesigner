//gridRowSelecting QueryView: QV_3009_96085
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task.gridRowSelecting.QV_3009_96085 = function (entities, gridRowSelectingEventArgs) {

    gridRowSelectingEventArgs.commons.execServer = false;

    var subModuleId = "",
        taskId = "",
        vcId = "",
        label = "",
        parameters = {
            menu: queryString.menu,
            loan: gridRowSelectingEventArgs.rowData
        };

    switch (queryString.menu) {

        case Constants.MENU_PROYECTINST:
            subModuleId = "MNTNN";
            taskId = "T_PROJECTIONNQI_244";
            vcId = "VC_PROJECTIIU_405244";
            label = cobis.translate('ASSTS.LBL_ASSTS_PROYECCNT_32454'); //Proyeccion Cuota
            break;
        case Constants.MENU_ASSTSSZCLDZTQ:
            subModuleId = "TRNSC";
            taskId = "T_ASSTSSZCLDZTQ_839";
            vcId = "VC_SIMULATEAA_568839";
            label = cobis.translate('ASSTS.LBL_ASSTS_SIMULACNI_30933'); //Simulacion Pag
            break;
        case Constants.MENU_DISBUSMNT_PART:
            subModuleId = "TRNSC";
            taskId = "T_ASSTSEFYTNIXU_871";
            vcId = "VC_LOANPARTIR_265871";
            label = cobis.translate("ASSTS.LBL_ASSTS_DESEMBOII_16677"); //"Desembolso Parcial";
            break;
        case Constants.MENU_SIM_REAJ:
            subModuleId = "TRNSC"; //Transactions
            taskId = "T_ASSTSPENVMXNQ_619"; //id FormSimple a cargar
            vcId = "VC_PROJECTIRJ_862619"; //Container
            label = cobis.translate("ASSTS.LBL_ASSTS_SIMULACJS_15300"); //"Simulación Reajuste";
            break;
    }
    Navigation.taskRedirect(subModuleId, taskId, vcId, label, gridRowSelectingEventArgs, parameters);


    };