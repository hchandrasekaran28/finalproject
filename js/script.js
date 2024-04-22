
/*
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
}; */


document.querySelector(".icon").addEventListener("click", function () {
    document.querySelector("nav").classList.toggle("hidden")
    document.querySelector("main").classList.toggle("bigger-main")
    document.querySelector("footer").classList.toggle("footersizechange")
})

let viewTypeSelect = document.getElementById("viewTypeSelect");
let albumCards = document.querySelector(".album-cards");
let albumInfo = document.querySelector(".album-info");

let albumCard = document.querySelectorAll(".album-card");


// Add event listener to the dropdown
viewTypeSelect.addEventListener("change", function () {
    // Get the selected view type
    let selectedViewType = viewTypeSelect.value;

    // Remove all existing view classes
    albumCards.classList.remove("card-view", "slider-view");
    for (var index = 0; index < albumCard.length; index++) {

        console.log("removing classes")

        console.log(albumCard[index])

        albumCard[index].classList.remove("card-view", "slider-view");

    }
    albumInfo.classList.remove("card-view", "slider-view");
    // Add the selected view class
    albumCards.classList.add(selectedViewType);

    for (var index = 0; index < albumCard.length; index++) {

        console.log("Adding listener")

        console.log(albumCard[index])

        albumCard[index].classList.add(selectedViewType);

    }
    albumInfo.classList.add(selectedViewType);

    if(selectedViewType == "slider-view") {
        let carousel = document.querySelector(".carousel");
        let arrowBtns = document.querySelectorAll(".album-cards i");
    
        const firstCard = carousel.querySelector(".card");
        const firstCardWidth = firstCard.offsetWidth;
    
        let isDragging = false,
            startX,
            startScrollLeft,
            timeoutId;
    
        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        };
    
        const dragging = (e) => {
            if (!isDragging) return;
    
            // Calculate the new scroll position 
            const newScrollLeft = startScrollLeft - (e.pageX - startX);
    
            // Check if the new scroll position exceeds  
            // the carousel boundaries 
            if (newScrollLeft <= 0 || newScrollLeft >=
                carousel.scrollWidth - carousel.offsetWidth) {
    
                // If so, prevent further dragging 
                isDragging = false;
                return;
            }
    
            // Otherwise, update the scroll position of the carousel 
            carousel.scrollLeft = newScrollLeft;
        };
    
        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };
    
        const autoPlay = () => {
    
            // Return if window is smaller than 800 
            if (window.innerWidth < 800) return;
    
            // Calculate the total width of all cards 
            const totalCardWidth = carousel.scrollWidth;
    
            // Calculate the maximum scroll position 
            const maxScrollLeft = totalCardWidth - carousel.offsetWidth;
    
            // If the carousel is at the end, stop autoplay 
            if (carousel.scrollLeft >= maxScrollLeft) return;
    
            // Autoplay the carousel after every 2500ms 
            timeoutId = setTimeout(() =>
                carousel.scrollLeft += firstCardWidth, 2500);
        };
    
        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        albumCards.addEventListener("mouseenter", () =>
            clearTimeout(timeoutId));
        albumCards.addEventListener("mouseleave", autoPlay);
    
        // Add event listeners for the arrow buttons to  
        // scroll the carousel left and right 
        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id === "left" ?
                    -firstCardWidth : firstCardWidth;
            });
        });
    }
});
