import './css/index.css'
import './css/icono.min.css'

import { myFunck } from "./modules/helpers.js";
import { showImage, leftImg, rigthtImg, changeImgTimeout } from "./modules/slider.js";
import { state } from "./modules/state.js"
import { createMusicList } from './modules/player/player.js'


showImage(state.current_image)
myFunck()

document.querySelector('.arrow-rigth').addEventListener('click', () => {
    rigthtImg()
    console.log(state.current_image)
})

document.querySelector('.arrow-left').addEventListener('click', () => {
    leftImg()
    console.log(state.current_image)
})

createMusicList()

changeImgTimeout()