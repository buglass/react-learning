export default function () {
    return Promise.resolve({
        json: () => {
            Promise.resolve({
                "cod": "200",
                "message": 0,
                "cnt": 40,
                "list": [{
                        "dt": 1586271600,
                        "main": {
                            "temp": 288.23,
                            "feels_like": 285.65,
                            "temp_min": 285.81,
                            "temp_max": 288.23,
                            "pressure": 1027,
                            "sea_level": 1027,
                            "grnd_level": 1026,
                            "humidity": 63,
                            "temp_kf": 2.42
                        },
                        "weather": [{
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }],
                        "clouds": {
                            "all": 55
                        },
                        "wind": {
                            "speed": 3.05,
                            "deg": 192
                        },
                        "sys": {
                            "pod": "d"
                        },
                        "dt_txt": "2020-04-07 15:00:00"
                    }
                ],
                "city": {
                    "id": 6693470,
                    "name": "Lytham St Annes",
                    "coord": {
                        "lat": 53.7426,
                        "lon": -2.997
                    },
                    "country": "GB",
                    "population": 41327,
                    "timezone": 3600,
                    "sunrise": 1586237368,
                    "sunset": 1586285888
                }
            })
        }
    })
}