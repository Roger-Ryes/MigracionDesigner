//gridRowSelecting QueryView: QV_3009_96085
    //Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
    task_gridRowSelecting_QV_3009_96085 = (
        entities: Model,
        gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
    ) => {
        gridRowSelectingEventArgs.commons.execServer = false;

        let subModuleId: any = "",
            taskId: any = "",
            vcId: any = "",
            label: any = "",
            parameters: any = {
                menu: this.queryString.menu,
                loan: gridRowSelectingEventArgs.rowData
            };

        switch (this.queryString.menu) {

            case Constants.MENU_PROYECTINST:
                subModuleId = "MNTNN";
                taskId = "T_PROJECTIONNQI_244";
                vcId = "VC_PROJECTIIU_405244";
                label = this.cobis.translate('ASSTS.LBL_ASSTS_PROYECCNT_32454'); //Proyeccion Cuota
                break;
            case Constants.MENU_ASSTSSZCLDZTQ:
                subModuleId = "TRNSC";
                taskId = "T_ASSTSSZCLDZTQ_839";
                vcId = "VC_SIMULATEAA_568839";
                label = this.cobis.translate('ASSTS.LBL_ASSTS_SIMULACNI_30933'); //Simulacion Pag
                break;
            case Constants.MENU_DISBUSMNT_PART:
                subModuleId = "TRNSC";
                taskId = "T_ASSTSEFYTNIXU_871";
                vcId = "VC_LOANPARTIR_265871";
                label = this.cobis.translate("ASSTS.LBL_ASSTS_DESEMBOII_16677"); //"Desembolso Parcial";
                break;
            case Constants.MENU_SIM_REAJ:
                subModuleId = "TRNSC"; //Transactions
                taskId = "T_ASSTSPENVMXNQ_619"; //id FormSimple a cargar
                vcId = "VC_PROJECTIRJ_862619"; //Container
                label = this.cobis.translate("ASSTS.LBL_ASSTS_SIMULACJS_15300"); //"Simulación Reajuste";
                break;
        }
        Navigation.taskRedirect(subModuleId, taskId, vcId, label, gridRowSelectingEventArgs, parameters);
    };