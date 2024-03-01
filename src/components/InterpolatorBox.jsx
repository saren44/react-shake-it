import { Chart } from 'react-charts'
import styled from 'styled-components'
import React from 'react'

const StyledInterpolatorBox = styled.div`
	width: 90%;
	min-height: 250px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 25px;
	margin-top: 50px;

	.textContainer {
		width: 50%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		margin-bottom: 25px;
	}

	.chartContainer {
		width: 350px;
		height: 250px;
		background-color: 'red';
	}


	.name {
		margin-left: 20px;
		font-size: 24px;
		font-weight: 300;
		font-family: monospace;
	}

	.args {
		font-family: monospace;
		margin-left: 20px;
		font-size: 14px;
		line-height: 0px;
	}

	.description {
		margin-left: 10px;
		font-size: 20px;;
		margin-top: 20px;
	}
`



export const InterpolatorBox = ( {name, desc, fn, args} ) => {


	const data = React.useMemo(
		() => {
			let newData = [];
			for (let i = 1; i < 51; i++) {
				newData.push({
					step: (i / 50),
					value: fn(i / 50)
				})
			}

			return [{
				label: 'generated value',
				data: newData
			}]
		}, []
	)

	const primaryAxis = React.useMemo(
		() => ({
			getValue: datum => datum.step,
		}), []
	)

	const secondaryAxes = React.useMemo(
		() => [
			{
				getValue: datum => datum.value
			}
		]
	)
	return (
		<StyledInterpolatorBox>
			<div className='textContainer'>
				<p className='name'> {name} </p>
				<p className='description'> args:</p>
				{
					args.map(el => (
						<p className='args'> {el} </p>
					))
				}
				<p className='description'> {desc} </p>
			</div>
			<div className='chartContainer'>
				<Chart 
					options={{
						data,
						primaryAxis,
						secondaryAxes,
						defaultColors:['#0aefff'],
					}}

					style={{
						backgroundColor: '#f1f1f1',
						
					}}
					
			/>
			</div>

		</StyledInterpolatorBox>
	)
}