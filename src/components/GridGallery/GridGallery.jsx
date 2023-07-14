import React from "react";
import {
  GalleryAntiguedad,
  GalleryEspacial,
  GalleryArte,
  GalleryRobots,
  GalleryCosina,
  GalleryVista,
  GalleryIluminado,
  GridGalleryStyled,
  Parrafo,
} from "./css/GridGallery";
import Link from "next/link";

const GridGallery = () => {
  return (
    <GridGalleryStyled>
      <GalleryArte>
        <span className="span-flex">
          <h1 >Collection Arte</h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
            false login false loginfalseipsu is data
            false login
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryArte>
      <GalleryRobots>
      <span className="span-flex">
          <h1 className="lg">Collection Robot</h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryRobots>
      <GalleryCosina>
      <span className="span-flex">
          <h1 className="lg">Collection Cosina</h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryCosina>
      <GalleryVista>
      <span className="span-flex">
          <h1 className="lg">Collection IA</h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryVista>
      <GalleryIluminado>
      <span className="span-flex">
          <h1 className="lg">Collection Iluminado</h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryIluminado>
      <GalleryAntiguedad>
      <span className="span-flex">
          <h1 className="lg">Collection Antiguedad</h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryAntiguedad>
      
      <GalleryEspacial>
      <span className="span-flex">
          <h1 className="lg">Collection Espacial</h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
            false login false loginfalseipsu is data
            false login
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryEspacial>
    </GridGalleryStyled>
  );
};

export default GridGallery;
