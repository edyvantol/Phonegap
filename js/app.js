(function () {
	"use strict";
	//wachten tot het device klaar is
	document.addEventListener("deviceready", deviceInit, false);
	window.addEventListener("batterystatus", onBatteryStatus, false);

	function deviceInit() {
		// Lees de device informatie en plaats in de juiste div als deze bestaat
		if ($("#device-info").length) {
			$("#device-info").html(getDeviceInfo());
		}
	}

	function getDeviceInfo() {
		var info = "Cordova versie: " + device.cordova + "<br>" +
			"Model: " + device.model + "<br>" +
			"Platform: " + device.platform + "<br>" +
			"UUID: " + device.uuid + "<br>" +
			"OS versie: " + device.version + "<br>" +
			"Fabrikant: " + device.manufacturer + "<br>" +
			"Serienummer: " + device.serial + "<br>" +
			"Is virtueel: " + device.isVirtual;

		return info;
	}

	function onBatteryStatus(status) {
		//Update de batterijstatus (als deze bestaat)
		if ($("#battery-status").length) {
			//lees het laadniveau
			var charge = status.level + "%";

			//lees of het device is ingeplugd
			var plugged = "?";

			if (status.isPlugged) {
				plugged = "wel";
			}else{
				plugged = "niet";
			}
			
			$("#battery-status").text("De batterij is op " + charge + " en " + plugged + " ingeplugd.");
		}
	}
}());
