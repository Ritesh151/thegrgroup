import React, { useEffect, useRef, useState } from "react";
import { Footer, Navbar } from "../components";
import HTMLFlipBook from "react-pageflip";
import { Howl } from "howler";
import "./Brochure.css";

const Brochure = () => {
  const totalPages = 9;
  const flipBookRef = useRef(null);
  const pageRef = useRef(0); // For tracking in interval
  const [currentPage, setCurrentPage] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(false); // prevent sound on first auto flip

  const flipSound = useRef(
    new Howl({
      src: ["/flip.mp3"],
      volume: 0.5,
    })
  ).current;

  useEffect(() => {
    const interval = setInterval(() => {
      if (flipBookRef.current && pageRef.current < totalPages - 1) {
        flipBookRef.current.pageFlip().flipNext();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePageChange = (e) => {
    const newPage = e.data;
    setCurrentPage(newPage);
    pageRef.current = newPage;

    if (soundEnabled) flipSound.play();
    else setSoundEnabled(true); // enable sound from second flip
  };

  const goToPage = (index) => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flip(index);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-black py-10 px-4 min-h-screen overflow-x-hidden">
        {/* PDF Download */}
        <a
          href="/brochure.pdf"
          download
          className="mb-6 px-6 py-2 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition"
        >
          📄 Download Brochure PDF
        </a>

        {/* Flipbook */}
        <div className="flipbook-wrapper">
          <HTMLFlipBook
            width={600}
            height={800}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1536}
            showCover={true}
            mobileScrollSupport={true}
            flippingTime={1000}
            clickEventForward={true}
            useMouseEvents={true}
            maxShadowOpacity={0.6}
            ref={flipBookRef}
            onFlip={handlePageChange}
            className="book-view shadow-lg"
          >
            {[...Array(totalPages)].map((_, index) => (
              <div key={index} className="page bg-white flex items-center justify-center">
                <img
                  src={`/brochure/page${index + 1}.jpg`}
                  alt={`Page ${index + 1}`}
                  className="page-image max-w-full max-h-full object-contain"
                  onError={(e) => {
                    if (e.target.src !== window.location.origin + "/placeholder.jpg") {
                      e.target.src = "/placeholder.jpg";
                    }
                  }}
                />
              </div>
            ))}
          </HTMLFlipBook>
        </div>

        {/* Navigation Dots */}
        <div className="flex mt-6 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`w-3 h-3 rounded-full transition transform ${
                currentPage === i ? "bg-yellow-400 scale-125" : "bg-gray-500"
              }`}
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Brochure;
