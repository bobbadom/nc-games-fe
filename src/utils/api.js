import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://bobs-brilliant-backend-project.herokuapp.com/api"
})

export const getReviews = (category, sortBy, orderBy) => {

    return gamesApi.get(`/reviews`, { params: { category: category, sort_by: sortBy, order: orderBy } })
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

export const getUsers = () => {
    return gamesApi.get('/users')
        .then((res) => {
            return res.data
        })
}