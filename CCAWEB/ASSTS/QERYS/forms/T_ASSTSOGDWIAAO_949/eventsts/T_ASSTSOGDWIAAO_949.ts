//"TaskId": "T_ASSTSOGDWIAAO_949"
//designer-hint: 2304: Cannot find name 'getParams'.
getParams = () => {
    let url: any = "", urlParams: any = {};

    if (this.cobis.container.tabs.getCurrentTab()) {
        url = this.cobis.container.tabs.getCurrentTab().url;
    } else {
        url = location.href;
    }

    if (url.split('?').length > 1) {
        url.split('?')[1].split('&').forEach((paramString: any) => {
            urlParams[paramString.split('=')[0]] = paramString.split('=')[1];
        })
    }
    return urlParams;
}
