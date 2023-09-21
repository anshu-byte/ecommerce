import NextImage from "next/image";
import NextLink from "next/link";
import { useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { TApiAllCategoriesResp } from "../types";

interface IProductGrid extends TApiAllCategoriesResp {
    showLink: boolean;
    hasMore?: boolean;
    loadMoreFun?: Function;
}

const ProductGrid = (props: IProductGrid) => {
    const { categories, showLink, loadMoreFun, hasMore } = props;
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            if (loadMoreFun) loadMoreFun();
        }
    }, [inView, loadMoreFun]);

    return (
        <div className="bg-white">
            {categories.map((category) => (
                <div className="p-6 mt-12 " key={category.name}>
                    <div className="flex flex-row justify-between">
                        <span className="inline-flex items-center px-8 py-2 font-medium text-white rounded-md bg-sky-800 text-md">
                            {category.name}
                        </span>
                        {showLink && (
                            <NextLink href={`/category/${category.id}`}>
                                <p className="flex flex-row items-center underline gap-2 hover:cursor-pointer">
                                    View More
                                    <AiOutlineRight />
                                </p>
                            </NextLink>
                        )}
                    </div>
                    <div className="mt-6  grid grid-cols-1 gap-y-10 gap-x-6 xl:gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
                        {category?.products.map((product) => (
                            <div
                                className="p-6 border border-gray-200 rounded-lg group bg-neutral-200"
                                key={product.title}
                            >
                                <div className="w-full overflow-hidden min-h-80 rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <NextImage
                                        priority={true}
                                        layout="responsive"
                                        width="25"
                                        height="25"
                                        src={`${product.image}`}
                                        alt={product.title}
                                        className="object-cover object-center w-full h-full lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="relative mt-2">
                                    <h3 className="text-sm font-medium text-gray-900">
                                        {product.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {product.price}
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <NextLink
                                        href={`/product/${product.title}`}
                                    >
                                        <p className="relative flex items-center justify-center px-8 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-sky-800 hover:bg-sky-900 hover:cursor-pointer">
                                            View More Details
                                        </p>
                                    </NextLink>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!showLink && (
                        <div className="flex items-center justify-center mt-8">
                            {hasMore ? (
                                <button
                                    ref={ref}
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md bg-sky-800 shadow-sm hover:bg-sky-900"
                                >
                                    Loading...
                                </button>
                            ) : (
                                <div className="w-full p-4 border-l-4 border-yellow-400 bg-yellow-50">
                                    <div className="flex">
                                        <div className="ml-3">
                                            <p className="text-sm text-yellow-700">
                                                You have viewed all the Products
                                                under this category.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    {showLink && (
                        <div className="w-full mt-24 border-b border-gray-300" />
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductGrid;