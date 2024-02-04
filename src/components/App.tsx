import "./App.css";
import ProgressBar from "./ProgressBar";
import usePercentage from "../hooks/usePercentage";

const App: React.FC = () => {
  const { percentage, complete } = usePercentage();

  return (
    <div className="App">
      <span>Progress</span>
      <ProgressBar percentage={percentage} />
      <span>{complete ? "Completed!" : "Loading..."}</span>
    </div>
  );
};

export default App;
