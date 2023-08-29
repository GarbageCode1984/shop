import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import PropTypes from "prop-types";

const ProductImage = ({ product }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (product?.images?.length > 0) {
            let images = [];

            product.images.map(imageName => {
                return images.push({
                    original: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
                    thumbnail: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
                });
            });

            setImages(images);
        }
    }, [product]);

    return <ImageGallery items={images} />;
};

ProductImage.propTypes = {
    product: PropTypes.object.isRequired,
    setImages: PropTypes.func,
};

export default ProductImage;
