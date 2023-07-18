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
          <h1>
            Collection <p>Arte</p>
          </h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
            false login false loginfalseipsu is data false login
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryArte>
      <GalleryRobots>
        <span className="span-flex">
          <h1 className="lg">
            Collection <p>Robot</p>
          </h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryRobots>
      <GalleryCosina>
        <span className="span-flex">
          <h1 className="lg">
            Collection <p>Cosina</p>
          </h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryCosina>
      <GalleryVista>
        <span className="span-flex">
          <h1 className="lg">
            Collection <p>IA</p>
          </h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryVista>
      <GalleryIluminado>
        <span className="span-flex">
          <h1 className="lg">
            Collection <p>Iluminado</p>
          </h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
          </Parrafo>
          <Link href={"/"}>Ir a ver</Link>
        </span>
      </GalleryIluminado>
      <GalleryAntiguedad >
        <span className="span-flex">
          <h1 className="lg">
            Collection <p>Antiguedad</p>
          </h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
          </Parrafo>
          <Link href={"/evento/category/antiguedad"}>Ir a ver</Link>
        </span>
      </GalleryAntiguedad>

      <GalleryEspacial>
        <span className="span-flex">
          <h1 className="lg">
            Collection <p>Espacial</p>
          </h1>
          <Parrafo>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false loginfalseipsu is data
            false login false loginfalseipsu is data false login
          </Parrafo>
          <Link href={"/evento/category/espacial"}>Ir a ver</Link>
        </span>
      </GalleryEspacial>
    </GridGalleryStyled>
  );
};

export default GridGallery;
