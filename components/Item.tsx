import React, { PureComponent } from 'react';
import {StyleSheet, Text, View } from 'react-native';

type Countrie  = {
	name: string,
	capital: string,
	region: string,
	subregion: string,
}

type ItemProps = {
	countrie: Countrie
}

type IProps = {
	countrie: Countrie
}

class Item extends PureComponent<IProps, Countrie> {
	
	constructor (props: IProps){
		super(props);
		
		this.state = {
			name: props.countrie.name,
			capital: props.countrie.capital,
			region: props.countrie.region,
			subregion: props.countrie.subregion,
		};
	}
	
	render(){
		const {name, capital, region, subregion} = this.state
		return(
					<View style={styles.container}>
						 <Text style={styles.title}>{name}</Text>
						 <Text style={styles.subitem}>{capital}</Text>
						 <Text style={styles.subitem}>{region}</Text>
						 <Text style={styles.subitem}>{subregion}</Text>
					</View>
				);
	}
}

// function Item() {
//     
// }

const styles = StyleSheet.create({
	container: {
		paddingVertical: 7,
		paddingHorizontal: 10, 
		borderRadius: 18,
		backgroundColor: "#303030",
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#00adb5'
	},
	subitem: {
		fontSize: 14,
		color: '#fff'
	},
})

export default Item;
