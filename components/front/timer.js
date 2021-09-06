function Timer(dateInString, setDay, setHour, setMinute, setSecond) {
  const eventDate = new Date(dateInString).getTime();
  const present = new Date().getTime();
  const timeDifference = eventDate - present;
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const daysLeft = Math.floor(timeDifference / day);
  const hoursLeft = Math.floor((timeDifference % day) / hour);
  const minutesLeft = Math.floor((timeDifference % hour) / minute);
  const secondLeft = Math.floor((timeDifference % minute) / second);
  setDay(daysLeft);
  setHour(hoursLeft);
  setMinute(minutesLeft);
  setSecond(secondLeft);
}
export default Timer;
// September 10,2021 00:00:00
