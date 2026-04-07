import Button from '../components/Button';
import ArticleList from '../components/ArticleList';
import articles from '../assets/article-content.js';

const ArticleListPage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-purple-200 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          BTS ARMY
        </p>
        <h1 className="max-w-2xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          BTS News, Updates, and Exclusive Stories
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
          Stay updated with the latest BTS news, music releases, tour announcements, award wins, and solo projects. Your ultimate destination for everything Bangtan.
        </p>
        <div className="mt-6">
          <Button to="/" variant="primary">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-purple-200 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Latest Stories
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">BTS News & Updates</h2>
        </div>

        <ArticleList articles={articles} />
      </section>
    </div>
  );
};

export default ArticleListPage;