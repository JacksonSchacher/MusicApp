import { AudioController } from "./Controllers/AudioController.js";
import SongsController from "./Controllers/SongsController.js";

class App {
    songsController = new SongsController();
    audioController = new AudioController();
}

window["app"] = new App();