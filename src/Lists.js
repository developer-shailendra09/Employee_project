import { useState, useRef } from "react";
// import "./styles.css";
import Dialogs from "./Dialogs";

const data = [
  {
    id: 1,
    name: "IphoneX",
    img:
      "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-x-mau-xam-didongviet.jpg"
  },
  {
    id: 2,
    name: "Samsung Fold",
    img:
      "https://images.samsung.com/pk/smartphones/galaxy-z-fold3-5g/buy/zfold3_carousel_mainsinglekv_mo.jpg"
  },
  {
    id: 3,
    name: "Laptop Gaming",
    img:
      "https://cdn.techzones.vn/Data/Sites/1/News/3285/techzones-nhung-mau-laptop-gaming-choi-game-co-tan-nhiet-tot-nhat-tren-thi-truong.jpg"
  }
];
export default function App() {
  const [products, setProducts] = useState(data);

  //You can put all product information into diaglog
  const [dialog, setDialog] = useState({
    message: "",
    isLoading: false,
    //Update
    nameProduct: ""
  });
  const idProductRef = useRef();
  const handleDialog = (message, isLoading, description) => {
    setDialog({
      message,
      isLoading,
      //Update
      description
    });
  };

  const handleDelete = (id) => {
    //Update
    const index = data.findIndex((p) => p.id === id);

    handleDialog("Are you sure you want to delete?", true, data[index].name);
    idProductRef.current = id;
  };

  // const areUSureDelete = (choose) => {
  //   if (choose) {
  //     setProducts(products.filter((p) => p.id !== idProductRef.current));
  //     handleDialog("", false);
  //   } else {
  //     handleDialog("", false);
  //   }
  // };
  return (
    <div className="App">
      {products.map((p) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h3>{p.name}</h3>
          <img
            style={{ objectFit: "cover", width: "100px", height: "100px" }}
            src={p.img}
            alt={p.name}
          />
          <button
            onClick={() => handleDelete(p.id)}
            style={{
              marginTop: "10px",
              background: "red",
              fontWeight: "bolder",
              border: "none",
              padding: "8px",
              cursor: "pointer",
              color: "white",
              borderRadius: "8px"
            }}
          >
            Delete
          </button>
        </div>
      ))}
      {dialog.isLoading && (
        <Dialogs
          //Update
          nameProduct={dialog.description}
          onDialog={areUSureDelete}
          message={dialog.message}
        />
      )}
    </div>
  );
}
