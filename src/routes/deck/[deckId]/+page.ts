export const load = ({params}) => {
    return{
        deck: {
            "name": `deck${params.deckId}`,
            "description": "A nice deck to play that is not hard to learn",
            "difficulty": "Easy",
            "stats": [
                {
                    "type": "mainAttacker",
                    "card": "Zapdos"
                },
                {
                    "type": "benchSupport",
                    "card": "Manaphy"
                },
                {
                    "type": "synergySupporter",
                    "card": "Sonia"
                }
        ],
            cardList: [
                {
                    "type": "Pokemon",
                    "id": "swsh1-1",
                    "count": 2,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Trainer",
                    "id": "swsh1-2",
                    "count": 4,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Pokemon",
                    "id": "swsh1-3",
                    "count": 2,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Energy",
                    "id": "swsh1-4",
                    "count": 2,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Pokemon",
                    "id": "swsh1-5",
                    "count": 1,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Pokemon",
                    "id": "swsh1-6",
                    "count": 2,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Energy",
                    "id": "swsh1-7",
                    "count": 1,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Energy",
                    "id": "swsh1-8",
                    "count": 4,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
                {
                    "type": "Energy",
                    "id": "swsh1-9",
                    "count": 42,
                    "image": "https://images.pokemontcg.io/swsh1/1.png" 
                },
            ]
    
        }
    }
}