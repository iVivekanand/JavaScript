import Axios from 'axios';
import { useEffect, useState } from 'react';

const api = process.env.REACT_APP_UNSPLASH_API
const clientId = process.env.REACT_APP_UNSPLASH_CLIENT_ID

export default function useFetchImage(page, searchTerm) {
    const [images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function fetchSearch(res) {
        (page > 1) ?
            setImages([...images, ...res.data.results]) :
            setImages([...res.data.results]);
    }

    function fetchRandom(res) {
        (page > 1) ?
            setImages([...images, ...res.data]) :
            setImages([...res.data]);
    }

    function fetch() {
        let url = (searchTerm === "") ? "photos?" : `search/photos?query=${searchTerm}&`;
        Axios.get(`${api}${url}client_id=${clientId}&page=${page}`)
            .then((res) => {
                (searchTerm === "") ?
                    fetchRandom(res) :
                    fetchSearch(res);
                setIsLoading(false);
            })
            .catch((e) => {
                // setErrors(e.response.data)
                setErrors(["Unable to fetch images !!!"])
                setIsLoading(false);
            });
    }

    useEffect(() => {
        setIsLoading(true);
        fetch();
    }, [page, searchTerm]);

    return [images, setImages, errors, isLoading];
}
