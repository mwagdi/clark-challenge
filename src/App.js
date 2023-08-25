"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TextExample_1 = require("components/TextExample/TextExample");
var expo_1 = require("expo");
var expo_status_bar_1 = require("expo-status-bar");
var react_native_1 = require("react-native");
var text = 'fsdf';
function App() {
    return (<react_native_1.View style={styles.container}>
      <TextExample_1.default />
      <expo_status_bar_1.StatusBar style="auto"/>
    </react_native_1.View>);
}
exports.default = App;
var styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
(0, expo_1.registerRootComponent)(App);
