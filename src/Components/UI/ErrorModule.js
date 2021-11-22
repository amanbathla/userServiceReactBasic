import Card from "./Card";
import styles from "./Error.module.css";
import Button from "./Button";

const ErrorModule = (props) => {
  return (
    <div>
      <div onClick={props.onConfirm} className={styles.backdrop} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>

        <body>
          <div className={styles.content}>
            <p>{props.message}</p>
          </div>
        </body>
        <footer className={styles.footer}>
          <Button onClick={props.onConfirm}>Ohky</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModule;
