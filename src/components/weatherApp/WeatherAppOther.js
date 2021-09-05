import React from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import { CssBaseline, ThemeProvider, Grid } from "@material-ui/core";
import { BuildTheme } from './../../assets/global/Theme-variable';

const customStylesDark = {
	fontFamily:  'Helvetica, sans-serif',
	gradientStart:  'black',
	gradientMid:  'black',
	gradientEnd:  'black',
	locationFontColor:  '#FFF',
	todayTempFontColor:  '#FFF',
	todayDateFontColor:  '#B5DEF4',
	todayRangeFontColor:  '#B5DEF4',
	todayDescFontColor:  '#B5DEF4',
	todayInfoFontColor:  '#B5DEF4',
	todayIconColor:  '#FFF',
	forecastBackgroundColor:  'black',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#4BC4F7',
};

const customStylesOther = {
    fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#99abc2',
	gradientMid:  '#99abc2',
	gradientEnd:  '#99abc2',
	locationFontColor:  'black',
	todayTempFontColor:  'black',
	todayDateFontColor:  'black',
	todayRangeFontColor:  'black',
	todayDescFontColor:  'black',
	todayInfoFontColor:  'black',
	todayIconColor:  'white',
	forecastBackgroundColor:  '#99abc2',
	forecastSeparatorColor:  '#DDD',
	forecastDateColor:  'black',
	forecastDescColor:  'black',
	forecastRangeColor:  'black',
	forecastIconColor:  'white',
}

const customStylesLight = {
    fontFamily:  'Helvetica, sans-serif',
	gradientStart:  '#e6f4ff',
	gradientMid:  '#e6f4ff',
	gradientEnd:  '#e6f4ff',
	locationFontColor:  'black',
	todayTempFontColor:  'black',
	todayDateFontColor:  '#777',
	todayRangeFontColor:  '#777',
	todayDescFontColor:  '#777',
	todayInfoFontColor:  '#777',
	todayIconColor:  'black',
	forecastBackgroundColor:  '#e6f4ff',
	forecastSeparatorColor:  '#777',
	forecastDateColor:  '#777',
	forecastDescColor:  '#777',
	forecastRangeColor:  '#777',
	forecastIconColor:  '#4BC4F7',
}

const WeatherAppOther = () => {

  
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '130299a828592c90ff575ddaaf5ee439',
        lat: '22.341900',
        lon: '22.341900',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });
    return (
      
        <ReactWeather
            theme={customStylesOther}
            isLoading={isLoading}
            errorMessage={errorMessage}
            data={data}
            lang="en"
            locationLabel="Chittagong"
            unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
            showForecast
    />
	
   
    );
};

export default WeatherAppOther;