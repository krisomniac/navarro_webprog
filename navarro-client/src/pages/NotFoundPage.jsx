import Button from "../components/Button";
import groupphoto from "../images/group.jpg";
import Navbar from "../components/Navbar";
import articles from "../Data/article-content.js";

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col">
      <Navbar />

      {/* 404 Section */}
      <div className="flex w-full flex-col items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-zinc-900">404</h1>
          <h2 className="mt-4 text-2xl font-semibold text-zinc-700">
            Page Not Found
          </h2>
          <p className="mt-3 text-zinc-600">
            The page you're looking for doesn't exist or has been moved. There
            are {articles.length} BTS stories waiting for you on the articles
            page.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">GO BACK HOME</Button>
            <Button to="/articles">VIEW ARTICLES</Button>
          </div>
        </div>
      </div>

      {/* Featured Articles Section */}
      <div className="flex w-full flex-col gap-6 pt-20">
        <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              Article Here
            </p>
            <h1 className="mt-4 text-3xl font-bold text-zinc-900 sm:text-4xl">
              Featured articles in a simple card grid
            </h1>
            <p className="mt-3 text-sm text-zinc-600">
              A clean wireframe section for article thumbnails, titles, short
              descriptions, and one clear action per card.
            </p>
            <div className="mt-6">
              <Button to="/" variant="secondary">
                BACK MORE
              </Button>
            </div>
          </div>
        </section>

        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              While You're Here
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Check Out These Featured Stories
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {/* Example article card */}
            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img
                  src={groupphoto}
                  alt="BTS Group"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Music Release
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                BTS Drops New Single "Dynamite"
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                BTS makes history again with their latest English single that
                topped charts worldwide, showcasing their incredible musical
                evolution.
              </p>
              <Button className="mt-4">Read More</Button>
            </article>
            {/* Add other cards here (Tour News, Award Win, Fan Event) */}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-900 text-zinc-300">
          <div className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">BTS ARMY</h3>
                <p className="text-sm leading-relaxed">
                  Your ultimate destination for BTS news, updates, and exclusive
                  content. Stay connected with the global ARMY community.
                </p>
              </div>
              {/* Quick Links, Resources, Stay Updated sections */}
            </div>
            <div className="my-8 border-t border-zinc-800"></div>
            <div className="flex flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row sm:text-left">
              <p>© 2024 BTS ARMY. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="transition-colors hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="transition-colors hover:text-white">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NotFoundPage;
