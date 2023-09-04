import React from "react";
import Modal from "react-modal";
import maintent from "../assets/maintenance.png";

export default function CardCatalog({ data }) {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Warna latar belakang dengan transparansi
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      // background: "black", // Mengatur latar belakang modal menjadi hitam
      border: "none",
    },
  };

  return (
    <div className="card m-4 p-3 text-start" style={{ width: "15rem" }}>
      <img
        src={data.img}
        alt="gmabar"
        className="w-100"
        style={{ height: " 10rem" }}
      />
      <h5 className="card-title">{data.namaProduk}</h5>
      <p className="card-text">{data.desc}</p>

      <div className="d-flex justify-content-between">
        <button className="btn btn-primary" onClick={openModal}>
          Pesan
        </button>

        <p className=" text-dark">
          Rp{" "}
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(data.harga)}{" "}
          ,-
        </p>
      </div>


      {/* maintenance cara pemesanan */}

      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2
            className="text-warning"
            ref={(_subtitle) => (subtitle = _subtitle)}
          >
            under maintenance
          </h2>
          <div className="d-flex justify-content-center align-items-center">
            <img src={maintent} alt="maintenance" style={{ width: "10rem" }} />
          </div>
        </Modal>
      </div>
    </div>
  );
}
