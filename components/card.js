import  {View, SafeAreaView, Text, StyleSheet, Platform} from "react-native";

export default function Card(){
    return(
        <View style={styles.Card}>
            <Text>Pokt hamada</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Card: {
        BackgroundColor: "White",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios:{
                shadowOffset:{width: 2, height: 2},
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android:{
                elevation: 5,
            }
        
        })

    }
})