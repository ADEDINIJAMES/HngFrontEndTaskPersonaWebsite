function updateTimeAndDay() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; // Extracts the time part
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[now.getUTCDay()];

    currentTimeElement.textContent = `Current Time (UTC): ${utcTime}`;
    currentDayElement.textContent = `Current Day: ${currentDay}`;
}

document.addEventListener('DOMContentLoaded', updateTimeAndDay);
