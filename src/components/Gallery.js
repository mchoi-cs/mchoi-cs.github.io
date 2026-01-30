import React, { useEffect, useMemo, useState } from "react";
import "../css/Gallery.css";

const GalleryGrid = ({ images, onSelect }) => {
  return (
    <div className="gallery-grid" role="list">
      {images.slice(0, 9).map((img,i) => (
        <button
      key={`${img.src}-${i}`}
          type="button"
          className="gallery-tile"
          onClick={() => onSelect(img)}
          aria-label={`Open ${img.alt || "image"}`}
        >
          <img className="gallery-img" src={img.src} alt={img.alt || ""} loading="lazy" />
        </button>
      ))}
    </div>
  );
};

const GalleryModal = ({ selected, onClose }) => {
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, onClose]);

  if (!selected) return null;

  return (
    <div className="gallery-modalBackdrop" onMouseDown={onClose} role="dialog" aria-modal="true">
      <div className="gallery-modal" onMouseDown={(e) => e.stopPropagation()}>
        <img className="gallery-modalImg" src={selected.src} alt={selected.alt || ""} />
        {selected.caption ? <div className="gallery-caption">{selected.caption}</div> : null}
        <button className="gallery-close" type="button" onClick={onClose} aria-label="Close">
          ×
        </button>
      </div>
    </div>
  );
};

export const Gallery = () => {
  const data = useMemo(
    () => ({
      "digital media": [
        { 
          src: "/assets/art2.jpg", 
          alt: "digital 1",
          caption: "Self portrait • Procreate • 2023"
        },
        { 
          src: "/assets/art3.jpg", 
          alt: "digital 2",
          caption: "Foal • Procreate • 2023"
        },
        { 
          src: "/assets/art1.jpg", 
          alt: "digital 3",
          caption: "Self Portrait • Procreate • 2023"
        }
      ],
      "traditional media": [
        
        //   { 
        //   src: "/assets/portrait.jpeg", 
        //   alt: "traditional 2",
        //   caption: "2022   "
        // },
        { 
          src: "/assets/collection.jpeg", 
          alt: "traditional 4",
          caption: "2022   "
        },
        { 
          src: "/assets/birdie.jpg", 
          alt: "traditional 1",
          caption: "Birdie • Ink on Paper • 2025 • For my landing page"
        },
        { 
          src: "/assets/chess1.jpg", 
          alt: "traditional 3",
          caption: "GoodKnight logo • Ink • 2025    "
        }
        
      ],
      sketches: [
        // { src: "/assets/coraline.png", alt: "sketch 1" },
        // { src: "/assets/chess1.png", alt: "sketch 2" },
        // { src: "/assets/chess1.png", alt: "sketch 3" },
        // { src: "/assets/chess1.png", alt: "sketch 4" },
        // { src: "/assets/chess1.png", alt: "sketch 5" },
        // { src: "/assets/chess1.png", alt: "sketch 6" },
      ],
    }),
    []
  );

  const categories = Object.keys(data);
  const [active, setActive] = useState(categories[0]);
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-container">
      <section id="gallery-component" className="section-container">
        <div className="gallery-headerRow">
          <h2>Gallery</h2>
          <div className="gallery-note">click to expand</div>
        </div>

        <div className="gallery-tabs" role="tablist" aria-label="Gallery categories">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              className={`gallery-tab ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
              role="tab"
              aria-selected={active === c}
            >
              {c}
            </button>
          ))}
        </div>

        <GalleryGrid images={data[active]} onSelect={setSelected} />

        <GalleryModal selected={selected} onClose={() => setSelected(null)} />
      </section>
    </div>
  );
};
