src = "https://code.jquery.com/jquery-3.4.1.js"
integrity = "sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
crossorigin = "anonymous" >

function SubForm (){
    $.ajax({
        url:"https://api.apispreadsheets.com/data/rAX3czzGnXPeLSCj/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}

fetch("https://api.apispreadsheets.com/data/rAX3czzGnXPeLSCj/").then(res=>{
	if (res.status === 200){
		// SUCCESS
		res.json().then(data=>{
			const yourData = data
		}).catch(err => console.log(err))
	}
	else{
		// ERROR
	}
})

fetch("https://api.apispreadsheets.com/data/rAX3czzGnXPeLSCj/", {
	method: "POST",
	body: JSON.stringify({"data": {"Year":"2023","Genre":"Pop","ImgURL":"https://www.thecrimson.com/image/2023/9/19/guts-album-review-olivia-rodrigo-laughs-with-us-image/","Singer":"Olivia Rodrigo","Comments":"Really great album, very sonically interesting would like to see Olivia branch out","NumReview":"8","Album Name":"Guts"}, "query": "select * from rAX3czzGnXPeLSCj where Year='2023'"}),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
	}
	else{
		// ERROR
	}
})

fetch("https://api.apispreadsheets.com/data/rAX3czzGnXPeLSCj/")
            .then(response => response.json())
            .then(data => {
                // Once data is fetched, process it and display on the webpage
                const albumReviewsDiv = document.getElementById("albumReviews");
                data.forEach(review => {
                    const reviewDiv = document.createElement("div");
                    reviewDiv.classList.add("review");

                    const albumName = document.createElement("h2");
                    albumName.textContent = review["Album Name"];

                    const singer = document.createElement("p");
                    singer.textContent = "Singer: " + review["Singer"];

                    const year = document.createElement("p");
                    year.textContent = "Year: " + review["Year"];

                    const genre = document.createElement("p");
                    genre.textContent = "Genre: " + review["Genre"];

                    const imgURL = document.createElement("img");
                    imgURL.src = review["ImgURL"];
                    imgURL.alt = "Album Cover";

                    const comments = document.createElement("p");
                    comments.textContent = "Comments: " + review["Comments"];

                    const numReview = document.createElement("p");
                    numReview.textContent = "NumReview: " + review["NumReview"];

                    // Append all elements to the reviewDiv
                    reviewDiv.appendChild(albumName);
                    reviewDiv.appendChild(singer);
                    reviewDiv.appendChild(year);
                    reviewDiv.appendChild(genre);
                    reviewDiv.appendChild(imgURL);
                    reviewDiv.appendChild(comments);
                    reviewDiv.appendChild(numReview);

                    // Append the reviewDiv to the albumReviewsDiv
                    albumReviewsDiv.appendChild(reviewDiv);
                });
            })
            .catch(error => console.error('Error fetching data:', error));