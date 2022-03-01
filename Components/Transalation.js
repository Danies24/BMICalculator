import {View, Text, Button} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import './i18Next';
export default function Transalation() {
  const {t, i18n} = useTranslation();
  return (
    <View>
      <Text
        style={{
          margin: 20,
          fontSize: 30,
        }}>
        {t('Happy')}
      </Text>
      <Button onPress={() => i18n.changeLanguage('en')} title="E N G L I S H" />
      <Button onPress={() => i18n.changeLanguage('ta')} title="T A M I L" />
      <Button onPress={() => i18n.changeLanguage('hi')} title="H I N D I" />
    </View>
  );
}
