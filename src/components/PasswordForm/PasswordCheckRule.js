import React from 'react';
import styled from 'styled-components/macro';
import { CheckCircle } from 'styled-icons/boxicons-solid/CheckCircle';

function isActive(props){
	if (props.hasNumber || props.hasEightCharacters || props.hasOneSpecialCharacter || props.hasOneUppercaseLetter) {
		return true;
	}
	return false;
}

const Container = styled.div`
	display: flex;
	flex-flow: column;
`;

const Checkbox = styled.div`
	display: flex;
	align-items: center;
	margin: 5px;
`;

const Text = styled.span`
	color: #595f5e;
	font-size: 15px;
	margin-left: 10px;
	opacity: ${props => {
		if (isActive(props)) {
			return 1;
		} else {
			return 0.5;
		}
	}};
`;

const StyledCheckCircle = styled(CheckCircle)`
	color: #667578;
	height: 24px;
	opacity: ${props => {
		if (isActive(props)) {
			return 1;
		} else {
			return 0.5;
		}
	}};
`;

function PasswordCheckRule({ text, ...props }) {
	return (
		<Container>
			<Checkbox>
				<StyledCheckCircle {...props} />
				<Text {...props}>{text}</Text>
			</Checkbox>
		</Container>
	);
}

export default PasswordCheckRule;
