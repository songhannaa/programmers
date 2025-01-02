function solution(genres, plays) {
    const genreMap = new Map();

    genres.forEach((genre, index) => {
        if (!genreMap.has(genre)) {
            genreMap.set(genre, { totalPlays: 0, songs: [] });
        }
        genreMap.get(genre).totalPlays += plays[index];
        genreMap.get(genre).songs.push({ id: index, plays: plays[index] });
    });

    const sortedGenres = [...genreMap.entries()].sort(
        (a, b) => b[1].totalPlays - a[1].totalPlays
    );

    const bestAlbum = [];

    sortedGenres.forEach(([genre, data]) => {
        const topSongs = data.songs
            .sort((a, b) => b.plays - a.plays || a.id - b.id).slice(0, 2);
        bestAlbum.push(...topSongs.map(song => song.id));
    });

    return bestAlbum;
}

