var globalSendPings = false;
const delay = ms => new Promise(res => setTimeout(res, ms));

window.setSendPings = function (sendPings) {
    globalSendPings = sendPings;
}

const ping = async () => {
	var date = new Date();
	var datestring = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    if (globalSendPings) {
        console.log(datestring + " pinging blazor server");
        document.getElementById("keep-alive-button").click();
    }
    else {
        console.log(datestring + " not pinging blazor server");
    }

    await delay(60000);
    ping();
}

ping();
