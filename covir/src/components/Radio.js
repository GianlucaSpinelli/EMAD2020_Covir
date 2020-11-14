import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import RadioButtonRN from 'radio-buttons-react-native';
import FormInput from '../components/FormInput';

class Radio extends React.Component {
	
	
	
	constructor(props) {
        super(props);
		
        this.state = {
				res: {},
			example: 1,
		};

		this.colors = [
			{
				label: 'Whatsapp'
			},
			{
				label: 'Facebook'
			},
			{
				label: 'Skype'
			},
			{
				label: 'Chiamata Normale'
			},
			{
				label: 'Messaggio'
			},
		];
		
		this._renderRadioBtn = this._renderRadioBtn.bind(this);
		
	}

	_renderRadioBtn() {
		let { example } = this.state;
		const info=''
			return (
				<View>
				<RadioButtonRN
                    data={this.colors}
					animationTypes={['rotate']}
					initial={2}
					selectedBtn={(e) => this.setState({ res: e })}
					circleSize={16}
					icon={
						<Icon
							name="rocket"
							size={25}
							color="#2c9dd1"
						/>
					}
				/>
				<FormInput style={{marginTop:10,backgroundColor:'#ffffff'}}
          			labelName='Info contatto relativo alla piattaforma scelta'
          			value={info}
          			onChangeText={(testo) => this.setState({ info: testo })}
        		/>
				</View>
				
			)
		}

		

	render() {
		let { example } = this.state;
		
		return (
			<View>
				<View style={{ top: 50, padding: 20, marginBottom: '-10%' }}>

					{ this._renderRadioBtn() }
					
				</View>
				{
					this.state.res &&
						<View style={{ top: 100, width: '100%', alignItems: 'center', marginTop: '0%' }}>
							<Text style={{ fontSize: 13 }}>
								Piattaforma scelta:
							</Text>
							<Text style={{ fontSize: 24, color: 'rgb(33,82,114)', fontSize: 25, fontWeight: "bold"}}>
								{this.state.res.label}
							</Text>
						</View>
				}

			</View>
		);
	}
};

const styles = StyleSheet.create({
	types: {
		marginHorizontal: 5,
		borderWidth: 1,
		borderColor: '#bbb',
		padding: 4,
		borderRadius: 3,
		backgroundColor: '#fff'
	}
});

export default Radio;