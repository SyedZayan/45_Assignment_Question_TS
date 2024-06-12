// Function to create an album object
function makeAlbum(
  artist: string,
  title: string,
  tracks?: number
): { artist: string; title: string; tracks?: number } {
  let album: { artist: string; title: string; tracks?: number } = {
    artist: artist,
    title: title,
  };

  if (tracks !== undefined) {
    album.tracks = tracks;
  }

  return album;
}

// Creating and printing album objects
let info1 = makeAlbum("Abdul hannan", "Zaalima");
let info2 = makeAlbum("Bandana", "Shubh");
let info3 = makeAlbum("Ap Dhillon", "Desires", 7);

console.log(info1);
console.log(info2);
console.log(info3);