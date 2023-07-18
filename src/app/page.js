
import styles from "./page.module.css";
import MainColum1 from "@/components/Home/MainColum1/MainColum1";
import Swiper3D from "@/components/Home/MainColum2/Swiper3D";
import GridGallery from "@/components/GridGallery/GridGallery";

export default function Home() {
 /*const dataEvent = useSelector((state) => state.allevents.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allfetchEvents());
  }, [dispatch]);*/ 

  return (
    <>
      <main className={styles.main}>
        <section className={styles.gridMain}>
          <MainColum1 />
          <Swiper3D />
        </section>
      </main>

      <div className={styles.PaddinCards}>
        <span className={styles.TitleParrafo}>
          <h1>
          <p>Coleccion</p> de <p>Arte</p>{" "}
          </h1>
          <p>
            Photos by sapeaul lorem ipsu is data falseipsu is data falseipsu is
            data false login falseipsu is data false login
          </p>
        </span>
        <GridGallery />
      </div>
    </>
  );
}
