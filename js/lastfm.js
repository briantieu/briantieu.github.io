// get most recently listened track
fetch('http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=briantieu&api_key=9ba3923ace92512bcc5ea8a4eab44854&format=json&limit=1')
.then(res=>res.json())
.then(json=> {
    const artist = json.recenttracks.track[0].artist['#text'];
    const song = json.recenttracks.track[0].name;

    console.log(json.recenttracks.track[0])
    if (json.recenttracks.track[0].date == undefined) {
        $('#recentlyPlayedString').html('Now Playing: ');
    } else {
        $('#recentlyPlayedString').html('Recently Played: ');
        const dateListened = new Date(json.recenttracks.track[0].date['uts'] * 1000).toLocaleString();
        $('#recentlyPlayedDate').html('(' + dateListened + ')');
    }
    $('#recentlyPlayedSong').html(song);
    $('#recentlyPlayedArtist').html('by ' + artist);
});