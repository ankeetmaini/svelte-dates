<script>
  import Calender from "./Calender.svelte";
  import { getMonthName } from "../utils/date-time.js";
  import { date } from "../stores/date-store.js";

  // state
  let showDatePicker = true;

  // handlers
  const onFocus = () => {
    showDatePicker = true;
  };
</script>

<style>
  .relative {
    position: relative;
  }
  .box {
    position: absolute;
    top: 40px;
    left: 0px;
    border: 1px solid tomato;
    display: inline-block;
  }

  .month-name {
    text-align: center;
    margin: 6px 0;
  }
</style>

<div class="relative">
  <input type="text" on:focus={onFocus} />
  {#if showDatePicker}
    <div class="box">
      <div class="month-name">{getMonthName($date.month)} {$date.year}</div>
      <Calender />
    </div>
  {/if}
</div>
