import React from "react";

export default function About() {
  return (
    <div
      className="d-flex justify-content-center align-items-center custom-bg"
      style={{ height: "600px" }}
      id="about"
    >
      <div
        class="accordion"
        data-aos="fade-right"
        data-aos-offset="500"
        data-aos-duration="2000"
        style={{ width: "600px" }}
        id="accordionExample"
      >
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Tentang kami
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>
                Selamat datang di Snaprint.id, penyedia layanan digital printing
                terkemuka di Indonesia.
              </strong>{" "}
              Kami bangga menjadi mitra terpercaya Anda dalam memenuhi semua
              kebutuhan cetak digital Anda.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Siapa Kami?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Snaprint.id didirikan dengan visi untuk memberikan solusi cetak
              digital yang inovatif dan berkualitas tinggi bagi pelanggan kami
              di seluruh Indonesia. Sejak berdiri, kami telah berkomitmen untuk
              memberikan layanan terbaik, berfokus pada kepuasan pelanggan, dan
              memastikan setiap cetakan kami mencerminkan standar kualitas
              tertinggi.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Kenapa Kami ?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Ketika Anda memilih Snaprint.id, Anda memilih kualitas, keandalan,
              dan layanan yang ramah pelanggan. Kami memiliki tim berpengalaman
              yang siap membantu Anda melalui setiap langkah proses cetak, mulai
              dari pemilihan desain hingga pengiriman produk jadi. Kami
              menggunakan teknologi cetak terkini dan bahan berkualitas tinggi
              untuk memastikan hasil yang memuaskan.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
