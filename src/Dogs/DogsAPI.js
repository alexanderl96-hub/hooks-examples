import axios from "axios"

export const getDog = async () => {
    const { data } = await axios.get("https://dog.ceo/api/breeds/image/random")
    return data.message
}

export const getDogs = async (num) => {
    const { data } = await axios.get(`https://dog.ceo/api/breeds/image/random/${num}`)
    return data.message
}