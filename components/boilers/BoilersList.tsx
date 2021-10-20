import { Boiler } from "../../entities/Boiler";
import styles from "./../../styles/Styles.module.css";
import Link from "next/link";
interface Props {
  boilers: Boiler[];
}
export const BoilersList = ({ boilers }: Props) => {
  return (
    <>
      <Link href={`/boilers/new`}>Add a boiler ➕</Link>
      <div className={styles.grid}>
        {boilers.map((boiler) => {
          return (
            <div key={boiler.id} className={styles.card}>
              <h2>{boiler.model}</h2>
              <p>Status: {boiler.status}</p>
              <hr />
              <Link href={`/boilers/edit/${boiler.id}`}>
                <a>Edit ✍</a>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
