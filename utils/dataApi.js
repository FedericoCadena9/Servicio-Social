import axios from 'axios';

export const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const dataApi = async (url) => {
    const {data} = await axios.get((url));

    return data;
}

