window.addEventListener('DOMContentLoaded', function() {
    // Stopwatch
    var stopwatchDisplay = document.getElementById('stopwatch-display');
    var startStopwatchButton = document.getElementById('start-stopwatch');
    var stopStopwatchButton = document.getElementById('stop-stopwatch');
    var resetStopwatchButton = document.getElementById('reset-stopwatch');
  
    var stopwatchInterval;
    var stopwatchTime = 0;
  
    function startStopwatch() {
      stopwatchInterval = setInterval(function() {
        stopwatchTime += 10;
        updateStopwatchDisplay();
      }, 10);
      startStopwatchButton.disabled = true;
      stopStopwatchButton.disabled = false;
    }
  
    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      startStopwatchButton.disabled = false;
      stopStopwatchButton.disabled = true;
    }
  
    function resetStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchTime = 0;
      updateStopwatchDisplay();
      startStopwatchButton.disabled = false;
      stopStopwatchButton.disabled = true;
    }
  
    function updateStopwatchDisplay() {
      var milliseconds = stopwatchTime % 1000;
      var seconds = Math.floor(stopwatchTime / 1000) % 60;
      var minutes = Math.floor(stopwatchTime / (1000 * 60)) % 60;
      var hours = Math.floor(stopwatchTime / (1000 * 60 * 60)) % 24;
  
      milliseconds = Math.floor(milliseconds / 10);
  
      milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      hours = hours < 10 ? '0' + hours : hours;
  
      stopwatchDisplay.textContent = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
    }
    
    startStopwatchButton.addEventListener('click', startStopwatch);
    stopStopwatchButton.addEventListener('click', stopStopwatch);
    resetStopwatchButton.addEventListener('click', resetStopwatch);
    
    // Timer
    var timerInput = document.getElementById('timer-input');
    var startTimerButton = document.getElementById('start-timer');
    var stopTimerButton = document.getElementById('stop-timer');
    var resetTimerButton = document.getElementById('reset-timer');
    
    var timerInterval;
    var timerTime = 0;
    
    function startTimer() {
    var input = timerInput.value;
    var timeArray = input.split(':');
    var hours = parseInt(timeArray[0]) || 0;
    var minutes = parseInt(timeArray[1]) || 0;
    var seconds = parseInt(timeArray[2]) || 0;
    timerTime = hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;

if (timerTime <= 0) {
  return;
}

timerInterval = setInterval(function() {
  timerTime -= 10;

  if (timerTime <= 0) {
    clearInterval(timerInterval);
    timerTime = 0;
  }

  updateTimerDisplay();
}, 10);
startTimerButton.disabled = true;
stopTimerButton.disabled = false;
    }
    function stopTimer() {
        clearInterval(timerInterval);
        startTimerButton.disabled = false;
        stopTimerButton.disabled = true;
        }
        
        function resetTimer() {
        clearInterval(timerInterval);
        timerTime = 0;
        updateTimerDisplay();
        startTimerButton.disabled = false;
        stopTimerButton.disabled = true;
        }
        
        function updateTimerDisplay() {
        var milliseconds = timerTime % 1000;
        var seconds = Math.floor(timerTime / 1000) % 60;
        var minutes = Math.floor(timerTime / (1000 * 60)) % 60;
        var hours = Math.floor(timerTime / (1000 * 60 * 60)) % 24;
        milliseconds = Math.floor(milliseconds / 10);

milliseconds = milliseconds < 10 ? '0' + milliseconds : milliseconds;
seconds = seconds < 10 ? '0' + seconds : seconds;
minutes = minutes < 10 ? '0' + minutes : minutes;
hours = hours < 10 ? '0' + hours : hours;

stopwatchDisplay.textContent = hours + ':' + minutes + ':' + seconds + '.' + milliseconds;
}

startTimerButton.addEventListener('click', startTimer);
stopTimerButton.addEventListener('click', stopTimer);
resetTimerButton.addEventListener('click', resetTimer);
});
  