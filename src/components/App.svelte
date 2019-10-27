<script>
  import DatePicker from "./DatePicker.svelte";
  import { getMonthName } from "../utils/date-time.js";

  const onDateChange = d => {
    const { date, month, year } = d.detail;
    console.log(date, getMonthName(month), year);
  };
</script>

<DatePicker on:datechange={onDateChange} />
