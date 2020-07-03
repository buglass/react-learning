import '../App.css';
import React from 'react';
import { Table, IColumnDefinition } from "@emisgroup/ui-kit-react";
import '../input.css';
import { ForecastState } from '../store/types';

type Props = ForecastState;

export class ForecastDisplay extends React.Component<Props> {

    render() {
        const columns: IColumnDefinition[] = [
            { header: "Main", propertyName: "main" },
            { header: "Description", propertyName: "description" },
            { header: "Date & Time", propertyName: "dateTime" },
            { header: "Temperature (C)", propertyName: "temp" },
            { header: "Wind Speed (m/s)", propertyName: "windspeed" },
        ]

        let tableData = this.props.forecast;

        return (
            <div className="main">
                <h2 id="cityName">{this.props.caption}</h2>
                <div className="resultsTable">
                    <Table columns={columns} data={tableData} />
                </div>
            </div>
        )
    }
}