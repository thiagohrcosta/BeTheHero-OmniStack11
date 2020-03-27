import React from "react";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from 'expo-mail-composer';


import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Detail() {
    const navigation = useNavigation();
    const message = 'Olá HelpCat, estou entrando em contato para ajudar no caso "Alimentos" com o valor de "R$ 120,00".';

    function navigateBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Herói do caso: Alimentos',
            recipients: ['teste@teste.com.br'],
            body: message,
        })

    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=0000000000&text=${message}`);
    }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
            <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
            <Text style={[styles.incidentProperty, { marginTop: 0}]}>ONG:</Text>
            <Text styles={styles.incidentValue}>HelpCat</Text>
  
            <Text styles={styles.incidentProperty}>CASO:</Text>
            <Text styles={styles.incidentValue}>Cuidados</Text>
  
            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>R$ 120,00</Text>
      </View>

      <View style={styles.contactBox}>
          <Text style={styles.heroTitle}>Salve o dia!</Text>
          <Text style={styles.heroTitle}>Seja o heóri desse caso.</Text>

          <Text style={styles.heroDescription}>Entre em contato.</Text>

          <View style={styles.actions}>
              <TouchableOpacity style={styles.action} onPress={sendWhatsapp} >
                  <Text style={styles.actionText}>WhatsApp</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.action} onPress={sendMail} >
                  <Text style={styles.actionText}>E-mail</Text>
              </TouchableOpacity>
          </View>

      </View>

    </View>
  );
}
