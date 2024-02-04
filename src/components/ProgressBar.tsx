import { MAX, MIN } from "../constants/constant";

interface progressBarProps {
  percentage?: number;
}

const ProgressBar: React.FC<progressBarProps> = ({
  percentage = 0,
}): React.ReactElement => {
  return (
    <div className="progress">
      <div
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={percentage}
        className="progress-bar"
        style={{ width: `${percentage}%` }}
      >
        <span style={{ color: percentage > 49 ? "white" : "black" }}>
          {percentage.toFixed()}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;
