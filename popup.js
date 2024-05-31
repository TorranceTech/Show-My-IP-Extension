document.addEventListener('DOMContentLoaded', function() {
  // Function to fetch country flag
  const fetchCountryFlag = (ip, flagElement) => {
    fetch(`http://ip-api.com/json/${ip}`)
      .then(response => response.json())
      .then(data => {
        console.log('IP-API response for IP:', ip, data);  // Log API response for debugging
        if (data.status === 'success') {
          flagElement.src = `https://flagcdn.com/24x18/${data.countryCode.toLowerCase()}.png`;
          flagElement.style.display = 'inline';
        }
      })
      .catch(error => {
        console.error('Error fetching country information:', error);
      });
  };

  // Fetch user's IP address and country flag
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('ip').textContent = data.ip;
      fetchCountryFlag(data.ip, document.getElementById('ip-flag'));
    })
    .catch(error => {
      console.error('Error fetching IP address:', error);
      document.getElementById('ip').textContent = 'Error fetching IP';
    });

  // Fetch the IP address and country flag of the visited site
  browser.runtime.sendMessage({ action: 'getSiteIP' })
    .then(response => {
      document.getElementById('site-ip').textContent = response.siteIP || 'No site visited yet';
      if (response.siteIP) {
        fetchCountryFlag(response.siteIP, document.getElementById('site-ip-flag'));
      }
    })
    .catch(error => {
      console.error('Error fetching site IP address:', error);
      document.getElementById('site-ip').textContent = 'Error fetching site IP';
    });
});
