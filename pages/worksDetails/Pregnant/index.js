import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeaderTwo from "../../../src/components/HeaderTwo";
import Logo from "../../../public/images/temporalLogo.jpg";
import Footer from '../../../src/components/Footer';

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/counter.css";

import pregnantImages from "../../../src/data/pregnantImages";

function Pregnant() {

  const [index, setIndex] = useState(-1);

  return (
    <div className="masonry">
      <HeaderTwo
        headerLogo={Logo}
      />

      <main className="ms-main single">
        <div className="ms-page-content">
          <div className="project-single-banner">
            <div className="container">
              <div className="project-single-inner">
                <div className="row top">

                  <div className="col-lg-6">
                    <h1 className="heading-title">Embarazo</h1>
                  </div>

                  <div className="col-lg-6">
                    <p className="desc">Te invitamos a disfrutar la alegría, explorar la belleza y la anticipación de la maternidad a través de nuestra lente.</p>
                  </div>
                </div>

                <div className="row bottom">
                  <div className="col-lg-6">
                    <div className="author-area">

                      <div className="client">
                        <p className="tag"></p>
                        <h4 className="platform"></h4>
                      </div>

                      <div className="partner">
                        <p className="tag"></p>
                        <h4 className="platform"></h4>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <p className="catagory"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="ms-hero project pregnant">
            <div className="ms-parallax jarallax-img" data-speed="0.7" data-type="scroll"></div>
          </section>

          <section className="project-single-wrap">

            <div className="team-area one two gallery gallery1">
              <div className="container">
                <div className="ms-content--portfolio" id="237a777">
                  <div className="row grid grid-content blockgallery">
                    <div className="grid-sizer col-xs-12 col-lg-4 col-md-3"></div>

                    <div className='row grid grid-content blockgallery'>

                      <PhotoAlbum
                        photos={pregnantImages}
                        alt="Embarazo colección"
                        targetRowHeight={350}
                        layout="rows"

                        imageFit="cover"
                        onClick={({ index }) =>
                          setIndex(index)}
                      />


                      <Lightbox
                        slides={pregnantImages}
                        alt="Embarazo colección"

                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        decoding="async"
                        thumbnails={{
                          borderRadius: 8,
                          gap: 34,
                          imageFit: 'cover',
                          height: 60,
                          vignette: true,
                          showToggle: true,
                        }}
                        styles={{
                          container: { backgroundColor: "#0c0b0c" },
                          root: { "--yarl__color_backdrop": "#0c0b0b" },
                          icon: { color: "#fff" },
                        }}
                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Counter]}
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ms-spn--wrap container">
              <div className="ms-spn--content row">
                <div className="ms-spn--text col-md-6">

                  <Link className="ms-spn--link" href="/works/fitness">
                    <div className="ms-spn--head">
                      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g>
                          <path d="M22,9a1,1,0,0,0,0,1.42l4.6,4.6H3.06a1,1,0,1,0,0,2H26.58L22,21.59A1,1,0,0,0,22,23a1,1,0,0,0,1.41,0l6.36-6.36a.88.88,0,0,0,0-1.27L23.42,9A1,1,0,0,0,22,9Z"></path>
                        </g>
                      </svg>
                      <h3>Siguiente sesión</h3>
                    </div>

                    <h1>Recién nacidos</h1>
                  </Link>
                </div>

                <div className="col-md-6">
                  <Link href="/works/babies" className="ms-spn--thumb">
                    <Image src="/images/collection/babies.jpg" alt="Recién nacidos colección" width={800} height={600} />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pregnant;
