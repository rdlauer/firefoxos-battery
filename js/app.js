document.querySelector('#btn-show-status').addEventListener('click', function () {
    document.querySelector('#battery-status').className = 'current';
    document.querySelector('[data-position="current"]').className = 'left';
     var battery = navigator.battery; 
    if (battery) {
        var batteryLevel = Math.round(battery.level * 100) + "%";
        var charging = (battery.charging) ? "Yes" : "No";         var chargingTime = parseInt(battery.chargingTime / 60, 10);         var dischargingTime = parseInt(battery.dischargingTime / 60, 10);

        document.querySelector('#battery-level').textContent = batteryLevel;
        document.querySelector('#battery-charging').textContent = charging;
        document.querySelector('#battery-time-charge').textContent = chargingTime;
        document.querySelector('#battery-time-discharge').textContent = dischargingTime;     }
});

document.querySelector('#btn-back').addEventListener('click', function () {
    document.querySelector('#battery-status').className = 'right';
    document.querySelector('[data-position="current"]').className = 'current';
});