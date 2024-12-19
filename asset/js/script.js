const container = document.getElementById("container");

fetch('data.json') // Path to the JSON file
    .then(response => response.json()) // Parse the JSON into a JavaScript object
    .then(data => {
        container.innerHTML = `
            <h1 style="text-align: center; text-transform: uppercase; font-size: 72px;">${data.squadName}</h1>
            <h2 style="text-align: center; margin-top: 70px;">Hometown: ${data.homeTown} // Formed: ${data.formed}</h2>
        `;
        
        container.innerHTML += `
            <div id="members" style="display: flex; flex-wrap: wrap; justify-content: center; gap: 20px; margin-top: 50px;">
            </div>
        `;
        
        const membersContainer = document.getElementById("members");

        data.members.forEach(member => {
            membersContainer.innerHTML += `
                <div style="width: 300px; background-color: white; padding: 20px; border: 2px solid black; border-radius: 10px; text-align: center;">
                    <h2 style="text-transform: uppercase; font-size: 24px;">${member.name}</h2>
                    <ul style="list-style-type: none; margin: 10px 0; padding: 0; font-size: 18px;">
                        <li><strong>Secret Identity:</strong> ${member.secretIdentity}</li>
                        <li><strong>Age:</strong> ${member.age}</li>
                        <li>
                            <strong>Superpowers:</strong>
                            <ul style="list-style-type: disc; margin: 10px 20px; padding: 0;">
                                ${member.powers.map(power => `<li>${power}</li>`).join('')}
                            </ul>
                        </li>
                    </ul>
                </div>
            `;
        });
    })
    .catch(error => console.error('Error loading JSON file:', error));
