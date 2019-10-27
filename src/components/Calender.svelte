<script>
  import { getDateRows } from "../utils/date-time.js";

  export const month;
  export const year;
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
</script>

<style>
  .container {
    margin-top: 8px;
    padding: 14px;
    width: 300px;
  }
  .row {
    display: flex;
    margin: 2px 6px;
    flex-wrap: wrap;
  }

  .cell {
    display: inline-block;
    width: 40px;
    height: 20px;
    text-align: center;
  }
</style>

<div class="container">
  <div class="row">
    {#each weekdays as day}
      <div class="cell">{day}</div>
    {/each}
  </div>
  <div class="row">
    {#each getDateRows(month, year) as cell}
      <div class="cell">{cell || ' '}</div>
    {/each}
  </div>
</div>
