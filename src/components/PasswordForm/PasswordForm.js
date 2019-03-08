import React from 'react';
import PasswordCheckRule from './PasswordCheckRule';
import Input from './Input';
import Info from './Info';
import styled from 'styled-components/macro';

function hasNumber(password) {
	if (/[0-9]/.test(password)) {
		return true;
	}
	return false;
}

function hasOneUppercaseLetter(password) {
	if (/[A-Z]/.test(password)) {
		return true;
	}
	return false;
}

function hasOneSpecialCharacter(password) {
	if (/[^A-Za-z0-9]/.test(password)) { // matches any non-alphanumeric character
		return true;
	}
	return false;
}

function hasEightCharacters(password) {
	if (password.length > 7) {
		return true;
	}
	return false;
}

class PasswordForm extends React.Component {
	state = {
		password: '',
		checklist: [
			{ text: 'One Number', hasNumber: false },
			{ text: 'One uppercase letter', hasOneUppercaseLetter: false },
			{ text: 'One special character', hasOneSpecialCharacter: false },
			{ text: 'Minimum of eight characters', hasEightCharacters: false }
		]
	};

	onChange = e => {
		this.setState(
			{
				password: e.target.value
			},
			() => {
				this.setState(state => {
					return {
						checklist: state.checklist.map(el => {
							if (el.text === 'One Number') {
								if (hasNumber(state.password)) {
									return { ...el, hasNumber: true };
								}
								return { ...el, hasNumber: false };
							}
							if (el.text === 'One uppercase letter') {
								if (hasOneUppercaseLetter(state.password)) {
									return { ...el, hasOneUppercaseLetter: true };
								}
								return { ...el, hasOneUppercaseLetter: false };
							}
							if (el.text === 'One special character') {
								if (hasOneSpecialCharacter(state.password)) {
									return { ...el, hasOneSpecialCharacter: true };
								}
								return { ...el, hasOneSpecialCharacter: false };
							}
							if (el.text === 'Minimum of eight characters') {
								if (hasEightCharacters(state.password)) {
									return { ...el, hasEightCharacters: true };
								}
								return { ...el, hasEightCharacters: false };
							}
							return { ...el };
						})
					};
				});
			}
		);
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
