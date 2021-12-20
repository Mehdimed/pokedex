export class Pokemon {
    id!: number;
    name!: string;
    type!: string[];
    base!: {
        Attack: number;
        Defense: number;
        HP: number;
        "Sp. Attack": number;
        "Sp. Defense": number;
        Speed: number;
    }
}