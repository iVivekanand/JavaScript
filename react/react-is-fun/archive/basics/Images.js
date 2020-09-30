// import React, { Component } from 'react'

// export default class Images extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { interval: null };
//     }

//     componentDidMount() {
//         console.log("Images Component Mounted");
//         this.setState(
//             {
//                 interval: setInterval(
//                     () => { console.log("Timer log"); },
//                     1000,
//                 )
//             }
//         );
//     }

//     componentWillUnmount() {
//         console.log("Images Component Unmounted");
//         clearInterval(this.state.interval);
//     }

//     render() {
//         let imgSrc = "https://images.unsplash.com/photo-1600880291319-1a7499c191e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
//         return (
//             <img src={imgSrc} alt="Upslash-test-img"></img>
//         )
//     }
// }


import React, { useState } from 'react'
// import React, { useEffect } from 'react'

export default function Images() {
    // useEffect(() => {
    //     console.log("Images Component Mounted");
    //     const interval = setInterval(() => {
    //         console.log("Images timer");
    //     }, 1000)

    //     return () => {
    //         console.log("Images Component Unmounted");
    //         clearInterval(interval);
    //         console.log("Images Timer stopped");
    //     };
    // }, []);

    
    let imgSrcList_ = [
        "https://images.unsplash.com/photo-1597926588114-2d9c1190b5c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1223&q=80",
        "https://images.unsplash.com/photo-1600880291319-1a7499c191e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1600682575515-c5624e1f885a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1341&q=80",
        "https://images.unsplash.com/photo-1591457719994-cc82d6add2c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
        "https://images.unsplash.com/photo-1543879647-21cd56206249?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1600493505423-474fea65ad9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80",
        "https://images.unsplash.com/photo-1600376456587-b9ce4b52a372?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
        "https://images.unsplash.com/photo-1503122703469-3dbbe39d0d1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    ];

    const [imgSrcList, setImgSrcList] = useState(imgSrcList_)
    const [url, setUrl] = useState("")

    function ShowImage(params) {
        return imgSrcList.map((image) => {
            return (
                <div className="w-1/5 my-1 mx-1 flex justify-center">
                    <img src={image} width="auto" alt="Unsplash-image-" />
                </div>
            )
        })
    }

    function handleAdd() {
        // console.log(`Add button clicked with "${url}"`);
        url && setImgSrcList([...imgSrcList, url]);
        setUrl("");
    }

    function handleChange(e) {
        setUrl(e.target.value);
    }

    return (
        <section>
            <div className="flex flex-wrap justify-center">
                <ShowImage />
            </div>
            <div className="flex justify-between my-5">
                <div className="w-full">
                    <input
                        type="text"
                        className="p-2 border border-gray-800 shadow rounded w-full"
                        value={url}
                        onChange={handleChange}
                    />
                </div>
                <div className="">
                    <button disabled={url===""} className={`p-2 text-white ${
                        url ? "bg-green-700" : "bg-green-200"
                    } ml-1`} onClick={handleAdd}>Add</button>
                </div>
            </div>
        </section>
    )
}
