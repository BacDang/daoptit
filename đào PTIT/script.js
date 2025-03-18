var map = L.map('map').setView([21.04321, 105.85], 10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

var places = [
    { 
        name: "Nguyễn Quang Hải", 
        lat: 21.0487, 
        lng: 105.83, 
        img: "https://via.placeholder.com/100", 
        info: "96-69-105", 
        rating: "4.5/5",
        link: "https://www.facebook.com/two0206"
    },
    { 
        name: "Nguyễn Văn Trường", 
        lat: 21.0609, 
        lng: 105.87, 
        img: "https://via.placeholder.com/100", 
        info: "100-80-104", 
        rating: "4.7/5",
        link: "https://www.facebook.com/profile.php?id=100032009926701"
    },
    { 
        name: "Mai Hoàng Minh Hải", 
        lat: 21.0609, 
        lng: 105.809, 
        img: "https://via.placeholder.com/100", 
        info: "90-80-90", 
        rating: "3.5/5",
        link: "https://www.facebook.com/minhhai.11045"
    }
];

places.forEach(place => {
    L.marker([place.lat, place.lng]).addTo(map)
        .bindPopup(`
            <div class='popup-content'>
                <b>${place.name}</b><br>
                <img src="${place.img}" alt="${place.name}"><br>
                ${place.info}<br>
                Đánh giá: ${place.rating}<br>
                <a href="${place.link}" target="_blank">Xem chi tiết</a>
            </div>
        `);
});

function searchPlace() {
    var query = document.getElementById("search-box").value.toLowerCase();
    var found = places.find(p => p.name.toLowerCase().includes(query));
    if (found) {
        map.setView([found.lat, found.lng], 15);
    } else {
        alert("Không tìm thấy đào nào phù hợp!");
    }
}
