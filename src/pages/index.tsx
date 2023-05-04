import Link from "next/link";
import { useRouter } from "next/router";
import FinoCard from "./components/card/fino-card";
import { mockFinoCardProps } from "./components/card/fino-card.mock";
import { useAuthContext } from "./context/auth-context";

export default function Home() {
  const user = useAuthContext();
  const router = useRouter();

  // useEffect(() => {
  //   if (user == null) router.push("/account/login");
  // }, [user]);
  return (
    <div className="flex dark:bg-gray-900">
      <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
        <HomePage />
      </main>
      <div className="order-1"></div>
    </div>
  );
}

function HomePage(): JSX.Element {
  return (
    <div className="p-6">
      <section>
        <div className="flex flex-wrap">
          <Link
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            href="/create-nft"
          >
            Create NFT
          </Link>
          {/* <a
            href="/create-nft"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Create NFT
          </a> */}
        </div>
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Most popular NFT
          </h2>
        </header>
        <div className="grid gap-6 sm:grid-cols-4">
          <FinoCard {...mockFinoCardProps.base} />
          <FinoCard {...mockFinoCardProps.base} />
          <FinoCard {...mockFinoCardProps.base} />
          <FinoCard {...mockFinoCardProps.base} />
          <FinoCard {...mockFinoCardProps.base} />
          <FinoCard {...mockFinoCardProps.base} />
        </div>
      </section>
    </div>
  );
}
