<script>
  import Calender from "./Calender.svelte";
  import { date } from "../stores/date-store.js";

  // state
  let showDatePicker = true;
  let state;

  const unsub = date.subscribe(v => (state = v));
  // handlers
  const onFocus = () => {
    showDatePicker = true;
  };
</script>

<style>
  .box {
    border: 1px solid tomato;
    height: 300px;
    width: 300px;
  }

  .month-name {
    text-align: center;
    margin: 6px 0;
  }
</style>

<input type="text" on:focus={onFocus} />
{#if showDatePicker}
  <div class="box">
    <div class="month-name">{state.month} {state.year}</div>
    <Calender />
  </div>
{/if}
