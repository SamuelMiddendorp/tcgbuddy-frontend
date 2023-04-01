export const load = ({fetch, params}) => {
    console.log(params);
    const fetchCard = async (id) => {
        const res = await fetch(`https://dev.tcgbuddy.app/card/${id}`)
        const data = await res.json();
        return data;
    }
    return{
        card: fetchCard(params.cardId)
    }
}