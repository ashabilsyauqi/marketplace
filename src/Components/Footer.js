import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-center align-items-center gap-3 bg-black p-3 text-white  " id="contact">
      <div className="p-2" style={{ width: "600px" }}>
        <h2>Snaprint.id</h2>
        <p>"Cetak Berkualitas, Hasilkan Kenangan Abadi"</p>
        <a
          href="
https:///wa.me/+6287781047453?text="
          className="nav-link text-light"
        >
          {" "}
          <FaWhatsapp /> +62 877-8104-7453
        </a>
        <a href="https://goo.gl/maps/iTuBrrvinMDTZZa77" className="nav-link text-light"> Out Location</a>
      </div>
      <div className="p-2 d-flex justify-content-center d-none d-xl-block" style={{ width: "600px" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15863.457793520744!2d107.0316198!3d-6.2815447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69897099191c41%3A0xe2f1989f896b2ea7!2sShop%20%26%20Drive%20-%20Grand%20Wisata%2C%20Bekasi.!5e0!3m2!1sen!2sid!4v1693814960085!5m2!1sen!2sid" width="450" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  );
}
