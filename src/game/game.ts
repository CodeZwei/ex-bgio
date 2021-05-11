import type {Ctx, Game} from 'boardgame.io';
import {GameState, initialState} from './state';

function reset(): GameState {
  return {...initialState};
}

export const ExDT: Game<GameState, Ctx, undefined> = {
  setup: () => reset(),

  moves: {
    kiss(G) {
      G.arousal += 3;
      G.herArousal += 2;
      G.herBreath = Math.min(100, G.herBreath + 20);
      G.depth = 0;
      return;
    },
    grab(G) {
      G.hisGrip = 1;
    },
    thrust(G) {
      G.arousal += 2 * G.depth;
      G.herArousal += 1 * G.depth;
      G.herBreath -= 1 * G.depth;
    },
    deeper(G) {
      G.depth += 1;
    },
    shallow(G) {
      G.depth -= 1;
    },
  },

  turn: {moveLimit: 1},

  endIf: (G, ctx) => {
    if (G.arousal >= 100) {
      return {winner: ctx.currentPlayer};
    }
    return;
  },

  ai: {
    enumerate: (G) => {
      const moves = [];
      // for (let i = 0; i < 9; i++) {
      //   if (G.cells[i] === null) {
      //     moves.push({move: 'clickCell', args: [i]});
      //   }
      // }
      return moves;
    },
  },
};
