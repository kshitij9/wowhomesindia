function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.031 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;

const productsList = document.querySelector('#productsList');

productsList.addEventListener('click', (event) => {
    sessionStorage.setItem('selectedProduct', event.target.id);
    let hostname = location.href;
    const a = hostname.split('/');
    a.splice(a.length - 1);
    hostname = a.join('/');

    window.location = `${hostname}/sproduct.html`;
});


