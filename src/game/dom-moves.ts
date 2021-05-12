// Dom Moves

import {INVALID_MOVE} from 'boardgame.io/core';
import type {GameState} from './state';

export function Wait(): string|undefined {
  return;
}

export function Grab(G: GameState): string|undefined {
  G.hisGrip = 1;
  G.log.push('He grabs Veronica\'s head with both hands.');
  return;
}

export function Thrust(G: GameState): string|undefined {
  G.arousal += 2 * G.depth;
  G.herArousal += 1 * G.depth;
  G.herBreath -= 1 * G.depth;
  G.log.push('He thrusts into Veronica\s mouth.');
  return;
}

export function Deeper(G: GameState): string|undefined {
  G.depth = Math.min(4, G.depth + 1);
  G.log.push('He pushes his cock deeper into her throat.');
  return;
}

export function Shallow(G: GameState): string|undefined {
  G.depth = Math.max(0, G.depth - 1);
  G.log.push('He pulls his cock less deep in her mouth.');
  return;
}

// Orgasm Phase

export function CumMouth(G: GameState): string|undefined {
  if (G.depth > 2) {
    return INVALID_MOVE;
  }

  G.hisOrgasm -= 1;
  G.cumInMouth += 1;
  G.log.push('*CUM* He releases a jet of cum into her mouth.');
  return;
}

export function CumThroat(G: GameState): string|undefined {
  if (G.depth < 3) {
    return INVALID_MOVE;
  }

  G.hisOrgasm -= 1;
  G.cumInMouth += 1;
  G.log.push('*CUM* He shoots a rope of cum down her throat.');
  return;
}

export function CumFace(G: GameState): string|undefined {
  if (G.depth > 0) {
    return INVALID_MOVE;
  }

  G.hisOrgasm -= 1;
  G.log.push('*CUM* He shoots strings of cum across her face.');
  return;
}

export function CumTits(G: GameState): string|undefined {
  if (G.depth > 0) {
    return INVALID_MOVE;
  }

  G.hisOrgasm -= 1;
  G.log.push('*CUM* He spurts cum all over her tits.');
  return;
}
