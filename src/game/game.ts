import type {Ctx, Game} from 'boardgame.io';
import {GameState, initialState} from './state';
import {
  Wait,
  Grab,
  Thrust,
  Deeper,
  Shallow,
  CumMouth,
  CumThroat,
  CumFace,
  CumTits,
} from './dom-moves';
import {Kiss, Lick, Finger, Rub, Swallow} from './sub-moves';

function reset(): GameState {
  return {...initialState};
}

export const ExDT: Game<GameState, Ctx, undefined> = {
  setup: () => reset(),

  moves: {Wait},

  turn: {
    moveLimit: 1,
  },

  phases: {
    initial: {
      moves: {
        Wait,
        Grab,
        Thrust,
        Deeper,
        Shallow,
        Kiss,
        Lick,
        Finger,
        Rub,
      },
      start: true,
      next: 'orgasm',
      endIf: (G) => G.arousal >= 20,
    },
    orgasm: {
      onBegin: (G) => {
        G.hisOrgasm = 6;
        G.log.push('He reaches a climax!');
      },
      moves: {
        Thrust,
        Deeper,
        Shallow,
        CumMouth,
        CumThroat,
        CumFace,
        CumTits,
        Finger,
        Rub,
        Swallow,
      },
    },
  },

  endIf: (G, ctx) => {
    if (ctx.phase === 'orgasm' && G.hisOrgasm < 0) {
      return {winner: ctx.currentPlayer};
    }
    return;
  },

  ai: {
    enumerate: (G, ctx, playerId) => {
      if (playerId === '1') {
        // Submissive
        if (ctx.phase === 'initial') {
          return [
            {move: 'Kiss'},
            {move: 'Lick'},
            {move: 'Finger'},
            {move: 'Rub'},
          ];
        } else if (ctx.phase === 'orgasm') {
          return [
            {move: 'Finger'},
            {move: 'Rub'},
            {move: 'Swallow'},
          ];
        }
      } else {
        // Dom
        if (ctx.phase === 'initial') {
          return [
            {move: 'Wait'},
            {move: 'Wait'},
            {move: 'Grab'},
            {move: 'Thrust'},
            {move: 'Deeper'},
            {move: 'Shallow'},
          ];
        } else if (ctx.phase === 'orgasm') {
          return [
            {move: 'Thrust'},
            {move: 'Deeper'},
            {move: 'Shallow'},
            {move: 'CumMouth'},
            {move: 'CumThroat'},
            {move: 'CumFace'},
            {move: 'CumTits'},
          ];
        }
      }
    },
  },
};
