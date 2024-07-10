import PlayArea from "./components/PlayArea";

export default function Home() {
  return (
    <main className="font-retro flex min-h-screen flex-col items-center relative px-6 pb-10">
      <video className="" autoPlay loop muted>
        <source src="dice.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <img
        className="w-80 absolute top-40"
        loading="lazy"
        src="logo.png"
        alt="logo"
      />
      <PlayArea />
      <div className="block md:hidden mt-6">
        <div className="flex gap-5">
          <p className="text-[#FF186C]">red = 1x</p>
          <p className="text-[#FF902A]">orange = 2x</p>
          <p className="text-[#FFE924]">yellow = 3x</p>
        </div>
        <div className="flex gap-5 mt-2">
          <p className="text-[#00FFC2]">green = 4x</p>
          <p className="text-[#1A9FFF]">blue = 5x</p>
          <p className="text-[#AE4DFF]">purple = 6x</p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-12 border rounded-md mt-10 md:mt-14 py-4">
        <div className="col-span-10 border-r">
          <h4 className="text-lg text-[#4FFFFF] text-center md:ml-56">
            GAMEPLAY
          </h4>
          <div className="flex flex-col gap-1 text-white text-sm px-6 mt-2">
            <p>
              1. Each player rolls 6 dice (mints an NFT). A player can
              roll/mintup to 10 times per wallet.
            </p>
            <p>
              2. Score is calculated by multiplying the face value of each die
              by its color multiplier, and taking the sum of those 6 figures.
            </p>
            <p className="text-[#4FFFFF]">3. High dice wins.</p>
          </div>
          <h4 className="text-lg text-[#4FFFFF] text-center md:ml-56 mt-4">
            TIEBREAKER
          </h4>
          <div className="flex flex-col gap-1 text-white text-sm px-6 mt-2">
            <p>
              1. In the event of tie, the roll with the most like-colors wins.
            </p>
            <p>
              2. If the event of another tie, the roll with most like-numbers
              wins.
            </p>
            <p>
              3. In the event of another tie, the roll with the highest single
              dice score (including the multiplier) wins.
            </p>
          </div>
        </div>
        <div className="col-span-2 hidden md:flex flex-col gap-5 text-end pr-5">
          <p className="text-[#FF186C]">red = 1x</p>
          <p className="text-[#FF902A]">orange = 2x</p>
          <p className="text-[#FFE924]">yellow = 3x</p>
          <p className="text-[#00FFC2]">green = 4x</p>
          <p className="text-[#1A9FFF]">blue = 5x</p>
          <p className="text-[#AE4DFF]">purple = 6x</p>
        </div>
      </div>
    </main>
  );
}
