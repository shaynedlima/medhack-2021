import { useState, useEffect } from 'react'
import { merge } from 'lodash';
import ReactApexChart from 'react-apexcharts';
// material
import { Card, CardHeader, Box } from '@material-ui/core';
import Alert from '../../Alert'
//
import { BaseOptionChart } from '../../charts';
// data
// import { coughs, time } from "../../../data/coughs";
import coughs from '../../../data/coughs.json';
import time from '../../../data/time.json';

// ----------------------------------------------------------------------

export default function AppCoughTracker() {
    const [maxCoughs, setMaxCoughs] = useState(0)
    const [sumCoughs, setSumCoughs] = useState(0)
    const CHART_DATA = coughs

    useEffect(() => {
        setMaxCoughs(Math.max(...CHART_DATA[1].data));
        setSumCoughs(CHART_DATA[1].data.reduce((a, b) => a + b, 0));
    }, [CHART_DATA]);


    const chartOptions = merge(BaseOptionChart(), {
        stroke: { width: [0, 5] },
        plotOptions: { bar: { columnWidth: '11%', borderRadius: 4 } },
        fill: {
            type: ['gradient', 'solid'],
            opacity: [1, 1],
            gradient: {
                inverseColors: false,
                shade: 'light',
                type: "vertical",
                opacityFrom: 0.85,
                opacityTo: 0.55,
                stops: [0, 100, 100, 100]
            }
        },
        chart: {
            animations: {
                enabled: false,
                easing: 'easeinout',
                speed: 8800,
                animateGradually: {
                    enabled: true,
                    delay: 150
                },
                dynamicAnimation: {
                    enabled: false,
                    speed: 350
                }
            },
        },
        labels: time.data,
        xaxis: { type: 'datetime' },
        tooltip: {
            shared: true,
            intersect: false,
            y: {
                formatter: (y) => {
                    if (typeof y !== 'undefined') {
                        return `${y.toFixed(0)} visits`;
                    }
                    return y;
                }
            }
        }
    });

    return (
        <Card>
            {maxCoughs > 2 && <Alert />}
            <CardHeader title="Cough Analyser" subheader="" />
            <Box sx={{ p: 3, pb: 1 }} dir="ltr">
                <ReactApexChart type="line" series={CHART_DATA} options={chartOptions} height={364} />
            </Box>
        </Card>
    );
}
