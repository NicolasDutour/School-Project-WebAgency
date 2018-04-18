function initMap() {
        var Paris = {lat: 48.8731628, lng: 2.349824300000023};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: Paris
        });
        var marker = new google.maps.Marker({
          position: Paris,
          map: map
        });
      }
