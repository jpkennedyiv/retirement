import { CartesianGrid, Label, LineChart, Line, Legend, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import React from 'react';

export default class ReactChart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
		  	width : "100%",
		    height : 500,
		    layout: 'horizontal',
		    margins : {left: 75, right: 100, top: 50, bottom: 50},
		};

	}

	render() {
		if (this.props.data.length == 0) {
			return null;
		}

		return (
			<ResponsiveContainer height={this.state.height} width={this.state.width}>
				<LineChart
					margin={this.state.margins}
					data={this.props.data} >
						<CartesianGrid strokeDasharray="3 3" />
						<Legend />
						<ReferenceLine x={this.props.retirementAge} stroke="green" label={"Retirement Age: " + this.props.retirementAge}/>
						<Line type="monotone" dataKey="Savings" stroke="#82ca9d" />
						<Line type="monotone" dataKey="Net Income" stroke="#8884d8" />	
			    		<Tooltip />
			    		<XAxis dataKey="Age" />
						<YAxis />
			    </LineChart>	
			</ResponsiveContainer>
		);
	}
}