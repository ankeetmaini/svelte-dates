<script>
  import Calender from "./Calender.svelte";
  import { getMonthName } from "../utils/date-time.js";

  // state
  let month = 0;
  let year = 2019;
  let showDatePicker = true;

  // handlers
  const onFocus = () => {
    showDatePicker = true;
  };

  const next = () => {
    if (month === 11) {
      month = 0;
      year = year + 1;
      return;
    }
    month = month + 1;
  };

  const prev = () => {
    if (month === 0) {
      month = 11;
      year -= 1;
      return;
    }
    month -= 1;
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
    display: flex;
    justify-content: space-around;
    margin: 6px 0;
  }
</style>

<div class="relative">
  <input type="text" on:focus={onFocus} />
  {#if showDatePicker}
    <div class="box">
      <div class="month-name">
        <button on:click={prev}>Prev</button>
        <div>{getMonthName(month)} {year}</div>
        <button on:click={next}>Next</button>
      </div>
      <Calender {month} {year} />
    </div>
  {/if}
</div>
