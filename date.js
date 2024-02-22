


function getCurrentDateTime(){
// Create a new Date object
const currentDate = new Date();

// Get the current date
const day = currentDate.getDate();
const monthName = currentDate.toLocaleString('en-US', {month: 'long'});

// Get the current year
const year = currentDate.getFullYear();

// Get the current hour
const hours = currentDate.getHours();

// Get the current minutes
const minutes = currentDate.getMinutes();

document.getElementById('time').innerHTML = `${hours}:${minutes}`;
document.getElementById('date').innerHTML = `${day},${monthName},${year}`;
}


// scripts tto fetch the api and display the list of PRS
async function getPullRequests() {
    const apiUrl = 'https://api.github.com/repos/CodingChallegesFYI/SharedSolutions/pulls';
    const response = await fetch(apiUrl);
    const data = await response.json();
    const titleArray  = data.map(issue => issue.title);
    titleArray.forEach(element => {
        var li = document.createElement("li");
        var text = document.createTextNode(element);
        li.appendChild(text);
        document.getElementById('pr-section').appendChild(li);
    });

    document.getElementById('pr-count').innerHTML = `There are ${titleArray.length} PR shared by CodingChallengesFYI`;
}
  
getCurrentDateTime();
getPullRequests();