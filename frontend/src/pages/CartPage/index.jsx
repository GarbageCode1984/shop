import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartItems } from "../../store/thunkFunctions";

const CartPage = () => {
    const userData = useSelector(state => state.user?.userData);
    const dispacth = useDispatch();

    useEffect(() => {
        let cartItemIds = [];

        if (userData?.cart && userData.cart.length > 0) {
            userData.cart.forEach(item => {
                cartItemIds.push(item.id);
            });

            const body = {
                cartItemIds,
                userCart: userData.cart,
            };

            dispacth(getCartItems(body));
        }
    }, [dispacth, userData]);

    return <div>CartPage</div>;
};

export default CartPage;
