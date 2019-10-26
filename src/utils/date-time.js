const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const isLeapYear = year => year % 4 === 0;

const getMonthDays = (index, year) => {
  return index !== 1 ? monthDays[index] : isLeapYear(year) ? 29 : 28;
};

export const getCurrentMonth = () => {
  const today = new Date();
  const index = today.getMonth();
  const year = today.getFullYear();
  return {
    name: index[index],
    days: getMonthDays(index, year)
  };
};

export const getMonthName = index => monthNames[index + 1];
