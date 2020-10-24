import  React,{PureComponent} from 'react';
import Paper from '@material-ui/core/Paper';
import {Chart, ArgumentAxis,ValueAxis,BarSeries,} from '@devexpress/dx-react-chart-material-ui';


import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale} from '@devexpress/dx-react-chart';


const dataTest = [
    {
        state: 'janeiro',
        expent: 300
    }
]

const Extract = () => {
    return (
        <Paper>
            <Chart
                data = {dataTest}
            >
                <ArgumentScale factory={scaleBand} />
                <ArgumentAxis />
                <ValueAxis />
                
                <BarSeries 
                    valueField = "expent"
                    name = "meses"
                    argumentField = "state"

                />
            </Chart>
        </Paper>
    )
}

export default Extract



