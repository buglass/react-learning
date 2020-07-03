import 'https'
import './App.css';
import React from 'react';
import { SearchBox, Table, IColumnDefinition } from "@emisgroup/ui-kit-react";
import './input.css';
import { geolocated, GeolocatedProps } from "react-geolocated";

interface dataStruct {
    id: {
        text: number
    },
    dateTime: {
        text: string
    },
    main: {
        text: string
    },
    description: {
        text: string
    },
    temp: {
        text: number
    },
    windspeed: {
        text: number
    }
}

function mapToStruct(json: any): dataStruct {
    return {
        id: {
            text: json.dt
        },
        dateTime: {
            text: json.dt_txt
        },
        main: {
            text: json.weather[0].main
        },
        description: {
            text: json.weather[0].description
        },
        temp: {
            text: Math.round(json.main.temp - 273.15)
        },
        windspeed: {
            text: json.wind.speed
        }
    }
}

class Input extends React.Component<
    GeolocatedProps,
    {
        value: string,
        response: { main: string, desc: string },
        fiveDay: dataStruct[],
        error: string,
        city: string
    }> {
    constructor(props: any) {
        super(props);

        this.state = { value: '', response: { main: '', desc: '' }, fiveDay: [], error: '', city: '' };
        this.handleCitySearch = this.handleCitySearch.bind(this);
        this.handleCoordsSearch = this.handleCoordsSearch.bind(this);
    }

    handleCitySearch(searchString: string) {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchString},uk&appid=${process.env.REACT_APP_SHIPPERS}`)
            .then(data => { return data.json() })
            .then(result =>
                result.cod === "200"
                ? this.setState({ fiveDay: result.list.map(mapToStruct), city: result.city.name })
                : this.setState({ error: JSON.stringify(result.message).slice(1, -1) }));
    }

    handleCoordsSearch() {
        console.log('DO_COORDS_SEARCH');
        if (this.props.coords !== undefined && this.props.coords !== null) {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.props.coords!.latitude}&lon=${this.props.coords!.longitude}&appid=${process.env.REACT_APP_SHIPPERS}`)
                .then(data => { return data.json() })
                .then(result =>
                    result.cod === "200"
                        ? this.setState({ fiveDay: result.list.map(mapToStruct), city: result.city.name })
                        : this.setState({ error: JSON.stringify(result.message).slice(1, -1) }));
        }
    }

    componentDidUpdate(prevProps: any) {
        console.log('DID_UPDATE');
        if (prevProps.coords == null)
            this.handleCoordsSearch();
        
        console.log('DONE_UPDATE');
    }

    render() {
        const columns: IColumnDefinition[] = [
            { header: "Main", propertyName: "main" },
            { header: "Description", propertyName: "description" },
            { header: "Date & Time", propertyName: "dateTime" },
            { header: "Temperature (C)", propertyName: "temp" },
            { header: "Wind Speed (m/s)", propertyName: "windspeed" },
        ]

        let tableData = this.state.fiveDay

        console.log('RENDER');
        return (
            <div className="main">
                <div className="errorMessage">
                    <h2 id="errorMessage">{this.state.error}</h2>
                </div>
                <h1>Boyz to Weather: innit</h1>
                <SearchBox id="searchId" onSearch={this.handleCitySearch} label="Your city" />
                <h2 id="cityName">{this.state.city}</h2>
                <div className="resultsTable">
                    <Table columns={columns} data={tableData} />
                </div>
            </div>
        )
    }
}

export default geolocated()(Input);