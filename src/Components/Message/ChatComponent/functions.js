export function formatDate(date) {
  // Convert the input date string to a Date object
  const dateString = date.toString();
  const parts = dateString.match(/(\d{2})(\d{2})(\d{2})/);
  if (!parts) {
    return 'Invalid date format';
  }
  const day = parseInt(parts[1], 10);
  const month = parseInt(parts[2], 10) - 1; // Month is zero-based
  const year = 2000 + parseInt(parts[3], 10);

  const inputDate = new Date(year, month, day);
  const currentDate = new Date();

  const dayInMilliseconds = 1000 * 60 * 60 * 24;
  const daysDifference = Math.floor((currentDate - inputDate) / dayInMilliseconds);

  if (daysDifference === 0) {
    return 'Today';
  } else if (daysDifference === 1) {
    return 'Yesterday';
  } else if (daysDifference >= 2 && daysDifference <= 7) {
    return `${daysDifference} days ago`;
  } else {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const formattedDate = `${daysOfWeek[inputDate.getDay()]}, ${inputDate.getDate()} ${months[inputDate.getMonth()]}, ${inputDate.getFullYear() % 100}`;
    return formattedDate;
  }
}