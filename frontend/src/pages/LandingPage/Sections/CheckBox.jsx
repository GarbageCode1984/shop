import PropTypes from "prop-types";

const CheckBox = ({ categorys, checkCategorys, onFilters }) => {
    const handleToggle = categoryId => {
        const currentIndex = checkCategorys.indexOf(categoryId);
        const newChecked = [...checkCategorys];

        if (currentIndex === -1) {
            newChecked.push(categoryId);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        onFilters(newChecked);
    };

    return (
        <div className="p-2 mb-3 bg-gray-100 rounded-md">
            {categorys?.map(category => (
                <div key={category._id}>
                    <input
                        type="checkbox"
                        onChange={() => handleToggle(category._id)}
                        checked={checkCategorys.indexOf(category._id) === -1 ? false : true}
                    />
                    {""}
                    <lable>{category.name}</lable>
                </div>
            ))}
        </div>
    );
};

CheckBox.propTypes = {
    categorys: PropTypes.array.isRequired,
    checkCategorys: PropTypes.array.isRequired,
    onFilters: PropTypes.func.isRequired,
};

export default CheckBox;
