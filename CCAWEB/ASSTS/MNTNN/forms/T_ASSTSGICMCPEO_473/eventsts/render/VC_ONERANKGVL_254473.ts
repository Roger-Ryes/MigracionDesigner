//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: OneRankForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;
    let title1: any = this.dataRow.title1 + " Min";
    let title2: any = this.dataRow.title1 + " Max";
    let title3: any = this.dataRow.result2;

    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "minValue", title1, false);
    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "maxValue", title2, false);
    renderEventArgs.commons.api.grid.title("QV_SK42_AAN67", "value", title3, false);


    switch (this.dataRow.dataType1) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'minValue', '####', 0);
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'maxValue', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'minValue', '#,######0.000000', 6);
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'maxValue', '#,######0.000000', 6);
            break;
        default:
            // code block
    }


    switch (this.dataRow.dataTypeR2) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'value', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_SK42_AAN67', 'value', '#,######0.000000', 6);
            break;
        default:
            // code block
    }
};
