import React from 'react';
import styled from 'styled-components/macro';
import { Lock } from 'styled-icons/material/Lock';
import { ArrowBack } from 'styled-icons/boxicons-regular/ArrowBack';

const Container = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	margin: 15px;
	position: relative;
`;

const StyledLock = styled(Lock)`
	color: white;
	height: 24px;
	background: #667578;
	border-radius: 100%;
	width: 24px;
	padding: 8px;
	margin-bottom: 15px;
`;

const ArrowContainer = styled.div`
	background: #667578;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
	left: 5px;
	top: 5px;
`;

const StyledArrowBack = styled(ArrowBack)`
	color: white;
	height: 20px;
	width: 20px;
	margin: 3px;
`;

const Text = styled.div`
	color: #667578;
	font-size: 15px;
`;

function Info() {
	return (
		<Container>
			<ArrowContainer>
				<StyledArrowBack />
			</ArrowContainer>
			<StyledLock />
			<Text>Create your password. To maintain security, it has a few requirements.</Text>
		</Container>
	);
}

export default Info;
