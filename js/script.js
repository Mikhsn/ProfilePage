function loadProfile() {
  fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      document.getElementById('profileImage').src = user.picture.large;
      document.getElementById('profileName').innerText = `${user.name.first} ${user.name.last}`;
      document.getElementById('profileEmail').innerText = user.email;
      document.getElementById('profilePhone').innerText = user.phone;
      document.getElementById('profileCity').innerText = user.location.city;
      document.getElementById('profileCountry').innerText = user.location.country;
    })
    .catch(error => console.error('Gagal mengambil data:', error));
}

document.getElementById('currentYear').innerText = new Date().getFullYear();
loadProfile();
