import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const Main = () => {
    return (
        <SafeAreaView style = {{ flex: 1 }}>

            <View style={styles.container}>
                <View style = {[styles.bottomView, {backgroundColor: "#BDBDBD", height: 280,}]}>
                    <Text>SocialLife</Text>
                    <MapView
                    style={{ flex: 1 }} // Mover el corchete de cierre aquí
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: 18.13313359156438,
                        longitude: -94.45517316448328,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                />
                </View>
                
                <View style = {[styles.topView, {backgroundColor: "#E0E0E0", height: 45}]}>
                    <Text>SocialLife</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
      },
      bottomView: {
        flex: 1,
        backgroundColor: "blue",
      },
      topView: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "red",
        zIndex: 1,
      },
})

export default Main