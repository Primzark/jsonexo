fetch('data.json') // Path to the JSON file
  .then(response => response.json()) // Parse the JSON into a JavaScript object
  .then(data => {
    console.log(data.squadName); // Data is now a JavaScript object
  })
  .catch(error => console.error('Error loading JSON file:', error));
