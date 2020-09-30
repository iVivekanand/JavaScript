import { useState } from 'react'

export default function useDebounce() {
    const [typeTime, setTypeTime] = useState("");

    function debounce(func, waitTime=1000) {
        clearTimeout(typeTime);
        const timeout = setTimeout(() => {
            func();
        }, waitTime);
        setTypeTime(timeout);
    }
    return debounce;
}
