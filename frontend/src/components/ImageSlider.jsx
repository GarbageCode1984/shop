import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";

const ImageSlider = ({ images }) => {
    return (
        <div>
            <Carousel autoPlay showThumbs={false} infiniteLoop>
                {images.map(image => (
                    <div key={image}>
                        <img
                            src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
                            alt={image}
                            className="w-full max-h-[150px]"
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

ImageSlider.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageSlider;
