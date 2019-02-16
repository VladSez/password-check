import React from 'react';
import PasswordCheckRule from './PasswordCheckRule';
import Input from './Input';
import Info from './Info';
import styled from 'styled-components/macro';

class PasswordForm extends React.Component {
	state = {
		password: null,
		checklist: [
			{text: 'One Number', hasNumber: true},
			{text:'One uppercase letter',hasOneUppercaseLetter: false },
			{text:'One special character', hasOneSpecialCharacter: false},
			{text:'Minimum of eight characters',hasEightCharacters: false}
		]
	};

	onChange = e => {
		this.setState({
			password: e.target.value
		});
	};
	render() {
		const { password, checklist } = this.state;
		return (
			<Container>
				<Form>
					<Info />
					<Input password={password} onChange={this.onChange} />
					{checklist.map(rule => (
						<PasswordCheckRule {...rule} key={rule.text} />
					))}
					{/* <PasswordCheckList /> */}
				</Form>
			</Container>
		);
	}
}

export default PasswordForm;

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Form = styled.div`
	color: #7f8180;
	height: 300px;
	width: 300px;
	border: 2px solid #7f8180;
	border-radius: 4px;
	padding: 10px;
`;
