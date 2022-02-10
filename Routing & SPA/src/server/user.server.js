import axios from "axios";

export const getUserDetails = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return data;
}


export const getUserDetailsById = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data;
}

export const getUserPostsById = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
    return data;
}

export const getUserToDoById = async (id) => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);

    return data;

}
