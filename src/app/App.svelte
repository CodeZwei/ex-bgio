<script lang="ts">
  import Board from "./Board.svelte";
</script>

<main>
  <h1>Ex DT</h1>
  <!-- <Board playerID="0" /> -->
  <Board playerID="1" />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }
  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
