import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef();
  useEffect(() => {
    let images = ref.current.querySelectorAll("img"),
      total = images.length,
      current = 0;

    const imageSlider = () => {
      if (current > 0) {
        images[current - 1].classList.add("opacity-0");
      } else {
        images[total - 1].classList.add("opacity-0");
      }
      images[current].classList.remove("opacity-0");
      if (current === total - 1) {
        current = 0;
      } else {
        current += 1;
      }
    };
    imageSlider();
    let interval = setInterval(imageSlider, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [ref]);

  return (
    <div className=" h-full w-full flex items-center gap-x-8 justify-center">
      <div className=" w-[380px] h-[581px] bg-logo-pattern bg-[length:468.32px_634.15px bg-[top_left_-46px] relative">
        <div
          className="w-[250px] h-[538px] absolute top-[27px] right-[18px]"
          ref={ref}
        >
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src=" https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src=" https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src=" https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png"
          />
          <img
            className="w-full h-full absolute top-0 left-0 opacity-0 transition-opacity duration-1000 ease-linear"
            src=" https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png"
          />
        </div>
      </div>
      <div className="w-[350px]  bg-white border p-[50px] pb-2">
        <a href="#" className="flex justify-center">
          <img
            className="h-[51px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          />
        </a>

        <form>
          <label className="block relative">
            <input
              type="text"
              className=" bg-zinc-50 border px-2 rounded-sm w-full outline-none focus:border-gray-400 h-[38px]"
            />
            <small className="absolute top-1/2 left-2 cursor-text pointer-events-none   text-xs text-gray-500 -translate-y-1/2">
              Phone Number, username or email
            </small>
          </label>
        </form>
      </div>
    </div>
  );
}

export default App;
