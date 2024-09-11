document.addEventListener('DOMContentLoaded', function() {
    const controlsss = document.querySelector('#play');
    const song = document.querySelector('#song');
    const progress = document.querySelector('#progress');

    if (song && progress && controlsss) {
        // Set up the progress bar when the song metadata is loaded
        song.onloadedmetadata = function() {
            progress.max = song.duration;
            progress.value = song.currentTime;
        };

        // Update the progress bar as the song plays
        song.ontimeupdate = function() {
            progress.value = song.currentTime;
        };

        // Function to toggle play/pause
        function playPause() {
            if (controlsss.classList.contains('fa-circle-play')) {
                song.play();
                controlsss.classList.remove('fa-circle-play');
                controlsss.classList.add('fa-circle-pause');
            } else {
                song.pause();
                controlsss.classList.remove('fa-circle-pause');
                controlsss.classList.add('fa-circle-play');
            }
        }

        // Update song currentTime when progress bar is changed
        progress.addEventListener('input', function() {
            song.currentTime = progress.value;
        });

        // Add event listener for play/pause button
        controlsss.addEventListener('click', playPause);

        // Add event listener to handle errors
        song.addEventListener('error', function() {
            console.error('An error occurred while loading or playing the song.');
        });
    } else {
        console.error('One or more required elements are missing.');
    }

//     //music index
//     songName= document.querySelector('.songName');
//     const index={
//         title: ['CHLORINE', 'Fly me to the moon', 'Queen', 'Tai Mori Lai', 'Yeh Tune Kya Kiya'],
//         artist: ['a','b','c','d', 'e'],
//     }

//     //for next cauresol or song
//     next= document.querySelector('.next');
//     back= document.querySelector('.back');
//     next.addEventListener('click',function(){
        
//     })
//     // back.addEventListener('click', backSong(){

//     // });

    
});