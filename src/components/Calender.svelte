<script>
  import { getDateRows } from "../utils/date-time.js";

  export let month;
  export let year;
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
</script>

<style>
  .container {
    margin-top: 8px;
    padding: 10px;
    width: 350px;
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
    padding: 4px;
  }
  .highlight {
    transition: transform 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  .highlight:hover {
    background: green;
    color: #fff;
    cursor: pointer;
    transform: scale(1.3);
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
      <div class:cell={true} class:highlight={cell}>{cell || ''}</div>
    {/each}
  </div>
</div>
