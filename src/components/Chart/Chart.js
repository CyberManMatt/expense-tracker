import "./Chart.css";
import {ChartBar} from "./ChartBar";

export function Chart(props) {
    const dataPointValues = props.dataPoints.map(dp => dp.value);
    const totalMaximum = Math.max(...dataPointValues)

    return (
        <div className="chart">
            {props.dataPoints.map(dp => <ChartBar key={dp.label} value={dp.value} maxValue={totalMaximum} label={dp.label} />)}
        </div>
    )
}