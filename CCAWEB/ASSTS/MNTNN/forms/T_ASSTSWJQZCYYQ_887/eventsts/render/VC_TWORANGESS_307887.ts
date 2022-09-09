//Evento render : Se ejecuta antes de renderizar un control, permite realizar personalizaciones visuales
//ViewContainer: TwoRangesForm
task_render = (entities: Model, renderEventArgs: CobisModelRenderEventArgs) => {
    renderEventArgs.commons.execServer = false;

    let title1: any = this.dataRow.title1 + " Min";
    let title2: any = this.dataRow.title1 + " Max";
    let title3: any = this.dataRow.title2 + " Min";
    let title4: any = this.dataRow.title2 + " Max";
    let title5: any = this.dataRow.result2;

    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "minValue1", title1, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "maxValue1", title2, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "minValue2", title3, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "maxValue2", title4, false);
    renderEventArgs.commons.api.grid.title("QV_TJ88_MTX55", "variable", title5, false);



    switch (this.dataRow.dataType1) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue1', '####', 0);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue1', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue1', '#,######0.000000', 6);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue1', '#,######0.000000', 6);
            break;
        default:
            // code block
    }

    switch (this.dataRow.dataType2) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue2', '####', 0);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue2', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'minValue2', '#,######0.000000', 6);
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'maxValue2', '#,######0.000000', 6);
            break;
        default:
            // code block
    }



    switch (this.dataRow.dataTypeR2) {
        case 'I':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '####', 0);
            break;
        case 'F':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '#,######0.000000', 6);
            break;
        case 'M':
            renderEventArgs.commons.api.grid.format('QV_TJ88_MTX55', 'variable', '#,##0.00', 2);
            break;
        default:
            // code block
    }
};
