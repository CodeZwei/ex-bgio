<script lang="ts">
  export let playerID: string;
  import { Client } from "boardgame.io/client";
  import { Local } from "boardgame.io/multiplayer";
  import { ExDT } from "../game/game";
  import { Debug } from "boardgame.io/debug";

  const client = Client({
    game: ExDT,
    matchID: "default",
    playerID,
    debug: { impl: Debug },
    numPlayers: 2,
    multiplayer: Local(),
  });

  client.start();

  $: winner = $client.ctx.gameover
    ? $client.ctx.gameover.winner || "Draw!"
    : undefined;
</script>

<div>
  Current Player {$client.ctx.currentPlayer}
  <table id="board">
    <tbody>
      <tr>
        <td class="cell" on:click={() => client.moves.kiss()}> Kiss </td>
        <td class="cell" on:click={() => client.moves.grab()}> Grab </td>
        <td class="cell" on:click={() => client.moves.thrust()}> Thrust </td>
        <td class="cell" on:click={() => client.moves.deeper()}> Deeper </td>
        <td class="cell" on:click={() => client.moves.shallow()}>
          Shallower
        </td>
      </tr>
    </tbody>
  </table>
  Arousal: {$client.G.arousal}
  Grip: {$client.G.hisGrip}
  Orgasm: {$client.G.hisOrgasm}
  Depth: {$client.G.depth}

  Her: Arousal: {$client.G.herArousal}
  Breath: {$client.G.herBreath}
  Orgasm: {$client.G.herOrgasm}
  {#if winner}
    <div id="winner">Winner: {winner}</div>
  {/if}
</div>

<style>
  .cell {
    cursor: pointer;
    border: 1px solid #555;
    width: 50px;
    height: 50px;
    /* lineheight: 50px;
    textalign: center;
    fontfamily: monospace;
    fontsize: 20px;
    fontweight: bold; */
  }
</style>
