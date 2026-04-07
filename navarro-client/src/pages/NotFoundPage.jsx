import Button from "../components/Button";

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center min-h-screen px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-zinc-900">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-700">
          Page Not Found
        </h2>
        <p className="mt-3 text-zinc-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Button to="/">GO BACK HOME</Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;