import Button from "../../components/Button";
import articles from "../../assets/article-content.js";
import groupphoto from "../../images/group photo.jpg";
import album from "../../images/album.jpg";
import tour from "../../images/tour.webp";
import army from "../../images/army.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Welcome to the ARMY
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              Discover BTS
              <span className="block text-red-600">The Global Phenomenon</span>
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              Join millions of fans worldwide celebrating BTS's music, artistry, and impact on culture. Experience the power of K-pop's biggest sensation.
            </p>

            <div className="mt-6 flex gap-4">
              <Button to="/about" variant="primary">
                Join the ARMY
              </Button>
              <Button 
                onClick={() => navigate("/dashboard")} 
                variant="secondary"
              >
                Go to Dashboard
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-65 items-center justify-center rounded-[1.25rem] overflow-hidden">
              <img
                src={groupphoto}
                alt="BTS Group Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            KPI Section
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Quick overview blocks
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Projects
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">08</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Sections
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">24</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Screens
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">04</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Layouts
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Explore BTS
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Discover Their World
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
            Browse {articles.length} BTS stories, news updates, and career highlights from across the ARMY universe.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
              <img src={album} alt="BTS Albums" className="w-full h-full object-cover" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              Music & Albums
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Dive deep into BTS's incredible discography, from debut tracks to their latest masterpieces that have captivated millions worldwide.
            </p>

            <Button className="mt-4" variant="primary">
              Explore Music
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
              <img src={tour} alt="BTS World Tours" className="w-full h-full object-cover" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              World Tours
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Experience the magic of BTS's sold-out concerts and performances that have united fans across the globe in unforgettable moments.
            </p>

            <Button className="mt-4" variant="primary">
              View Tours
            </Button>
          </article>

          <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
            <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
              <img src={army} alt="ARMY Community" className="w-full h-full object-cover" />
            </div>

            <h3 className="mt-4 text-lg font-semibold text-zinc-900">
              ARMY Community
            </h3>

            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Join the passionate ARMY community celebrating BTS's impact on music, culture, and mental health awareness worldwide.
            </p>

            <Button className="mt-4" variant="primary">
              Join ARMY
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
};

export default HomePage;