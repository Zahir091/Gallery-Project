let gallery = ["https://travelmelodies.com/wp-content/uploads/2020/03/travel-melodies-statue-of-liberty-new-york-city-usa-768x576.jpg", "https://s39023.pcdn.co/wp-content/uploads/2022/10/Where-Are-Those-Morgans-Empire-State-Building-728x546.jpg.optimal.jpg", "https://res.cloudinary.com/traveltripperweb/image/upload/c_crop,h_928,w_1601,x_0,y_0/c_fit,h_1200,w_1200/v1574859574/zj1vebu2d6xxjcrswjre.jpg"];

// This for loop displays the intital 3 picture //
for (let photos of gallery) {
	$(".gallery").append("<img src='" + photos +"' class='picture'>");
}

$(".add").click(function() {
    if ( $(".picture-url").val() === "") {
		alert("Please Enter a valid URL");
    }
    else {
    	let newImgURL = $(".picture-url").val();
        gallery.push(newImgURL);  
        // This blank .text() empties the gallery div, so it doesn't repeat the same images when it goes through the loop //
        $(".gallery").text("");
        $(".picture-url").val("");
        
        // This for loop displays the new images when the button is clicked //
        for (let photos of gallery) {
        	$(".gallery").append("<img src='" + photos +"'  class='picture'>");
    	}
    }
    console.log(gallery);
});


    