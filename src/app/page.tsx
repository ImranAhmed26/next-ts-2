import RouteButton from "@/components/custom-buttons/route-btn";
import LandingPage from "@/components/landing-page/homepage";

export default function Home() {
  return (
    <main className=" w-full min-h-screen pt-10 ">
      <div className="flex w-full flex-col justify-between pt-10 items-center">
        {/* <div className="flex gap-4 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <RouteButton urlLink="/members" title="members" />
        <RouteButton urlLink="/counter" title="counter" />
      </div> */}
        <div className="text-violet-700 text-4xl font-bold drop-shadow-lg p-4 bg-white/70 my-4 rounded-lg w-[1000px] text-center">
          The Tyre Agency
        </div>
        <div className="mb-32 min-w-max ">
          <LandingPage />
        </div>
      </div>
    </main>
  );
}
