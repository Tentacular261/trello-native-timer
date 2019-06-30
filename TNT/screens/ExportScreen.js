import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export class ExportScreen extends React.Component {
    static navigationOptions = {
        title: 'Export'
    };

    render() {
        return(
            <View>
                <Text style={styles.explanationText}>
                    Export as csv to either email or save to storage.
                </Text>
            </View>
        );
    }
}
      
const styles = StyleSheet.create({
    explanationText: {
        color: '#000'
    }
});