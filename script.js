const albums = [
    {
        title: "Scared Of You",
        image: "Images/Scared Of You.jpeg"
    },
    {
        title: "Cotton Candy Skies",
        image: "Images/Cotton Candy Skies.jpeg"
    },
    {
        title: "Cutting It Close",
        image: "Images/Cutting It Close.jpeg"
    }
];

let currentAlbum = 0;

const albumArt = document.getElementById("album-art");
const albumTitle = document.getElementById("album-title");

const previousButton = document.getElementById("prev-album");
const nextButton = document.getElementById("next-album");

function showAlbum() {
    albumArt.src = albums[currentAlbum].image;
    albumArt.alt = `${albums[currentAlbum].title} artwork`;
    albumTitle.textContent = albums[currentAlbum].title;
}

nextButton.addEventListener("click", () => {
    currentAlbum = (currentAlbum + 1) % albums.length;
    showAlbum();
});

previousButton.addEventListener("click", () => {
    currentAlbum =
        (currentAlbum - 1 + albums.length) % albums.length;

    showAlbum();
});

showAlbum();