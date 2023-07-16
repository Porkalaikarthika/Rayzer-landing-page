function updateTimer() {
    const timerElement = document.getElementById('timer');
    let timeString = timerElement.textContent;
    let [hours, minutes, seconds] = timeString.split(':').map(Number);
  
    if (hours === 0 && minutes === 0 && seconds === 0) {
      clearTimeout(timer);
      return;
    }
  
    if (seconds === 0) {
      if (minutes === 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
  
    timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    timerElement.textContent = timeString;
  
    setTimeout(updateTimer, 1000);
  }
  
  updateTimer();
  