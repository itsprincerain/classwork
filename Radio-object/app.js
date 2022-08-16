const radio = {
  stations: [
      {
          name: 'RnB & Hip hop',
          songs: [
              {
                  title: 'Go Crazy',
                  artist: 'Chris Brown'
              },
              {
                  title: 'No Role Modelz',
                  artist: 'J Cole'
              },
              {
                  title: 'Sicko Mode',
                  artist: 'Travis Scott'
              },             
          ]
      },
      {
          name: 'Reggae',
          songs: [
              {
                  title: 'The Magic Flute',
                  artist: 'Bob Marley'
              },
              {
                  title: 'Dream Girl',
                  artist: 'Koleho Kai'
              },
              {
                  title: 'Love Reggae',
                  artist: 'Collie Buddz'
              },            
          ]
      },
    
    ],



    changeStation() {
      currentStation = radio.stations[Math.floor(Math.random() * 2)]
      currentSong = currentStation.songs[Math.floor(Math.random() * 3)]
      return currentStation.name + ': Now Playing...: ' + currentSong.title + ' by ' + currentSong.artist
    }






}

//console.log(radio.changeStation(0))
//This will play on terminal: RnB & Hip hop: Now Playing: No Role Modelz by J Cole

//console.log(radio.changeStation(2))
//Reggae: Now Playing: The Magic Flute by Bob Marley