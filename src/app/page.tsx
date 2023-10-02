import RouteButton from '@/components/custom-buttons/route-btn';
import LandingPage from '@/components/landing-page/homepage';

export default function Home() {
  return (
    <main className=" w-full min-h-screen pt-10 ">
      <div className="flex w-full flex-col justify-between pt-10 items-center">
        <div>
          <LandingPage />
        </div>
      </div>
    </main>
  );
}
