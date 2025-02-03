
fetch('https://randomuser.me/api/')
            .then(response => response.json()) 
            .then(data => {
                 const user = data.results[0];
                const userDataDiv = document.getElementById('userData');

                 userDataDiv.innerHTML = `
                    <p>Name: ${user.name.first} ${user.name.last}</p>
                    <p>Email: ${user.email}</p>
                    <p>Location: ${user.location.city}, ${user.location.country}</p>
                    <p>Phone Number: ${user.phone}</p>
                    <img src="${user.picture.medium}" alt="User Image">
                `;
            })
            .catch(error => console.error('Error fetching data:', error));