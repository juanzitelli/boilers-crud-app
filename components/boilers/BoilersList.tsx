import Link from "next/link";
import { Boiler } from "../../entities/Boiler";
import styles from "./../../styles/Styles.module.css";
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
              <button onClick={deleteOnClickHandler(boiler)}>Delete 🗑</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

const deleteOnClickHandler = (boiler: Boiler) => {
  return async () => {
    if (window.confirm("Are you sure you want to delete this item? 🚧")) {
      const response = await fetch(`api/boilers/delete/${boiler.id}`, {
        method: "DELETE",
      });

      const {
        payload: { status, msg },
      } = await response.json();

      if (status === "error") return alert(msg);

      window.location.reload();
    }
  };
};
