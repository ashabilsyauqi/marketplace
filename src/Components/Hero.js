import React from "react";
import gambar from "../assets/designer.png";

export default function Hero() {
  return (
    <div className="d-flex justify-content-center align-items-center  text-light custom-bg flex-wrap ">
      <div
        className=" d-none d-xl-block"
        style={{ width: "300px" }}
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <img src={gambar} alt="gambar" className="w-100 p-1" />
      </div>
      <div
        style={{ height: "600px" }}
        className="d-flex justify-content-center align-items-center p-5 text-light flex-column text-start 
    "
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="2000"
      >
        <div class="text-center text-md-start">
          <h1 class="mb-0 fs-1 fw-medium">Snaprint.id</h1>
          <h2 class="mb-4 fs-2 fw-medium">
            Layanan Digital Printing no.1 Di Indonesia
          </h2>
          <p class="mb-5 fs-3">"We Print Your Success"</p>
          <a href="#catalog" class="btn btn-light px-4">
            Mulai
          </a>
        </div>
      </div>
    </div>
  );
}
