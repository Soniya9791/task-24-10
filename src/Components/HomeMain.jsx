import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HomeMain = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-violet-400 font-medium">
          Better every day
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
        There is no sincerer love than the love of food
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        we believe that food is more than just sustenance; it's an experience that brings people together. Our menu features a delightful array of dishes crafted from the freshest ingredients, celebrating flavors from around the world. From hearty comfort foods to vibrant, healthy options, every bite is designed to tantalize your taste buds and nourish your soul.
        </p>
        <button className="bg-violet-400 text-white font-medium py-2 px-4 rounded transition-all hover:bg-violet-400 active:scale-95">
          Find Here..!
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://i.pinimg.com/enabled_hi/474x/2b/64/e1/2b64e15ac11687bb3074b9f7abc87edd.jpg",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/enabled_hi/474x/c5/2d/45/c52d454bf256841ea8934cd3d760d7b1.jpg",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/enabled_hi/474x/52/1a/01/521a01d28f8bc09a8042ee20a0f6451c.jpg",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/enabled_hi/474x/07/37/1a/07371a5299ecdc51bbb2dfff5b59ba47.jpg",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/474x/7f/31/26/7f31260e38b21c9df822d05af0ae4a93.jpg",
  },
  {
    id: 6,
    src: "https://i.pinimg.com/enabled_hi/474x/f3/7d/59/f37d59dff6a4e7791e2504964f668b61.jpg",
  },
  {
    id: 7,
    src: "https://i.pinimg.com/enabled_hi/474x/d5/cd/58/d5cd58a8e16b9e1bfb8055cd4079e673.jpg",
  },
  {
    id: 8,
    src: "https://i.pinimg.com/enabled_hi/474x/90/2c/87/902c87a8a3987143d7fd3b3ac12d4e14.jpg",
  },
  {
    id: 9,
    src: "https://i.pinimg.com/474x/45/ea/35/45ea3550e0d489d764e68ffb19a6b023.jpg",
  },
  {
    id: 10,
    src: "https://i.pinimg.com/enabled_hi/474x/14/89/22/148922d9b9421286326ec5d2adbf2932.jpg",
  },
  {
    id: 11,
    src: "https://i.pinimg.com/enabled_hi/474x/2f/8b/5d/2f8b5d0bf6e405594cc26a83dd3daaa4.jpg",
  },
  {
    id: 12,
    src: "https://i.pinimg.com/enabled_hi/474x/e8/df/d1/e8dfd1f933d13310ab29c5d50150ee1d.jpg",
  },
  {
    id: 13,
    src: "https://i.pinimg.com/enabled_hi/474x/41/c7/bf/41c7bf3422cff4a9ac1fb49f4d545513.jpg",
  },
  {
    id: 14,
    src: "https://i.pinimg.com/enabled_hi/474x/d5/df/d3/d5dfd38026e2b5a460efb75aad63193f.jpg",
  },
  {
    id: 15,
    src: "https://i.pinimg.com/474x/a1/20/ba/a120baf63080269383bb9d7bade720a5.jpg",
  },
  {
    id: 16,
    src: "https://i.pinimg.com/474x/a1/20/ba/a120baf63080269383bb9d7bade720a5.jpg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HomeMain;