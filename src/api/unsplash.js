import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7922e9f03ef26a25701699d924b5820f7143444b647746b3f0e770881642aefa'
    }
})

// const searchImages = (term) => {

// }