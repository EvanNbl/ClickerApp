import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import MoneyClickContext from '../Context';
import MoneyContext from '../Context';
import languageContext from '../Context';
import upgradeData from '../json/upgrade.json';

export default function Upgrade({ navigation }) {

    const { moneyClick, setMoneyClick } = useContext(MoneyClickContext);
    const { money, setMoney } = useContext(MoneyContext);
    const { language, setLanguage } = useContext(languageContext);

    const saveMoney = async () => {
        try {
            await AsyncStorage.setItem('money', money.toString());
            await AsyncStorage.setItem('moneyClick', moneyClick.toString());
        } catch (e) {
            console.log(e);
        }
    }

    const loadMoney = async () => {
        try {
            const money = await AsyncStorage.getItem('money');
            const moneyClick = await AsyncStorage.getItem('moneyClick');
            if (money !== null) {
                setMoney(parseInt(money));
            }
            if (moneyClick !== null) {
                setMoneyClick(parseInt(moneyClick));
            }
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        loadMoney();
    }, []);

    useEffect(() => {
        saveMoney();
    }, [money, moneyClick]);

    const [upgradeClick, setUpgradeClick] = useState(upgradeData.Click);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', marginTop: 50 }}>
            <Text style={{ fontSize: 30 }}>Upgrade</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <Text style={{ fontSize: 20 }}>Click level: {moneyClick}</Text>
                <TouchableOpacity onPress={() => {
                    if (money >= upgradeClick[moneyClick].price) {
                        setMoney(money - upgradeClick[moneyClick].price);
                        setUpgradeClick({ ...upgradeClick, price: upgradeClick[moneyClick].price * 2 });
                        setMoneyClick(moneyClick + 1);
                    }
                }}>
                    {
                        money >= upgradeClick[moneyClick].price ?
                            <Text>
                                Acheter
                            </Text>
                            :
                            <Text>
                                {money} / {upgradeClick[moneyClick].price}$
                            </Text>
                    }
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({});
