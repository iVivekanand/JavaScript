import React, { useState, useRef } from 'react';
import Image from './image';
import useFetchImage from '../utils/hooks/useFetchImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import useDebounce from '../utils/hooks/useDebounce';

export default function Images() {
    const inputRef = useRef(null);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [images, setImages, errors, isLoading] = useFetchImage(page, searchTerm);
    const debounce = useDebounce();

    function handleRemove(index) {
        setImages([...images.slice(0, index), ...images.slice(index + 1, images.length)]);
    }

    function ShowImage() {
        return (<InfiniteScroll
            dataLength={images.length}
            next={() => setPage(page + 1)}
            hasMore={true}
            className="flex flex-wrap gap-0">
            {images.map((img, index) => (
                <Image
                    image={img.urls.regular}
                    handleRemove={handleRemove}
                    key={index}
                    index={index}
                />
            ))}
        </InfiniteScroll>)
    }

    function handleInput(e) {
        const text = e.target.value;
        if (text === "") {
            setPage(1);
        }
        debounce(() => setSearchTerm(text));
    }

    return (
        <section>
            {
                errors.length > 0 &&
                (<div className="flex h-screen">
                    <p className="m-auto">{errors[0]}</p>
                </div>)
            }
            <div className="w-full">
                <input
                    type="text"
                    ref={inputRef}
                    className="p-2 border border-gray-800 shadow rounded w-full"
                    onChange={handleInput}
                    placeholder="Type your search phrase here."
                />
            </div>
            <ShowImage />
            {isLoading && <Loading />}
        </section>
    )
}
