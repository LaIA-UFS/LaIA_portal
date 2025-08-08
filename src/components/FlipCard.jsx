import { useState } from "react";

function FlipCard({ frontImg, backImg, disableFlip = false }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-[260px] h-[260px] [perspective:1000px] cursor-pointer"
      onClick={() => !disableFlip && setFlipped(!flipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Frente */}
        <div className="absolute w-full h-full [backface-visibility:hidden]">
          <img
            src={frontImg}
            alt="Frente"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>

        {/* Verso */}
        <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <img
            src={backImg}
            alt="Verso"
            className="w-full h-full object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
export default FlipCard;