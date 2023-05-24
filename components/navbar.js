import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from "react-native";
import Home from "../assets/home.png";
import work from "../assets/work.png";
import settings from "../assets/settings.png";
import stats from "../assets/stats.png";
import potion from "../assets/potion.png";
import { useNavigation } from '@react-navigation/native';

export default function Navbar({  }) {
    const navigation = useNavigation();

    return (
        <View style={styles.ViewNavbar}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: '100%' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Upgrade')} style={{ display: "flex", alignItems: "center" }}>
                    <Image source={work} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'white', fontSize: 15, textAlign: "center", fontWeight: "bold" }}>Work</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Upgrade')} style={{ display: "flex", alignItems: "center"  }}>
                    <Image source={potion} style={{ width:30, height: 30 }} />
                    <Text style={{ color: 'white', fontSize: 15, textAlign: "center", fontWeight: "bold" }}>Potion</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{ display: "flex", alignItems: "center"  }}>
                    <Image source={Home} style={{ width: 30, height: 30, }} />
                    <Text style={{ color: 'white', fontSize: 15, textAlign: "center", fontWeight: "bold" }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Upgrade')} style={{ display: "flex", alignItems: "center"  }}>
                    <Image source={stats} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'white', fontSize: 15, textAlign: "center", fontWeight: "bold" }}>Stats</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Upgrade')} style={{ display: "flex", alignItems: "center"  }}>
                    <Image source={settings} style={{ width: 30, height: 30 }} />
                    <Text style={{ color: 'white', fontSize: 15, textAlign: "center", fontWeight: "bold" }}>Settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    ViewNavbar: {
        position: 'absolute',
        bottom: 20,
        width: '96%',
        height: 70,
        backgroundColor: '#7B6ED7',
        borderRadius: 20,
        left: '2%',
        right: '2%',
    },
});