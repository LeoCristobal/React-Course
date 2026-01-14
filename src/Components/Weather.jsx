const Cold = () => <h1>It's cold outside!🥶</h1>;
const Nice = () => <h1>It's nice outside!😁</h1>;
const Hot = () => <h1>It's hot outside!🔥</h1>;

const Weather = ({ temp }) => {
    let temperature = parseInt(temp);
    if (temperature < 15) {
        return <Cold />;
    } else if (temperature >= 15 && temperature <= 25) {
        return <Nice />;
    } else if (temperature > 25) {
        return <Hot />;
    }
};

export default Weather;
