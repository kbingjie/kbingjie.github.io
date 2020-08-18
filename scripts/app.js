// const CLOSE = document.querySelector("#close");
// const MY_CONTAINER = document.querySelector(".my-container");
// const IMAGE_CLICK = document.querySelector(".image-click")

// CLOSE.addEventListener("click", () => {
//     MY_CONTAINER.style.display = "none";
// })

// IMAGE_CLICK.addEventListener("click", () => {
//     MY_CONTAINER.style.display = "block";
// })

// You should import the CSS file.
// import 'viewerjs/dist/viewer.css';
import Viewer from 'viewerjs';

console.log(Viewer)

// View an image
const viewer = new Viewer(document.getElementById('image'), {
    inline: true,
    viewed() {
        viewer.zoomTo(1);
    },
});
// Then, show the image by click it, or call `viewer.show()`.

// View a list of images
const gallery = new Viewer(document.getElementById('images'));
// Then, show one image by click it, or call `gallery.show()`.
