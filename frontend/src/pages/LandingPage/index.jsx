import { useEffect, useState } from "react";
import CardItem from "./Sections/CardItem";
import CheckBox from "./Sections/CheckBox";
import RadioBox from "./Sections/RadioBox";
import SearchInput from "./Sections/SearchInput";
import axiosInstanse from "./../../utils/axios";
import { category, prices } from "../../utils/filterData";

const LandingPage = () => {
    const limit = 4;
    const [searchTerm, setSearchTerm] = useState("");
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [hasMore, setHasMore] = useState(false);
    const [filters, setFilters] = useState({
        category: [],
        price: [],
    });

    useEffect(() => {
        fetchProducts({ skip, limit });
    }, []);

    async function fetchProducts({ skip, limit, loadMore = false, filters = {}, searchTerm = "" }) {
        const params = {
            skip,
            limit,
            filters,
            searchTerm,
        };
        try {
            const response = await axiosInstanse.get("/products", { params });

            if (loadMore) {
                setProducts([...products, ...response.data.products]);
            } else {
                setProducts(response.data.products);
            }
            setHasMore(response.data.hasMore);
        } catch (error) {
            console.error(error);
        }
    }

    const handleLoadMore = () => {
        const body = {
            skip: skip + limit,
            limit,
            loadMore: true,
            filters,
            searchTerm,
        };
        fetchProducts(body);
        setSkip(skip + limit);
    };

    const handleFilters = (newFilteredData, check) => {
        const newFilters = { ...filters };
        newFilters[check] = newFilteredData;
        if (check === "price") {
            const priceValues = handlePrice(newFilteredData);
            newFilters[check] = priceValues;
        }
        showFilteredResults(newFilters);
        setFilters(newFilters);
    };

    const handlePrice = value => {
        let array = [];
        for (let key in prices) {
            if (prices[key]._id === value) {
                array = prices[key].array;
            }
        }
        return array;
    };

    const showFilteredResults = filters => {
        const body = {
            skip: 0,
            limit: 4,
            filters,
            searchTerm,
        };

        fetchProducts(body);
        setSkip(0);
    };

    const handleSearchTerm = event => {
        const body = {
            skip: 0,
            limit,
            filters,
            searchTerm: event.target.value,
        };
        setSkip(0);
        setSearchTerm(event.target.value);
        fetchProducts(body);
    };

    return (
        <section>
            <div className="text-center m-7">
                <h2 className="text-2xl">쇼핑몰</h2>
            </div>

            {/* Filter */}
            <div className="flex gap-3">
                <div className="w-1/2">
                    <CheckBox
                        categorys={category}
                        checkCategorys={filters.category}
                        onFilters={filters => handleFilters(filters, "category")}
                    />
                </div>
                <div className="w-1/2">
                    <RadioBox
                        prices={prices}
                        checkedPrice={filters.price}
                        onFilters={filters => handleFilters(filters, "price")}
                    />
                </div>
            </div>

            {/* Search */}
            <div className="flex justify-end mb-3">
                <SearchInput searchTerm={searchTerm} onSearch={handleSearchTerm} />
            </div>

            {/* Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {products.map(product => (
                    <CardItem product={product} key={product.id} />
                ))}
            </div>

            {/* LoadMode */}
            {hasMore && (
                <div className="flex justify-center mt-5">
                    <button
                        onClick={handleLoadMore}
                        className="px-4 py-2 mt-5 text-white bg-black rounded-md hover:bg-gray-500"
                    >
                        더보기
                    </button>
                </div>
            )}
        </section>
    );
};

export default LandingPage;
