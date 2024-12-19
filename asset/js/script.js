
    const container = document.getElementById("container");

    fetch('data.json') // Path to the JSON file
    .then(response => response.json()) // Parse the JSON into a JavaScript object
    .then(data => {
      container.innerHTML = `
        <h1 style="text-align: center; text-transform: uppercase; font-size: 72px;">${data.squadName}</h1>
        <h2 style="text-align: center; margin-top: 70px;">Hometown: ${data.homeTown} // Formed: ${data.formed}</h2>
      `
      data.members.forEach(member => {
        container.innerHTML += `
           <div style="margin-left:15%; margin-top: 70px; ">
                <div style="float:left; width:30%; margin-left:1.5%; background-color: white;">
                    <h2 style="width:190px; word-wrap: break-word; text-transform: uppercase; font-size: 32px;">${member.name}</h2>
                    <ul style="list-style-type: none; margin:0; padding:0; font-size: 20px;">
                        <li style="margin-bottom: 5px;">
                        Secret identity: ${member.secretIdentity}
                        </li>
                        <li style="margin-bottom: 5px;">
                        Age: ${member.age}
                        </li>
                        <li style="margin-bottom: 5px;">
                        Superpowers:
                        <ul style="list-style-type: disc; color: black; margin-top:10px;">
                        ${member.powers.map(power => `<li>${power}</li>`).join('')}
                        </ul>   
                        </li>
                    </ul>
                <div>
          </div>
        `
      });      
    })
    .catch(error => console.error('Error loading JSON file:', error));
