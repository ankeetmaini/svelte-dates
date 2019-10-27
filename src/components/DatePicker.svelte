<script>
  import Calender from "./Calender.svelte";
  import { getMonthName } from "../utils/date-time.js";

  // state
  let month = 5;
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
    border: 1px solid green;
    display: inline-block;
  }

  .month-name {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 6px 0;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>

<div class="relative">
  <input type="text" on:focus={onFocus} />
  {#if showDatePicker}
    <div class="box">
      <div class="month-name">
        <div class="center">
          <button on:click={prev}>Prev</button>
        </div>
        <div class="center">{getMonthName(month)} {year}</div>
        <div class="center">
          <button on:click={next}>Next</button>
        </div>
      </div>
      <Calender {month} {year} on:datechange />
    </div>
  {/if}
</div>
