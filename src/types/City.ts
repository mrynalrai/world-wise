import Position from "./Position"

type City = {
    cityName: string,
    country: string,
    emoji: string,
    date: Date,
    notes: string,
    position: Position,
    id: number
}

export default City;