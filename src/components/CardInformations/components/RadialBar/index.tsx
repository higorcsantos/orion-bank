import { ApexOptions } from "apexcharts";
import ReactApexChart from "react-apexcharts";

interface IGaugeLine {
    percentage: number;
    background: string;
    circleBackground: string;
    fontSize: string;
    fontWeight: string;
    fontColor: string;
    borderColor: string;
    finalColor: string;

}

function RadialBar({
    percentage,
    background,
    circleBackground,
    fontSize,
    fontWeight,
    fontColor,
    borderColor,
    finalColor
}: IGaugeLine) {
    const options: ApexOptions = {
        chart: {
            type: 'radialBar',
            sparkline: {
                enabled: true
            }
        },
        colors: [borderColor],
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                type: 'horizontal',
                shadeIntensity: 0.5,
                gradientToColors: [finalColor], // Define or replace gradientEndColor according to your needs
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        plotOptions: {
            radialBar: {
                startAngle: 0,
                endAngle: 360,
                track: {
                    background: background,
                    strokeWidth: '100%',
                    margin: 0,
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 2,
                        blur: 8,
                        opacity: 1,
                        color: '#000',
                    }
                },
                hollow: {
                    margin: 0,
                    size: '70%', //tamanho do circulo interno
                    background: circleBackground,
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: 'front',
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.24
                    }
                },
                dataLabels: {
                    name: {
                        show: false,
                        color: '#888',
                        fontSize: '14px',
                        fontWeight: '600'
                    },
                    value: {
                        formatter: function (val: any) {
                            return `${parseInt(val.toString())}%`;;
                        },
                        color: fontColor,
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        offsetY: 8,
                        show: true,
                    }
                },
            }
        },

    };

    return (
        <ReactApexChart
            options={options} series={[percentage]} type="radialBar" width="120px"
        />
    );
}

export default RadialBar;