/** Game State */
export interface GameState {
  arousal: number;
  hisGrip: number;
  hisOrgasm: number;

  herArousal: number;
  herBreath: number;
  herOrgasm: number;
  cumInMouth: number;

  depth: number;

  log: string[];
}

export const initialState: GameState = {
  arousal: 0,
  hisGrip: 0,
  hisOrgasm: 0,

  herArousal: 0,
  herBreath: 100,
  herOrgasm: 0,
  cumInMouth: 0,

  depth: 0,

  log: ['Veronica sits on her knees staring up at the cock infront of her.'],
};
