function playSound(e) {
    //Show pressed keycode in console
    //console.log(e.keyCode);
    
    //Output the audio file corresponding to keycode pressed
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // Stops the function from running if key pressed has no audio associated...
    key.classList.add('playing');
    audio.currentTime = 0; // Rewinds audio if already playing
    audio.play();
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
