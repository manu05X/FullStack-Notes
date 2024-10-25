import { useCallback, useEffect, useState } from "react";
import axios from "axios";
function BannerDynamic() {
  const [popularBackdrops, setPopularBackdrops] = useState([]);

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for managing fade effect

  const next = useCallback(() => {
    setIndex((prevIndex) => {
      const onlastitem = prevIndex === popularBackdrops.length - 1;
      if (onlastitem) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  }, [popularBackdrops.length]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=ed56c93c0c4797988b9b1383eee080f1&language=en-US&page=1"
      )
      .then((res) => {
        const Backdrops = res.data.results.map((moiveObj) => {
          return moiveObj.backdrop_path;
        });

        setPopularBackdrops(Backdrops);
      });
  }, []);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setFade(false); // Trigger fade-out effect

      setTimeout(() => {
        next();
        setFade(true);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(intervalid);
    };
  }, [next]);

  return (
    <div
      className={`h-[20vh] md:h-[80vh] bg-cover flex items-end transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${popularBackdrops[index]})`,
      }}
    ></div>
  );
}

export default BannerDynamic;

/*

import { useState, useEffect } from "react";

const bannerUrls = [
  {
    backdrop_path: "/417tYZ4XUyJrtyZXj7HpvWf1E8f.jpg",
    title: "The Wild Robot",
  },
  {
    backdrop_path: "/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg",
    title: "Alien: Romulus",
  },
  {
    backdrop_path: "/fNylhsI3u6NmTxeanFPDEwvT9GS.jpg",
    title: "Woman of the Hour",
  },
  {
    backdrop_path: "/7h6TqPB3ESmjuVbxCxAeB1c9OB1.jpg",
    title: "The Substance",
  },
  {
    backdrop_path: "/AaYdXkEqExgG66p55J677Qnagpf.jpg",
    title: "Smile 2",
  },
  {
    backdrop_path: "/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
    title: "Deadpool & Wolverine",
  },
  {
    backdrop_path: "/pvE13VXj7WvTDYkng3tTWOTO6Nq.jpg",
    title: "The Shadow Strays",
  },
  {
    backdrop_path: "/xi1VSt3DtkevUmzCx2mNlCoDe74.jpg",
    title: "Beetlejuice Beetlejuice",
  },
  {
    backdrop_path: "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
    title: "Venom: The Last Dance",
  },
  {
    backdrop_path: "/eQEgKIRF7KeVGBQ8IYcklpU8RPf.jpg",
    title: "Terrifier 3",
  },
  {
    backdrop_path: "/yjPXIgY3QoHe8Kt8nEJCz97UF3q.jpg",
    title: "Lee",
  },
  {
    backdrop_path: "/fy5HuDMPAwiGtRQlRP0zqLN3zM4.jpg",
    title: "Outside",
  },
  {
    backdrop_path: "/kzpBVq59Y54ko6BvALt9hDjJDnr.jpg",
    title: "Die Alone",
  },
  {
    backdrop_path: "/69zQPqavgtWhpvWS5dOU0sInjez.jpg",
    title: "Blue Cave",
  },
  {
    backdrop_path: "/oAadr06zrHUQVKdZdgdBojRssPq.jpg",
    title: "Joker: Folie à Deux",
  },
  {
    backdrop_path: "/mpMDztY5OmV7i4ypYpWgqsP4DHs.jpg",
    title: "Bagman",
  },
  {
    backdrop_path: "/7aPrv2HFssWcOtpig5G3HEVk3uS.jpg",
    title: "Twisters",
  },
  {
    backdrop_path: "/p5ozvmdgsmbWe0H8Xk7Rc8SCwAB.jpg",
    title: "Inside Out 2",
  },
  {
    backdrop_path: "/kMZIMqEXO5MFd5Y1Ha2jZZF4pvF.jpg",
    title: "Smile",
  },
  {
    backdrop_path: "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
    title: "Dune: Part Two",
  },
];

function Banner() {
  // State for keeping track of the current banner index
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true); // State for managing fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Trigger fade-out effect

      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % bannerUrls.length); // Update the index
        setFade(true); // Trigger fade-in effect
      }, 500); // Delay to let the fade-out happen before the image changes
    }, 3000); // Change banner every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className={`h-[20vh] md:h-[75vh] bg-cover flex items-end transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerUrls[index].backdrop_path})`,
        }}
      >
        <div className="text-white w-full text-center text-2xl">
          {bannerUrls[index].title}
        </div>
      </div>
    </div>
  );
}

export default Banner;

*/
