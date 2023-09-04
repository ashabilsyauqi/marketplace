import Navbar from "./Components/Navbar";
import "./App.css";
import Hero from "./Components/Hero";
import Catalog from "./Components/Catalog";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// icon
import { FaWhatsapp } from 'react-icons/fa';

// import gambar
import banner from "./assets/print-banner.jpg";
import gelas from "./assets/print-gelas.jpg";
import casing from "./assets/print-casing.jpg";
import totebag from "./assets/print-totebag.jpg";

function App() {
  const listProduk = [
    {
      img: banner,
      namaProduk: "Print Banner ",
      desc: "Harga per Meter",
      harga: 34000,
    },
    {
      img: gelas,
      namaProduk: "Print Gelas ",
      desc: "Harga satuan",
      harga: 20000,
    },
    {
      img: casing,
      namaProduk: "Print Casing ",
      desc: "Harga satuan",
      harga: 12000,
    },
    {
      img: totebag,
      namaProduk: "Print ToteBag ",
      desc: "Harga satuan",
      harga: 9000,
    },
    {
      img: totebag,
      namaProduk: "Print ToteBag ",
      desc: "Harga satuan",
      harga: 9000,
    },
    {
      img: totebag,
      namaProduk: "Print ToteBag ",
      desc: "Harga satuan",
      harga: 9000,
    },
  ];

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
  
      <Catalog listProduk={listProduk} />
      <a class="whats-app" href="https:///wa.me/+6287781047453?text=Mau Tanya soal Printing" target="_blank">
        <FaWhatsapp />
      </a>

      <About />
      <Footer />
    </>
  );
}

export default App;
