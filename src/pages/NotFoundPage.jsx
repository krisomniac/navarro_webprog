import React from 'react';
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import groupphoto from "../images/group.jpg";

function NotFoundPage() {
  return (
    <div className="flex w-full flex-col">
      <Navbar />
      
      <div className="flex w-full flex-col gap-6 pt-20">
        {/* Hero Section */}
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
                Error 404
              </p>

              <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
                Oops! Page Not Found
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
                The page you're looking for seems to have wandered off into the digital wilderness. 
                The link you followed might be broken or the page may have been removed.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button to="/" variant="primary">
                  Back to Home
                </Button>
                <Button to="/articles">Browse Articles</Button>
              </div>
            </div>

            <div className="rounded-3xl border-2 border-dashed border-zinc-300 bg-zinc-100 p-6">
              <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-[1.25rem]">
                <div className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-zinc-200 bg-zinc-100">
                      <svg className="h-16 w-16 text-zinc-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-6xl font-black text-zinc-900">404</p>
                  <p className="mt-2 text-sm text-zinc-500">Page not found</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Suggested Pages Section */}
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mb-6 text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
              You Might Be Looking For
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
              Popular Pages on Our Site
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 text-center">
              <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Home</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Discover BTS - The Global Phenomenon
              </p>
              <Button to="/" className="mt-4">Go to Home</Button>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 text-center">
              <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">About BTS</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                The Seven Members Who Changed the World
              </p>
              <Button to="/about" className="mt-4">Learn More</Button>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 text-center">
              <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Latest News</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Stay updated with BTS News and Updates
              </p>
              <Button to="/articles" className="mt-4">Read News</Button>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4 text-center">
              <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-[1.25rem] bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-zinc-900">Join ARMY</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Connect with the global ARMY community
              </p>
              <Button to="/about" className="mt-4">Join Now</Button>
            </article>
          </div>
        </section>

        {/* Helpful Links Section */}
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-zinc-500">
              Can't find what you're looking for?{' '}
              <a href="/" className="font-semibold text-zinc-900 underline hover:no-underline">
                Return to homepage
              </a>{' '}
              or{' '}
              <a href="/articles" className="font-semibold text-zinc-900 underline hover:no-underline">
                browse our latest articles
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NotFoundPage;