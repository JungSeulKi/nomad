const images = [
    "suzume_1.jpeg","suzume_2.jpeg","suzume_3.jpeg"
]

const chosenImage = images[Math.round(Math.random() * images.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${chosenImage}`;

document.body.appendChild(bgimg);
