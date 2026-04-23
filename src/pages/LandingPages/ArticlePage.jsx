import { useParams } from 'react-router-dom';
import Button from "../../components/Button";
import articles from "../../assets/article-content.js";
import dynamite from '../../images/dynamite.jpg';
import ptd from '../../images/PTD.png';
import grammy from '../../images/grammy.jpg';
import golden from '../../images/golden.png';
import military from '../../images/military.jpg';
import indigo from '../../images/indigo.jpg';
import jack from '../../images/jack.avif';
import dday from '../../images/dday.jpg';
import jimin from '../../images/jimin.png';
import fan from '../../images/fan.webp';

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find(article => article.name === name);


  if (!article) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">Article not found</h1>
            <Button to="/articles" className="mt-6">Back to Articles</Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4">
            <Button to="/articles">← Back to Articles</Button>
          </div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            {article.category}
          </p>
          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-2 text-sm text-zinc-500">
            {article.date} • ⏱️ {article.readTime}
          </p>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] border-2 border-zinc-900 bg-zinc-200 mb-8 overflow-hidden">
            {imageSource ? (
              <img 
                src={imageSource} 
                alt={article.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-zinc-100 text-sm text-zinc-500">
                No image available
              </div>
            )}
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-zinc-700">
            {article.content.map((paragraph, index) => (
              <p key={index} className="text-base leading-7 text-zinc-700 whitespace-pre-wrap">
                {paragraph}
              </p>
            ))}
          </div>

          {article.keyMoments && article.keyMoments.length > 0 && (
            <div className="mt-8 p-6 bg-zinc-100 rounded-2xl border-2 border-zinc-900">
              <h3 className="text-lg font-semibold text-zinc-900 mb-4">Key Moments</h3>
              <ul className="space-y-3">
                {article.keyMoments.map((moment, index) => (
                  <li key={index} className="text-sm text-zinc-700 flex items-start">
                    <span className="mr-3 inline-block h-2 w-2 rounded-full bg-zinc-900 flex-shrink-0 mt-2" />
                    {moment}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 border-t-2 border-zinc-900 pt-6">
            <Button to="/articles">Back to Articles</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;