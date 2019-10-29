<script>
  import DatePicker from "./DatePicker.svelte";
  import { getMonthName } from "../utils/date-time.js";

  let currentDate = new Date();

  const onDateChange = d => {
    currentDate = d.detail;
  };

  // setInterval(() => {
  //   currentDate = new Date(currentDate.getTime() + 24 * 3600 * 1000);
  // }, 1000);

  // const isAllowed = date => {
  //   const millisecs = date.getTime();
  //   if (millisecs + 25 * 3600 * 1000 < Date.now()) return false;
  //   if (millisecs > Date.now() + 3600 * 24 * 30 * 1000) return false;
  //   return true;
  // };
</script>

<DatePicker on:datechange={onDateChange} selected={currentDate} } />
