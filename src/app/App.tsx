import "./app.module.css";
import Card from "./card/Card";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.background}>
      <Card />
    </div>
  );
}

export default App;
