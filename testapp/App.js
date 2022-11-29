import React, { Component } from "react";
import { StyleSheet, Text, View, FlatList,Image } from "react-native";
import { ListItem, SearchBar } from "react-native-elements";
import filter from "lodash.filter";

const DATA = [
{
	id: "1",
    src: <Image style={{
      height: 100,
      width: 100,
      }}
      source={require('./assets/image/forest.jpg')}/>,
      title: "ม่อนจอง",
},
{
	id: "2",
    src: <Image style={{
        height: 100,
        width: 100,
      }}
      source={require('./assets/image/longpha.png')}/>,
      title: "เขาหลวงสุโขทัย",
},
];

const Item = ({ title }) => {
return (
	<View style={styles.item}>
	<Text>{title}</Text>
	</View>
);
};

const renderItem = ({ item }) => <Item title={item.src} />;
class Search extends Component {
constructor(props) {
	super(props);
	this.state = {
	loading: false,
	data: DATA,
	error: null,
	searchValue: "",
	};
	this.arrayholder = DATA;
}

searchFunction = (text) => {
	const updatedData = this.arrayholder.filter((item) => {
	const item_data = `${item.title.toUpperCase()})`;
	const text_data = text.toUpperCase();
	return item_data.indexOf(text_data) > -1;
	});
	this.setState({ data: updatedData, searchValue: text });
};

render() {
	return (
	<View style={styles.container}>
		<SearchBar
		placeholder="Search Here..."
		lightTheme
		round
		value={this.state.searchValue}
		onChangeText={(text) => this.searchFunction(text)}
		autoCorrect={false}
		/>
		<FlatList
		data={this.state.data}
		renderItem={renderItem}
		keyExtractor={(item) => item.id}
		/>
	</View>
	);
}
}

export default Search;

const styles = StyleSheet.create({
container: {
	marginTop: 30,
	padding: 2,
},
item: {
	backgroundColor: "#D9D9D9",
	marginVertical: 8,
	marginHorizontal: 12,
},
});
