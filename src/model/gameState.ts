export enum GameDifficulty {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Expert = "Expert"
}

export function toGameDifficulty(difficulty: string): GameDifficulty {
    switch (difficulty) {
        case "Beginner": return GameDifficulty.Beginner;
        case "Intermediate": return GameDifficulty.Intermediate;
        case "Expert": return GameDifficulty.Expert;
        default: return GameDifficulty.Beginner;
    }
}

export class GameState {
    firstClick: boolean;
    difficulty: GameDifficulty;

    constructor(difficulty: GameDifficulty = GameDifficulty.Beginner) {
        this.firstClick = true;
        this.difficulty = difficulty;
    }
}
