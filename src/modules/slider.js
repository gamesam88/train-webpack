import { state } from "./state.js"

const imagesList = [
    { path: "./assets/bl1.jpg" },
    { path: "./assets/bl2.jpg" },
    { path: "./assets/bl3.jpg" },
    { path: "./assets/bl4.jpg" },
]


export const showImage = (imgNum) => {
    let img = new Image
    const imgSrc = imagesList[imgNum].path
    img.src = imgSrc
    img.onload = () => {
        document.querySelector('.slider').style.backgroundImage = `url(${imgSrc})`
    }
}

export const leftImg = () => {
    if (state.current_image > 0) {
        state.current_image--
        showImage(state.current_image)
    } else {
        state.current_image = imagesList.length - 1
        showImage(state.current_image)
    }
}

export const rigthtImg = () => {
    if (state.current_image < imagesList.length - 1) {
        state.current_image++
        showImage(state.current_image)
    } else {
        state.current_image = 0
        showImage(state.current_image)
    }
}

export function changeImgTimeout() {
    setInterval(() => {
        rigthtImg()
    }, 10000);
}