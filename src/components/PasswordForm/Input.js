import React, { useState, Fragment } from 'react';
import styled from 'styled-components/macro';
import { Eye } from 'styled-icons/icomoon/Eye';
import { EyeBlocked } from 'styled-icons/icomoon/EyeBlocked';

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 15px;
	position: relative;
`;

const StyledInput = styled.input`
	border-radius: 4px;
	border: 2px solid #7f81803d;
	padding: 5px;
`;

const StyledEye = styled(Eye)`
	position: absolute;
	height: 20px;
	top: 5px;
	right: 50px;
	cursor: pointer;
`;

const StyledEyeClosed = styled(EyeBlocked)`
	position: absolute;
	height: 20px;
	top: 5px;
	right: 50px;
	cursor: pointer;
`;

function Input({ onChange }) {
	const [passwordIsVisible, setVisibility] = useState(false);
	return (
		<Container>
			{passwordIsVisible ? (
				<Fragment>
					<StyledInput placeholder="password" type="text" onChange={onChange} />
					<StyledEye onClick={() => setVisibility(false)} />
				</Fragment>
			) : (
				<Fragment>
					<StyledInput placeholder="password" type="password" onChange={onChange} />
					<StyledEyeClosed onClick={() => setVisibility(true)} />
				</Fragment>
			)}
		</Container>
	);
}

export default Input;
