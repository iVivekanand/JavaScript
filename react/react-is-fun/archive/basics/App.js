// import React, { useEffect, useRef, useState } from "react";
import React, { useState } from "react";
import "./assets/css/style.css";
import Images from "./components/Images";

// class App extends React.Component {
//     constructor(props) {
//         console.log("App Constructor");
//         super(props);
//         this.state = {
//             title: "Hello React from state",
//             isShowing: true,
//         };
//     }

//     componentDidMount() {
//         console.log("App Mounted");
//         // const interval = setInterval(
//         //     () => { console.log("Timer log"); }, 1000
//         // );
//     }

//     componentDidUpdate() {
//         console.log("App Updated");
//     }

//     componentWillUnmount() {
//         console.log("App Unmounted");
//     }

//      handleClick = () => {
//         this.setState({ isShowing: !this.state.isShowing })
//     };

//     render() {
//         console.log("App Render");
//         return (
//             <section className="flex justify-center">
//                 <div className="w-1/2">
//                     <div className="text-center">
//                         <div className="my-4">{this.state.title}</div>
//                         <button
//                             className="10 bg-blue-700 text-white my-2"
//                             onClick={this.handleClick}
//                         >
//                             Toggle Image
//                         </button>
//                     </div>
//                     {
//                         this.state.isShowing && <Images />                        
//                     }
//                 </div>
//             </section>
//         );
//     };
// }

function App() {
    // const [title, setTitle] = useState("Learning ReactJS")
    const [isShowing, setIsShowing] = useState(true)
    // const mountRef = useRef(false)

    // Component will mount
    // useEffect(() => {
    //     setTitle("Learning ReactJS")
    //     console.log("Functional App Mounted");
    // }, []);

    // // Component did update
    // useEffect(() => {
    //     if (mountRef.current) {
    //         console.log("App Updated due to isShowing toggle");
    //     } else {
    //         mountRef.current = true;
    //     }
    // }, [isShowing])

    function handleClick() {
        setIsShowing(!isShowing);
    }

    return (
        <section className="flex justify-center">
        {console.log("Functional App Rendered")}
            <div className="w-5/6">
                <div className="text-center">
                    <div className="my-4">{"Learning ReactJS"}</div>
                    <button
                        className="10 bg-blue-700 text-white my-2"
                        onClick={handleClick}>
                        Toggle Image
                    </button>
                </div>
                {isShowing && <Images />}
            </div>
        </section>
    );
}

export default App;