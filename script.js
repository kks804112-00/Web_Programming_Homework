function showSongs() {
    document.getElementById("home").hidden = true;
    document.getElementById("songList").hidden = false;
    document.getElementById("contact").hidden = true;
}

function showHome() {
    document.getElementById("home").hidden = false;
    document.getElementById("songList").hidden = true;
    document.getElementById("contact").hidden = true;
}

function showContact() {
    document.getElementById("home").hidden = true;
    document.getElementById("songList").hidden = true;
    document.getElementById("contact").hidden = false;
}

const songs = [
    "노래 제목 1 - 가수 A",
    "노래 제목 2 - 가수 B",
    "노래 제목 3 - 가수 C"
];

document.getElementById("random").onclick = function() {
    const randomIndex = Math.floor(Math.random() * songs.length);

    document.getElementById("result").textContent = songs[randomIndex];
};