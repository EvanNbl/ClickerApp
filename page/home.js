import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MoneyClickContext from '../Context';
import MoneyContext from '../Context';
import languageContext from '../Context';
import hand from '../assets/hand.png';


export default function Home({ navigation }) {

  const { money, setMoney } = useContext(MoneyContext);
  const { moneyClick, setMoneyClick } = useContext(MoneyClickContext);
  const { language, setLanguage } = useContext(languageContext);

  const addMoney = () => {
    setMoney(money + moneyClick);
  }

  const saveMoney = async () => {
    try {
      await AsyncStorage.setItem('money', money.toString());
      await AsyncStorage.setItem('moneyClick', moneyClick.toString());
      await AsyncStorage.setItem('language', language);
    } catch (e) {
      console.log(e);
    }
  }

  const loadMoney = async () => {
    try {
      const money = await AsyncStorage.getItem('money');
      const moneyClick = await AsyncStorage.getItem('moneyClick');
      const savedLanguage = await AsyncStorage.getItem('language');
      if (money !== null) {
        setMoney(parseInt(money));
      }
      if (moneyClick !== null) {
        setMoneyClick(parseInt(moneyClick));
      }
      if (savedLanguage != null) {
        setLanguage(savedLanguage);
      } else {
        Alert.alert(
          "Choose your language",
          "Choose your language",
          [
            {
              text: "English",
              onPress: () => setLanguage('en')
            },
            {
              text: "Français",
              onPress: () => setLanguage('fr')
            }
          ]
        );
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
  }, [money, moneyClick, language]);

  return (
    <View style={styles.View}>
      <View style={styles.topView}>
        <View style={styles.cbView}>
          <Text style={styles.cbTopTextView}>{language === 'en' ? 'your balance' : 'votre solde'}</Text>
          <Text style={styles.cbTopTextMoneyView}>{language === 'en' ? '$' : '€'} {money}.00</Text>
          <View style={styles.cbBottomView}>
            <Text style={styles.cbBottomTextView}>Viso</Text>
            <Text style={styles.cbBottomTextnbView}>•••• •••• •••• 5486</Text>
          </View>
        </View>
        <View style={styles.statView}>
          <Text style={styles.statTextView}>{moneyClick},00 {language === 'en' ? '$ / Clicks' : '€ / Clic'}</Text>
          <Text style={styles.statTextView}> | </Text>
          <Text style={styles.statTextView}>0,00 {language === 'en' ? '$ / Minute' : '€ / Minute'}</Text>
        </View>
        <View style={styles.pubView}>
          <Text style={styles.pubTextView}>BOOST x5</Text>
        </View>
      </View>
      <View onTouchEnd={addMoney} style={styles.bottomView} >
        <View style={styles.helpHandView}>
          <Image source={hand} style={{ width: 90, height: 90 }} />
          <Text style={styles.helpHandTextView}>
            Clique ici pour gagner de l'argent
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  View: {
    width: '100%',
    height: '100%',
  },
  topView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#7B6ED7',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    display: 'flex',
    alignItems: 'center',
  },
  bottomView: {
    width: '100%',
    height: '52%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cbView: {
    width: '95%',
    height: 200,
    backgroundColor: '#B0A7FF',
    marginTop: 30,
    borderRadius: 15,
    padding: 20,
    color: 'white',
  },
  cbTopTextView: {
    fontSize: 17,
    fontWeight: 600,
    marginBottom: 3,
    color: 'white',
  },
  cbTopTextMoneyView: {
    fontSize: 30,
    fontWeight: 600,
    marginBottom: 10,
    color: 'white',
  },
  cbBottomView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,

  },
  cbBottomTextView: {
    fontSize: 30,
    fontWeight: 600,
    color: 'white',
  },
  cbBottomTextnbView: {
    fontSize: 17,
    fontWeight: 600,
    color: 'white',
  },
  statView: {
    width: '95%',
    height: 55,
    marginTop: 10,
    borderRadius: 15,
    paddingHorizontal: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#FFB380',
  },
  statTextView: {
    fontSize: 17,
    fontWeight: 700,
    color: 'white',
  },
  pubView: {
    width: '30%',
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF7F7F',
  },
  pubTextView: {
    fontSize: 17,
    fontWeight: 700,
  },
  helpHandView: {
    height: '90%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpHandTextView: {
    fontSize: 18,
    fontWeight: 900,
    color: '#3B3B3B',
    width: '50%',
    textAlign: 'center',
    marginTop: 15,
  },
});
