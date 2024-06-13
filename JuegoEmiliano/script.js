let startTime;
let reactionTime;
let timeout;

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('result').textContent = 'Espera la señal...';
    this.disabled = true;

    const delay = Math.random() * 5000 + 2000;

    timeout = setTimeout(function() {
        startTime = Date.now();
        document.getElementById('result').textContent = '¡ALTO! Presiona ahora!';
        document.getElementById('stopButton').style.display = 'inline-block';
        document.getElementById('stopButton').disabled = true;

        setTimeout(function() {
            document.getElementById('stopButton').disabled = false;
        });

        document.getElementById('stopButton').addEventListener('click', stopTest);
    }, delay);
});

function stopTest() {
    reactionTime = Date.now() - startTime;
    document.getElementById('result').innerHTML = 'Tu tiempo de reacción es: ' + reactionTime + ' mili segundos<br>Con 0.5 de alcohol en sangre, hubieras tardado, al menos unos ' + ((reactionTime * 2) / 1000) + ' segundos <br> ¡Tené cuidado, no bebas y manejes!';
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').style.display = 'none';
    document.getElementById('stopButton').removeEventListener('click', stopTest);
    clearTimeout(timeout);
}
