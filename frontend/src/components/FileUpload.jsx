import PropTypes from "prop-types";
import Dropzone from "react-dropzone";
import axiosInstanse from "../utils/axios";

const FileUpload = ({ images, onImagesChange }) => {
    const handleDrop = async files => {
        let formData = new FormData();

        const config = {
            header: { "content-type": "multipart/form-data" },
        };

        formData.append("file", files[0]);

        try {
            const response = await axiosInstanse.post(
                "/products/image",
                formData,
                config
            );
            onImagesChange([...images, response.data.fileName]);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = image => {
        const currentIndex = images.indexOf(image);
        const newImages = [...images];
        newImages.splice(currentIndex, 1);
        onImagesChange(newImages);
    };

    return (
        <div className="flex gap-4">
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section className="min-w-[300px] h-[300px] border flex items-center justify-center">
                        <div
                            className="min-w-[300px] h-[300px] flex items-center justify-center cursor-pointer"
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <p className="text-3xl">+</p>
                        </div>
                    </section>
                )}
            </Dropzone>
            <div className="flex-grow h-[300px] border flex items-center justify-center overflow-x-scroll overflow-y-hidden">
                {images.map(image => (
                    <div key={image} onClick={() => handleDelete(image)}>
                        <img
                            className="min-w-[300px] h-3[300px]"
                            src={`${import.meta.env.VITE_SERVER_URL}/${image}`}
                            alt={image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

FileUpload.propTypes = {
    images: PropTypes.array.isRequired,
    onImagesChange: PropTypes.func.isRequired,
};

export default FileUpload;
