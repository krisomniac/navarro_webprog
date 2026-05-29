import { Link } from "react-router-dom";
import Button from '../../components/Button';
import articles from '../../Data/article-content.js';
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

const ArticleListPage = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {articles.map((article, index) => (
        <article key={article.name} className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
          <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] bg-zinc-200 overflow-hidden">
            {index === 0 && <img src={dynamite} alt={article.title} className="h-full w-full object-cover" />}
            {index === 1 && <img src={ptd} alt={article.title} className="h-full w-full object-cover" />}
            {index === 2 && <img src={grammy} alt={article.title} className="h-full w-full object-cover" />}
            {index === 3 && <img src={golden} alt={article.title} className="h-full w-full object-cover" />}
            {index === 4 && <img src={military} alt={article.title} className="h-full w-full object-cover" />}
            {index === 5 && <img src={indigo} alt={article.title} className="h-full w-full object-cover" />}
            {index === 6 && <img src={jack} alt={article.title} className="h-full w-full object-cover" />}
            {index === 7 && <img src={dday} alt={article.title} className="h-full w-full object-cover" />}
            {index === 8 && <img src={jimin} alt={article.title} className="h-full w-full object-cover" />}
            {index === 9 && <img src={fan} alt={article.title} className="h-full w-full object-cover" />}
          </div>
          <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {article.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-zinc-900">{article.title}</h3>
          <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            {article.content[0].substring(0, 120)}...
          </p>
          <Link to={`/articles/${article.name}`}>
            <Button className="mt-4">Read More</Button>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default ArticleListPage;