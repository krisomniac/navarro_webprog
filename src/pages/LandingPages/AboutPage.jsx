<<<<<<< HEAD:navarro-client/src/pages/AboutPage.jsx
import Button from "../components/Button";
import groupphoto from "../images/group.jpg";
=======
import Button from "../../components/Button";
import articles from "../../assets/article-content.js";
import groupphoto from "../../images/group.jpg";
>>>>>>> 2e1aca9 (lab-act5):navarro-client/src/pages/LandingPages/AboutPage.jsx

const AboutPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
            <div className="flex min-h-72 items-center justify-center rounded-[1.25rem] overflow-hidden">
              <img
                src={groupphoto}
                alt="BTS Group"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              About BTS
            </p>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
              The Seven Members Who Changed the World
            </h1>

            <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
              BTS, also known as Bangtan Sonyeondan, is a seven-member South Korean boy band formed by Big Hit Entertainment. They have revolutionized the music industry with their meaningful lyrics and powerful performances.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/" variant="primary">
                Back Home
              </Button>
              <Button to="/articles">Latest News</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            BTS Achievements
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            Breaking Records Worldwide
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">10</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Years Active
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">12</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Studio Albums
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">500</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Music Awards
            </p>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-2xl font-bold text-zinc-900">30</p>
            <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
              Billboard #1s
            </p>
          </div>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              BTS Journey
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              From Debut to Global Phenomenon
            </h2>

            <div className="mt-6 space-y-4">
              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Formation & Debut
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Formed in 2013 by Big Hit Entertainment, BTS debuted in 2013 with their single album "2 Cool 4 Skool," introducing their unique blend of hip-hop, pop, and meaningful lyrics.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Rise to Fame
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  Through social media and authentic connection with fans, BTS broke barriers in the global music industry, becoming the first K-pop group to top the Billboard Hot 100.
                </p>
              </article>

              <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  Global Impact & Legacy
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  BTS has transcended music to become cultural ambassadors, advocating for mental health awareness and breaking stereotypes about K-pop worldwide.
                </p>
              </article>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              BTS Moments
            </p>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>

              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>

              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>

              <div className="flex aspect-square items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>
            </div>

            <Button className="mt-5">View Section</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
