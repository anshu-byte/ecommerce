const Skelton = () => {
    return (
        <>
            <div className="w-40 h-8 mt-12 bg-gray-200 rounded-lg" />
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {Array(16)
                    .fill(0)
                    .map((_val, index) => (
                        <div className="p-4 rounded-2xl bg-black/5" key={index}>
                            <div className="bg-gray-200 rounded-lg h-60" />
                            <div className="mt-6 mb-4 space-y-4">
                                <div className="w-3/5 h-3 bg-gray-200 rounded-lg" />
                                <div className="w-4/5 h-3 bg-gray-200 rounded-lg" />
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default Skelton;