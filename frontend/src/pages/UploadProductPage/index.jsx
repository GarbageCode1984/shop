import { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstanse from "./../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

const category = [
    { key: 1, value: "식품" },
    { key: 2, value: "생활용품" },
    { key: 3, value: "뷰티" },
    { key: 4, value: "문구/오피스" },
    { key: 5, value: "가전디지털" },
    { key: 6, value: "도서" },
    { key: 7, value: "건강식품" },
];

const UploadProductPage = () => {
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: 0,
        category: 1,
        images: [],
    });

    const userData = useSelector(state => state.user?.userData);
    const navigate = useNavigate();

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleImages = newImages => {
        setProduct(prevState => ({
            ...prevState,
            images: newImages,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const body = {
            writer: userData.id,
            ...product,
        };

        try {
            await axiosInstanse.post("/products", body);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section>
            <div className="text-center m-7">
                <h1>상품 업로드</h1>
            </div>

            <form className="mt-6" onSubmit={handleSubmit}>
                <FileUpload images={product.images} onImagesChange={handleImages} />

                <div className="mt-4">
                    <label htmlFor="title">이름</label>
                    <input
                        className="w-full px-4 py-2 bg-white border rounded-md"
                        name="title"
                        id="title"
                        onChange={handleChange}
                        value={product.title}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="description">설명</label>
                    <input
                        className="w-full px-4 py-2 bg-white border rounded-md"
                        name="description"
                        id="description"
                        onChange={handleChange}
                        value={product.description}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="price">가격</label>
                    <input
                        className="w-full px-4 py-2 bg-white border rounded-md"
                        type="number"
                        name="price"
                        id="price"
                        onChange={handleChange}
                        value={product.price}
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="category">카테고리</label>
                    <select
                        className="w-full px-4 mt-2 bg-white border rounded-md"
                        name="category"
                        id="category"
                        onChange={handleChange}
                        value={product.category}
                    >
                        {category.map(item => (
                            <option key={item.key} value={item.key}>
                                {item.value}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="mt-4">
                    <button type="submit" className="w-full px-4 text-white bg-black rounded-md hover:bg-gray-700 py-2">
                        생성하기
                    </button>
                </div>
            </form>
        </section>
    );
};

export default UploadProductPage;
