import BestChoose from "../components/BestChoose";
import HeadComponent from "../components/Head";
import Header from "../components/Header";
import Insurance from "../components/Insurance";
import Process from "../components/Process";
import GalleryProducts from "../components/GalleryProducts";
import ContactMessage from "../components/ContactMessage";
import Footer from "../components/Footer";
import React from "react";

export default function Home() {
  const addAnimate = (eid, position, type = "animate-transform_opacity_up") => {
    const element = document.getElementById(eid);
    if (!eid || !position || !element) return;
    const scrollValue = window.pageYOffset;

    if (scrollValue > position) {
      if (type === "animate-transform_opacity_up") {
        element.classList.remove("translate-y-[50px]");
        element.classList.remove("opacity-0");
        element.classList.add("animate-transform_opacity_up");
      }
      if (type === "animate-opacity_scale") {
        element.classList.remove("scale-0");
        element.classList.remove("opacity-0");
        element.classList.add("animate-opacity_scale");
      }
    }
  };

  React.useEffect(() => {
    const user = window.localStorage.getItem("user_uid");
    if (!user) {
      window.localStorage.setItem(
        "user_uid",
        Math.ceil(Math.random() * 100000000)
      );
    }
  }, []);

  React.useEffect(() => {
    const eHeader = document.getElementById("header");
    const eBestChoose = document.getElementById("best_choose");
    const eInsurance = document.getElementById("insurance");
    const eProcess = document.getElementById("process");
    const eGallery = document.getElementById("gallery");

    const offsetHeader = eHeader.offsetTop;
    const valueShow = 100;

    const positionBestChoose = offsetHeader + valueShow;
    const positionInsurance = eBestChoose.offsetTop + valueShow;
    const positionProcess = eInsurance.offsetTop + valueShow;
    const positionGallery = eProcess.offsetTop + valueShow;
    const positionCallForUs = eGallery.offsetTop + valueShow;

    window.addEventListener("scroll", (e) => {
      addAnimate("best_choose", positionBestChoose);
      addAnimate("insurance", positionInsurance);
      addAnimate("process", positionProcess, "animate-opacity_scale");
      addAnimate("gallery", positionGallery);
      addAnimate("call_for_us", positionCallForUs, "animate-opacity_scale");
    });
  }, []);

  return (
    <div
      className="min-h-screen w-full max-w-[1240px] m-auto 
      bg-white overflow-hidden select-none
      "
    >
      <HeadComponent />
      <Header />
      <BestChoose />
      <Insurance />
      <Process />
      <GalleryProducts />
      <ContactMessage />
      <Footer />
    </div>
  );
}
