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
        ]
        }
    }
}