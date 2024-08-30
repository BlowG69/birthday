function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.backgroundColor = getRandomColor();
    document.getElementById('balloons').appendChild(balloon);

    setTimeout(() => {
        balloon.remove();
    }, 5000); 
}

function getRandomColor() {
    const colors = ['#ff0066', '#ff3399', '#ff66cc', '#cc33ff', '#6600cc', '#3399ff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function startCelebration() {
   
    const audio = document.getElementById('birthdaySong');
    audio.play();

 
    document.querySelector('.container').style.display = 'none';
    setInterval(createBalloon, 300);
}
