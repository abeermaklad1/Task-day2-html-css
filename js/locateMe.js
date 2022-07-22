
var loc=navigator.geolocation.watchPosition(function (pos) {
    initMap({ lat: pos.coords.latitude, lng: pos.coords.longitude })

})


let map;

function initMap(position) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: position,
        zoom: 10,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: position,
        map: map,
    });

}