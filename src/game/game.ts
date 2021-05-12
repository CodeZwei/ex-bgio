import type {Ctx, Game} from 'boardgame.io';
import {GameState, initialState} from './state';

function reset(): GameState {
  return {...initialState};
}

export const ExDT: Game<GameState, Ctx, undefined> = {
  setup: () => reset(),

  moves: {Kiss, Grab, Thrust, Deeper, Shallow},

  turn: {
    moveLimit: 1,
  },

  phases: {
    initial: {
      moves: {Kiss, Grab, Thrust, Deeper, Shallow},
      start: true,
      next: 'orgasm',
      endIf: (G) => G.arousal >= 20,
    },
    orgasm: {
      onBegin: (G, ctx) => {
        G.hisOrgasm = 6;
        G.log.push('He reaches a climax!');
      },
      moves: {Thrust, Deeper, Shallow, CumMouth, CumThroat, CumFace, CumTits},
    },
  },

  endIf: (G, ctx) => {
    if (ctx.phase === 'orgasm' && G.hisOrgasm < 0) {
      return {winner: ctx.currentPlayer};
    }
    return;
  },

  ai: {
    enumerate: (G) => {
      const moves = [
        {move: 'Kiss'},
        {move: 'Thrust'},
        {move: 'Deeper'},
        {move: 'Shallower'},
      ];
      return moves;
    },
  },
};

// Moves

function Kiss(G: GameState): void {
  G.arousal += 3;
  G.herArousal += 2;
  G.herBreath = Math.min(100, G.herBreath + 20);
  G.depth = 0;
  G.log.push('Veronica softly kisses the tip of his cock.');
  return;
}

function Grab(G: GameState): void {
  G.hisGrip = 1;
  G.log.push('He grabs Veronica\'s head with both hands.');
}

function Thrust(G: GameState): void {
  G.arousal += 2 * G.depth;
  G.herArousal += 1 * G.depth;
  G.herBreath -= 1 * G.depth;
  G.log.push('He thrusts into Veronica\s mouth.');
}

function Deeper(G: GameState): void {
  G.depth = Math.min(4, G.depth + 1);
  G.log.push('He pushes his cock deeper into her throat.');
}

function Shallow(G: GameState): void {
  G.depth = Math.max(0, G.depth - 1);
  G.log.push('He pulls his cock less deep in her mouth.');
}

// Orgasm Phase

function CumMouth(G: GameState): void {
  G.hisOrgasm -= 1;
  G.log.push('He releases a jet of cum into her mouth.');
}

function CumThroat(G: GameState): void {
  G.hisOrgasm -= 1;
  G.log.push('He shoots a rope of cum down her throat.');
}

function CumFace(G: GameState): void {
  G.hisOrgasm -= 1;
  G.log.push('He shoots strings of cum across her face.');
}

function CumTits(G: GameState): void {
  G.hisOrgasm -= 1;
  G.log.push('He spurts cum all over her tits.');
}
