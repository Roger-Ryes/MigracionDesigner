//"TaskId": "T_ASSTSOGDWIAAO_949"
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
