import { useContext } from "react";
import { DataContext } from "../App";

function Home() {
  let { axiosData, selectProduct, setSelectProduct, setCount } =
    useContext(DataContext);

  function addToCartFunction(id) {
    setSelectProduct({ type: "ADD_CART", payload: id });
    setCount(0);
  }

  function removeCart(id) {
    setSelectProduct({ type: "REMOVE_CART", payload: id });
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "100px",
          padding: "20px",
          gap: "13px",
        }}
      >
        {axiosData.map((value, index) => (
          <div
            key={index}
            style={{
              boxShadow: "0px 0px 2px grey",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: "250px", height: "250px" }}
                src={value.thumbnail}
              />
            </div>
            <h3 style={{ textAlign: "center" }}>
              {value.title} {`⭐ ${value.rating}/5`}
            </h3>
            <p
              style={{
                width: "300px",
                wordWrap: "break-word",
                overflowWrap: "break-word",
                textAlign: "justify-center",
                margin: "auto",
              }}
            >
              <span style={{ fontWeight: "bolder" }}>Description : </span>
              {value.description}
            </p>
            <h3 style={{ textAlign: "center" }}>
              <span style={{ color: "red" }}> Price : ${value.price}</span>
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                bottom: "0px",
              }}
            >
              {selectProduct.some((select) => select.id === value.id) ? (
                <button
                  onClick={() => removeCart(value.id)}
                  style={{
                    padding: "8px 15px",
                    backgroundColor: "orangered",
                    cursor: "pointer",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                >
                  {" "}
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => addToCartFunction(value.id)}
                  style={{
                    padding: "8px 15px",
                    backgroundColor: "green",
                    cursor: "pointer",
                    border: "none",
                    color: "white",
                    borderRadius: "5px",
                    outline: "none",
                  }}
                >
                  {" "}
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
