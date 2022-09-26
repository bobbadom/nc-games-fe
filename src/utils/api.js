import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://bobs-brilliant-backend-project.herokuapp.com/api"
})

export const getReviews = () => {
    return gamesApi.get('/reviews')
        .then((res) => {
            return res.data
        })
}

export const getCategories = () => {
    return gamesApi.get('/categories')
        .then((res) => {
            return res.data
        })
}