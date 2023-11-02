import Header from "@/components/Header";
import PageContent from "./components/PageContent";
import getAllArtists from "@/actions/getAllArtists";

export const revalidate = 0;

export default async function Home() {
  const artists = await getAllArtists();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">Welcome back</h1>
        </div>
      </Header>
      <PageContent artists={artists} />
    </div>
  );
}
