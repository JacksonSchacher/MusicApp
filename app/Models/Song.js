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
    <div class="card rounded shadow my-2">
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
          <div class="card rounded shadow my-2">
              <div class="card-body d-flex justify-content-between">
                  <h5 class="card-title">${this.title}</h5>
                  <h6>${this.artist}</h6>
                  <p>${this.album}</p>
                  <a onclick="app.songsController.removeSong(${this.id})" class="btn btn-danger">Delete</a>
              </div>
          </div>
        `;
    }
}