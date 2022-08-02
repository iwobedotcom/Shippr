import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";

const Context = createContext();

export function StateContext({ children }) {
  const initialState = [];
  const initialPrice = 0;
  const initialQuantities = 0;
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState(initialState);
  const [totalPrice, setTotalPrice] = useState(initialPrice);
  const [totalQuantities, setTotalQuantities] = useState(initialQuantities);
  const [qty, setQty] = useState(1);
  let foundProduct;
  let index;

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    if (cartItems) {
      setCartItems(cartItems);
    }
  }, []);

  useEffect(() => {
    if (cartItems !== initialState) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    const totalQuantities = JSON.parse(localStorage.getItem("totalQuantities"));
    if (totalQuantities) {
      setTotalQuantities(totalQuantities);
    }
  }, []);

  useEffect(() => {
    if (totalQuantities !== initialQuantities) {
      localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities));
    }
  }, [totalQuantities]);

  useEffect(() => {
    const totalPrice = JSON.parse(localStorage.getItem("totalPrice"));
    if (totalPrice) {
      setTotalPrice(totalPrice);
    }
  }, []);

  useEffect(() => {
    if (totalPrice !== initialPrice) {
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
    }
  }, [totalPrice]);

  // (function clearLocalStorage() {
  //   if (typeof window !== "undefined") {
  //     localStorage.clear();
  //   } else {
  //     console.log("Local Storage cleared.");
  //   }
  // })();

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(
      (item) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);

    const newCartItems = cartItems.filter((item) => item._id !== product._id);

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );

    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );

    setCartItems(newCartItems);
  };

  const cartItemQuantity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);

    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  return (
    <Context.Provider
      value={{
        showCart,
        setShowCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        cartItemQuantity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useStateContext() {
  return useContext(Context);
}
