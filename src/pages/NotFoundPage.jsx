import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
        404
      </p>
      <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
        Page Not Found
      </h1>
      <p className="max-w-md text-sm text-zinc-600">
        The page you're looking for doesn't exist or has been moved. There are 10 BTS stories waiting for you on the articles page.
      </p>
      <div className="flex gap-3">
        <Button to="/" variant="secondary">Go Back Home</Button>
        <Button to="/articles" variant="primary">View Articles</Button>
      </div>
    </div>
  );
};

export default NotFoundPage;