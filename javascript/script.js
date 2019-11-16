let map = L.map('mapid').setView([37.368237, -93.00021], 3.5);


L.tileLayer('https://api.mapbox.com/styles/v1/goergenbe/ck2xhxwkm0lda1cnquclelupo/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ29lcmdlbmJlIiwiYSI6ImNrMnhocWZhNDAwbmwzY3FsMHFyaDJ1NWQifQ.Y789KKhA8-utLMhl9BuWEA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18
}).addTo(map);

for ( let i = 0; i < places.length; i++ ) {
  L.marker ( [ places[i].lat, places[i].long ] )
  .bindPopup( '<h3>' + places[i].cityName + '</h3>' + places[i].descrip )
  .addTo( map );
}
