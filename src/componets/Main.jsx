import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Icon from "react-native-vector-icons/FontAwesome5";

const Main = () => {

    return (
        <SafeAreaView style = {{ flex: 1 }}>

            <View style={styles.container}>
                <View style = {[styles.topView, {height: 50, flexDirection: "row", justifyContent: "space-between", alignItems: "center"}]}>
                    <TouchableOpacity>
                        <Icon size={24} name="bars" solid style={styles.icon}/>
                    </TouchableOpacity>

                    <Icon size={28} name="bell" solid style={styles.iconBell}/>
                    <Image 
                        source={require("./img/gatitogumbal.jpg")}
                        style={[styles.imagen, { width: 36, height: 36, borderRadius: 50 }]}
                    />
                </View>
                <View style = {[styles.bottomView, {backgroundColor: "#BDBDBD", height: 300,}]}>
                    <MapView
                    style={{ flex: 1,}} // Mover el corchete de cierre aquí
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
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create ({
    icon: {
        fontFamily: "FontAwesome5ProThin",
        marginLeft: 15,
      },
    iconBell: {
        marginLeft: 220,
    },
    imagen: {
        marginRight: 15,
    },
    container: {
        flex: 1,
      },
      bottomView: {
        backgroundColor: "blue",
      },
      topView: {
        position: "absolute",
        display: "flex",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1,
      },
})

export default Main