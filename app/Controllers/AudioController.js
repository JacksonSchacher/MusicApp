export class AudioController {
    togglePlay(id) {
        /**
         * @type {HTMLAudioElement}
         */
        // @ts-ignore
        let audioElem = document.getElementById(`${id}`)
        console.log(id)
        console.log(audioElem)

        if (audioElem.paused) {
            audioElem.play()
        } else {
            audioElem.pause()
        }
    }
}