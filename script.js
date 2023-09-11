function updateDateTime() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.toISOString().substr(11, 8); 

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = currentDayOfWeek; 
    document.querySelector('[data-testid="currentUTCTime"]').textContent = currentUTCTime; 
}

updateDateTime();
setInterval(updateDateTime, 1000);
