import axios from 'axios';

const KEY = 'AIzaSyDKh_UK6v9czQJrnfG_CIR6-2DOTGARdKU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


