import React from "react";
import CardCatalog from "./CardCatalog";

export default function Catalog({ listProduk }) {
  return (
    <div  style={{ height: "auto" }}  >
    <div className="m-auto mt-5" style={{ width: "80%" }}>
    <h1 id="catalog"  >Produk Kami</h1>
      <hr />
    </div>
 
      <div
        style={{ width: "80%" }}
        className="d-flex justify-content-center align-items-center py-2 gap-2 flex-wrap m-auto"
        id="produk"
      >
        {listProduk.map((data, index) => (
          <CardCatalog key={index} data={data} />
        ))}
      </div>
    </div>
  );
}
