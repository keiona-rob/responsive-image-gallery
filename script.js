

 const gallery = document.getElementById("gallery");



 // Fetch 12 random images from Lorem Picsum

 async function fetchImages() {

 try {

 const res = await fetch(

 "https://picsum.photos/v2/list?page=2&limit=50"

 );

 const data = await res.json();



 gallery.innerHTML = data

 .map((image) => {

 return `

 <div class="" >

 <img class="rounded-lg w-full h-60 object-cover overflow-hidden hover:scale-105 transition duration-300 ease-in-out" src="${image.download_url}" alt="Random image by ${image.author}" />

 </div>

 `;

 })

 .join("");

 } catch (error) {

 console.error("Failed to fetch images:", error);

 }

 }



 fetchImages();

