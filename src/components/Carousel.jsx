import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Carousel({
  children: slides,
  autoslide = false,
  autoslideInterval = 3000,
}) {
  const [curr, setcurr] = useState(0);
  const prev = () =>
    setcurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setcurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  useEffect(() => {
    if (!autoslide) return;
    const slideInterval = setInterval(next, autoslideInterval);
    return () => clearInterval(slideInterval);
  }, []);
  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-accent/50 text-black hover:bg-accent"
        >
          <FaChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-accent/80 text-black hover:bg-accent"
        >
          <FaChevronRight size={30} />
        </button>
      </div>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`transition-all w-1 h-1 bg-accent rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
              onClick={() => setcurr(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
