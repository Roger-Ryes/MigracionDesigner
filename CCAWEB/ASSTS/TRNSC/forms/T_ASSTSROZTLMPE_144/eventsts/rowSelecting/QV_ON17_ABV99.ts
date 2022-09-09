
//gridRowSelecting QueryView: QV_ON17_ABV99
//Se ejecuta antes de que los datos modificados en una grilla sean comprometidos.
task_gridRowSelecting_QV_ON17_ABV99 = (
     entities: Model,
     gridRowSelectingEventArgs: CobisModelGridRowSelectingEventArgs
) => {
     gridRowSelectingEventArgs.commons.execServer = false;
     let api: any = gridRowSelectingEventArgs.commons.api;

     if ( api.parentVc && (
          api.parentVc.id == 'VC_REPAYMENTT_461527' || 
          api.parentVc.id == 'VC_COMPANIECR_302580'
     )) {
          api.vc.closeModal({
               response: {
                    institution: gridRowSelectingEventArgs.rowData.institution,
                    companyName: gridRowSelectingEventArgs.rowData.companyName
               }
          });
     }
};




