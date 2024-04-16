function SubForm() {
    var formData = {
        Year: document.getElementsByName("Year")[0].value,
        AlbumName: document.getElementsByName("Album Name")[0].value,
        ImgURL: document.getElementsByName("ImgURL")[0].value,
        Singer: document.getElementsByName("Singer")[0].value,
        Genre: document.getElementsByName("Genre")[0].value,
        NumReview: document.getElementsByName("NumReview")[0].value,
        Comments: document.getElementsByName("Comments")[0].value
    };

    // Convert the form data to a JSON string
    var formDataJSON = JSON.stringify(formData);

    // Save the form data to local storage
    localStorage.setItem("formData", formDataJSON);

    // Optionally, you can alert the user that the form data is saved
    alert("Form data saved successfully!");
}

// Retrieve the saved form data from local storage
var savedFormDataJSON = localStorage.getItem("formData");

// Convert the JSON string back to an object
var savedFormData = JSON.parse(savedFormDataJSON);

function SubForm() {
    var formData = {
        Year: document.getElementsByName("Year")[0].value,
        AlbumName: document.getElementsByName("Album Name")[0].value,
        ImgURL: document.getElementsByName("ImgURL")[0].value,
        Singer: document.getElementsByName("Singer")[0].value,
        Genre: document.getElementsByName("Genre")[0].value,
        NumReview: document.getElementsByName("NumReview")[0].value,
        Comments: document.getElementsByName("Comments")[0].value
    };

    // Convert the form data to a JSON string
    var formDataJSON = JSON.stringify(formData);

    // Save the form data to local storage
    localStorage.setItem("formData", formDataJSON);

    // Optionally, you can alert the user that the form data is saved
    alert("Form data saved successfully!");
}


function displaySavedFormData() {
    // Retrieve the saved form data from local storage
    var savedFormDataJSON = localStorage.getItem("formData");

    // Check if there's any saved data
    if (savedFormDataJSON) {
        // Convert the JSON string back to an object
        var savedFormData = JSON.parse(savedFormDataJSON);

        // Get the container where you want to display the albums
        var container = document.getElementById("albumsContainer");

        // Create a new list item for each album
        var listItem = document.createElement("li");
        listItem.innerHTML = "<strong>Album Name:</strong> " + savedFormData.AlbumName + "<br>" +
            "<strong>Year:</strong> " + savedFormData.Year + "<br>" +
            "<strong>Artist:</strong> " + savedFormData.Singer + "<br>" +
            "<strong>Genre:</strong> " + savedFormData.Genre + "<br>" +
            "<strong>Rating:</strong> " + savedFormData.NumReview + "/10<br>" +
            "<strong>Comments:</strong> " + savedFormData.Comments;

        // Append the list item to the container
        container.appendChild(listItem);
    } else {
        alert("No saved form data found.");
    }
}

// Call the function to display the saved form data when the page loads
window.onload = function () {
    displaySavedFormData();
};


document.querySelector(".icon").addEventListener("click", function() {
    document.querySelector("nav").classList.toggle("hidden")
    document.querySelector("main").classList.toggle("bigger-main")
})