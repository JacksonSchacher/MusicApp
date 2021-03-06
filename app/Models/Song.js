export default class Song {
    constructor(data) {
        this.title = data.trackName || data.title;
        this.albumArt =
            data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
        this.artist = data.artistName || data.artist;
        this.album = data.collectionName || data.album;
        this.price = data.trackPrice || data.price;
        this.preview = data.previewUrl || data.preview;
        this.id = data.trackId || data._id;
    }

    get Template() {
        return /*html*/ `
    <div class="card rounded shadow my-2 scrollable-y">
        <img src="${this.albumArt}" class="card-img-top" alt="album art">
        <div class="d-flex justify-content-between card-body">
            <h5 class="card-title">${this.title}</h5>
            <h6>${this.artist}</h6>
            <p>${this.album}</p>
            <a onclick="app.songsController.addSong(${this.id})" class="btn btn-primary">${this.price}</a>
        </div>
    </div>
        `;
    }

    get playlistTemplate() {
        return /*html*/ `
          <div class="card rounded shadow my-2 scrollable-y">
              <div onclick="app.audioController.togglePlay('${this.id}')" class="card-body d-flex justify-content-between">
              <audio src="${this.preview}" type="audio/mp3" id="${this.id}"></audio>
                  <h5 class="card-title selectable">${this.title}</h5>
              
                  <h6>${this.artist}</h6>
                  <p>${this.album}</p>
                  <button onclick="app.songsController.removeSong('${this.id}')" class="btn btn-danger">Delete</button>
              </div>
          </div>
        `;
    }
}