<script>
  const weekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
</script>

<style>
  .container {
    margin-top: 8px;
  }
  .row {
    display: flex;
    margin: 2px 6px;
  }

  .cell {
    display: flex;
    flex: 1;

    justify-content: center;
  }
</style>

<div class="container">
  <div class="row">
    {#each weekdays as day}
      <div class="cell">{day}</div>
    {/each}
  </div>
</div>
