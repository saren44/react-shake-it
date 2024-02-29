import { CodeBlock, CopyBlock } from 'react-code-blocks'
import styled from 'styled-components'


const StyledExampleContainer = styled.div`
	width: 90%;
	height: 400px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	.example {
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 300px;
	}

	.name {
		margin-left: 20px;
		font-size: 24px;
		font-weight: 300;
	}

	.description {
		margin-left: 10px;
		font-size: 16px;
		margin-top: 0;
		line-height: 0;
	}

	.displayBox {
		width: 40%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	.codeBlockBox {
		width: 60%;
		height: 100%;
		font-family: monospace;
	}
`



export const ExampleBox = ({children, code, name, desc}) => {
	return (
		<StyledExampleContainer>
			<p className='name'> {name} </p>
			<p className='description'> {desc} </p>
			<div className='example'>
				<div className='displayBox'>
					{children}
				</div>
				<div className='codeBlockBox'>
					<CopyBlock
						text={code}
						language={'jsx'}
						customStyle={{
							overflowY: 'auto',
							height: '100%',
							tabSize: 2,
						}}
						codeBlock
					/>
				</div>
			</div>

		</StyledExampleContainer>
	)
}