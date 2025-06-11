
const AGGREGATIONS = {
  number: ["Sum", "Average", "Min", "Max", "Count"],
  string: ["Count"],
};

const AggregationSelector = ({ type, selected, onChange }) => {
  const toggle = (agg) => {
    if (selected.includes(agg)) {
      onChange(selected.filter((a) => a !== agg));
    } else {
      onChange([...selected, agg]);
    }
  };

  return (
    <div className="aggregation-selector">
      {AGGREGATIONS[type].map((agg) => (
        <span
          key={agg}
          className={`badge ${selected.includes(agg) ? "selected" : ""}`}
          onClick={() => toggle(agg)}
        >
          {agg}
        </span>
      ))}
    </div>
  );
};

export default AggregationSelector;
