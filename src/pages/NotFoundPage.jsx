import Button from "../components/Button";
import groupphoto from "../images/group.jpg";
import Navbar from "../components/Navbar";

const NotFoundPage = () => {
  return (
    <div className="flex w-full flex-col">
      <Navbar />

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
              A clean wireframe section for article thumbnails, titles, short descriptions, and one clear action per card.
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
            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Music Release
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                BTS Drops New Single "Dynamite"
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                BTS makes history again with their latest English single that topped charts worldwide, showcasing their incredible musical evolution.
              </p>
              <Button className="mt-4">Read More</Button>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Tour News
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                Permission to Dance World Tour Announced
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                BTS announces their highly anticipated world tour with dates across North America, Europe, and Asia. ARMY worldwide celebrates!
              </p>
              <Button className="mt-4">Read More</Button>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Award Win
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                BTS Wins Grammy for Best Pop Duo/Group
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                BTS makes history as the first K-pop group to win a Grammy Award, receiving the prestigious honor for their groundbreaking achievements.
              </p>
              <Button className="mt-4">Read More</Button>
            </article>

            <article className="rounded-3xl border-2 border-zinc-900 bg-zinc-100 p-4">
              <div className="flex aspect-4/3 items-center justify-center rounded-[1.25rem] overflow-hidden bg-zinc-200">
                <img src={groupphoto} alt="BTS Group" className="w-full h-full object-cover" />
              </div>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
                Fan Event
              </p>
              <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                BTS ARMY Fan Meeting in Los Angeles
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                BTS hosts an exclusive fan meeting in Los Angeles, connecting with ARMY and sharing behind-the-scenes moments from their latest projects.
              </p>
              <Button className="mt-4">Read More</Button>
            </article>
          </div>
        </section>

    
        <footer className="bg-zinc-900 text-zinc-300">
          
          <div className="px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
           
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">BTS ARMY</h3>
                <p className="text-sm leading-relaxed">
                  Your ultimate destination for BTS news, updates, and exclusive content. Stay connected with the global ARMY community.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="transition-colors hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12z"/>
                    </svg>
                  </a>
                  <a href="#" className="transition-colors hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.67-11.58c0-.211-.005-.422-.015-.633a9.94 9.94 0 002.46-2.538l-.047-.02z"/>
                    </svg>
                  </a>
                  <a href="#" className="transition-colors hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="#" className="transition-colors hover:text-white">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>

             
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Quick Links
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="transition-colors hover:text-white">News</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Tour Dates</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Discography</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Videos</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Gallery</a></li>
                </ul>
              </div>

              
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Resources
                </h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="transition-colors hover:text-white">Fan Club</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Merchandise</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Community</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">Support</a></li>
                  <li><a href="#" className="transition-colors hover:text-white">FAQ</a></li>
                </ul>
              </div>

           
              <div className="space-y-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Stay Updated
                </h4>
                <p className="text-sm">Subscribe to our newsletter for exclusive updates and behind-the-scenes content.</p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm text-white placeholder-zinc-400 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-700"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>

            
            <div className="my-8 border-t border-zinc-800"></div>

        
            <div className="flex flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row sm:text-left">
              <p>© 2024 BTS ARMY. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
                <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
                <a href="#" className="transition-colors hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default NotFoundPage;