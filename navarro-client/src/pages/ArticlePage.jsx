import Button from "../components/Button";
import groupphoto from "../images/group.jpg";

const ArticlePage = () => {
  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
          BTS News
        </p>

        <h1 className="max-w-xl text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
          Latest BTS News and Updates
        </h1>

        <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 sm:text-base">
          Stay updated with the latest BTS news, music releases, tour announcements, and exclusive interviews from the global K-pop sensation.
        </p>

        <div className="mt-6">
          <Button to="/">Back Home</Button>
        </div>
      </section>

      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Featured Stories
          </p>

          <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
            BTS News & Updates
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
    </div>
  );
};

export default ArticlePage;
