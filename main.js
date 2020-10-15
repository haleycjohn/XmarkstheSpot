function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCfhWSCMcsHUGUNoO2W5KnhhD4m7-It2-k&callback=myMap"
