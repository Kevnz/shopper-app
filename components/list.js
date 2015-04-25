'use strict';
var React = require('react-native');
var api = require('../util/api');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} = React;

var ProductList = React.createClass({
fetchData: function () {
    var self = this;
    api.getAllProducts((err, response) => {
      console.log(response);
      self.setState({dataSource: response.items});
    });
},
 componentDidMount: function() {
    this.fetchData();
  },
getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },
render: function() {
  return (
    <ListView
      dataSource={this.state.dataSource}
      renderRow={(rowData) => <Text>{rowData}</Text>}
    />
  );
}

});

module.exports =ProductList;