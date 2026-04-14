import Button from "../components/Button";
import articles from "../assets/article-content.js";

const NotFoundPage = () => (
  <div className="flex w-full flex-col items-center justify-center min-h-screen px-4">
    <div className="text-center">
      <h1 className="text-7xl font-bold text-zinc-900">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-zinc-700">
        Page Not Found
      </h2>
      <p className="mt-3 text-zinc-600">
        The page you're looking for doesn't exist or has been moved. There are {articles.length} BTS stories waiting for you on the articles page.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button to="/">GO BACK HOME</Button>
        <Button to="/articles">VIEW ARTICLES</Button>
      </div>
    </div>
  </div>
);

export default NotFoundPage;