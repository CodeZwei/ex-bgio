// Moves

import {INVALID_MOVE} from 'boardgame.io/core';
import type {GameState} from './state';

export function Kiss(G: GameState): string|undefined {
  if (G.depth > 0) {
    return INVALID_MOVE;
  }

  G.arousal += 3;
  G.herArousal += 2;
  G.herBreath = Math.min(100, G.herBreath + 20);
  G.depth = 0;
  G.log.push('Veronica softly kisses the tip of his cock.');
  return;
}

export function Lick(G: GameState): string|undefined {
  if (G.depth > 0) {
    return INVALID_MOVE;
  }

  G.arousal += 3;
  G.herArousal += 2;
  G.herBreath = Math.min(100, G.herBreath + 20);
  G.depth = 0;
  G.log.push('Veronica softly kisses the tip of his cock.');
  return;
}

export function Finger(G: GameState): string|undefined {
  G.herArousal += 10;
  G.log.push('Veronica fingers her pussy.');
  return;
}

export function Rub(G: GameState): string|undefined {
  G.herArousal += 8;
  G.log.push('Veronica rubs her clit.');
  return;
}

export function Swallow(G: GameState): string|undefined {
  if (G.hisOrgasm <= 0 || G.cumInMouth <= 0) {
    return INVALID_MOVE;
  }

  G.arousal += 6;
  G.herArousal += 4;
  G.herBreath -= 5;
  G.cumInMouth = 0;
  G.log.push('*GULP* Veronica swallow a load of cum.');
  return;
}
