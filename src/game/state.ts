/** Game State */
export interface GameState {
  arousal: number;
  hisGrip: number;
  hisOrgasm: number;

  herArousal: number;
  herBreath: number;
  herOrgasm: number;

  depth: number;
}

export const initialState: GameState = {
  arousal: 0,
  hisGrip: 0,
  hisOrgasm: 0,

  herArousal: 0,
  herBreath: 100,
  herOrgasm: 0,

  depth: 0,
};
