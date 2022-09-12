import { playList } from "./playList";

export const createMusicList = () => {
    const player = document.querySelector('.player');
    const musicList = document.querySelector('.play_list')
    const audio = new Audio;

    playList.forEach(element => {
        const audioItem = document.createElement('li')
        audioItem.textContent = `${element.name}`
        audioItem.classList.add('list_item')
        musicList.append(audioItem)
    })
}

