import React, { useState } from "react";
const images = [
  { img: require("./assets/closeup-shot-beautiful-bald-eagle-with-blurred-background.jpg") },
  { img: require("./assets/pexels-frank-cone-3908080.jpg") },
  { img: require("./assets/pexels-pixabay-48132.jpg") },
  { img: require("./assets/vertical-closeup-shot-bald-eagle-while-flying-sky.jpg") },
  { img: require("./assets/pexels-brett-sayles-1098888.jpg") },
];
let index = 0;
const App = () => {
  const [store, setstore] = useState({
    img: require("./assets/closeup-shot-beautiful-bald-eagle-with-blurred-background.jpg"),
  })
  const nextbtn = () => {
    index++
    if (index == images.length) {
      index = 0;
    }
    setstore(images[index])
  };
  const prevbtn = () => {
    index--;
    if (index < 0) {
      index = images.length-1
    }
    setstore(images[index]);
  };
  return (
    <div className="flex justify-center items-center h-screen gap-2">
      <div onClick={prevbtn} className="hover:bg-slate-400 transition-all duration-500 p-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
      </div>
        <figure className="flex w-1/2 md:w-1/4 p-2 bg-gradient-to-r from-gray-500 to-emerald-400 ring-2 ring-black shadow-inner">
          <img src={store.img} className="h-96 flex-grow ring-white ring-2"></img>
        </figure>
      
      <div onClick={nextbtn} className="hover:bg-slate-400 transition-all duration-500 p-2 rounded">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default App;
