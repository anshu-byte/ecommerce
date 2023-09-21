import Head from "next/head";
import { useRouter } from "next/router";
import { HiCheckCircle } from "react-icons/hi";
import Navbar from "../components/Navbar";

const ThankYou = () => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>Thank You</title>
                <meta name="description" content="All Products" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto">
                <Navbar />
                <div className="p-4 mt-8 rounded-md bg-green-50">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <HiCheckCircle
                                className="w-5 h-5 text-green-400"
                                aria-hidden="true"
                            />
                        </div>
                        <div className="ml-3">
                            <h3 className="text-sm font-medium text-green-800">
                                Order Placed
                            </h3>
                            <div className="mt-2 text-sm text-green-700">
                                <p>
                                    Thank you for your Order. We have placed the
                                    order and your email will recieve further
                                    details.
                                </p>
                            </div>
                            <button
                                onClick={() => router.push("/")}
                                type="button"
                                className="inline-flex items-center px-4 py-2 mt-4 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-sky-800 hover:bg-sky-900"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ThankYou;