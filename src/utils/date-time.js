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
const getEmptyRows = () => {
  return Array.from({ length: 42 }).map(() => []);
};
const getMonthDays = (index, year) => {
  return index !== 1 ? monthDays[index] : isLeapYear(year) ? 29 : 28;
};

// const chunkify = (arr, count) => {
//   const result = [];
//   let intermediate = [];

//   arr.forEach(i => {
//     if (intermediate.length === count) {
//       result.push(intermediate);
//       intermediate = [];
//     }
//     intermediate.push(i);
//   });
//   return result;
// };

export const getMonthStats = (monthIndex, year) => {
  const today = new Date(year, monthIndex, 1);
  const index = today.getMonth();
  return {
    name: index[index],
    days: getMonthDays(index, year)
  };
};

export const getMonthName = index => monthNames[index + 1];

export const getDateRows = (monthIndex, year) => {
  const { days } = getMonthStats(monthIndex, year);
  const rows = getEmptyRows();
  const startIndex = new Date(year, monthIndex, 1).getDay();
  Array.from({ length: days }).forEach((_, i) => {
    const index = startIndex + i;
    rows[index] = i + 1;
  });
  return rows;
};
