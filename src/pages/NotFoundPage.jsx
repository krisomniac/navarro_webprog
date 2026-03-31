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
      </div>
    </div>
  );
};

export default NotFoundPage;