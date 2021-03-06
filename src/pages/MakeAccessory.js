import React from 'react';
import { deg } from "react-native-linear-gradient-degree";
import LinearGradient from "react-native-linear-gradient";
import { Image, Text, TouchableOpacity, View, StyleSheet, ScrollView } from "react-native";
import { fontPercentage, heightPercentage, widthPercentage } from "../../ResponsiveSize";

import { MFHeader } from "../components/make_filter/MFHeader";
import { AccessoryScroll } from "../components/make_filter/AccessoryScroll";

export function MakeAccessory({ navigation }) {
  return (
    <LinearGradient
      style={{flex: 1}}
      colors={[
        "rgba(212, 217, 255, 0.4) 3.45%",
        "rgba(232, 236, 255, 0.4) 28.13%",
        "rgba(145, 183, 255, 0.4) 75.96%"
      ]} {...deg(198.19)}>
      <LinearGradient
        style={{flex: 1}}
        colors={[
          "rgba(229, 241, 255, 0.4) 0%",
          "rgba(221, 229, 250, 0.4) 100%"
        ]} {...deg(180)}>
        <MFHeader
          name="프레임"
          onXbtnPress={() => navigation.navigate('Main')}
          onTextPress={() => navigation.navigate('MakeFrame')}
        />
        <View style={styles.mainView}>
          <View style={{flex: 1}}>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <Text style={styles.centerText}>소품 눌러보며 착용샷 보기</Text>
              <TouchableOpacity style={styles.completeBtn}>
                <Text style={styles.btnText}>완료</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.categoryTab}>
              <TouchableOpacity style={{marginLeft: widthPercentage(18)}}>
                <Image source={require('../assets/images/make-accessory/none-icon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: widthPercentage(33)}}>
                <Image source={require('../assets/images/make-accessory/heart-icon.png')}/>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: widthPercentage(22)}}>
                <Text style={styles.categoryText}>NEW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: widthPercentage(22)}}>
                <Text style={styles.categoryText}>HOT</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: widthPercentage(22)}}>
                <Text style={styles.categoryText}>모자</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: widthPercentage(22)}}>
                <Text style={styles.categoryText}>안경</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft: widthPercentage(22)}}>
                <Text style={styles.categoryText}>등등</Text>
              </TouchableOpacity>
            </View>
            <AccessoryScroll/>
          </View>
        </View>
      </LinearGradient>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#E0E9F9',
  },
  centerText: {
    fontFamily: 'NanumSquareR',
    fontSize: fontPercentage(16),
    color: '#0000007A',
  },
  completeBtn: {
    width: widthPercentage(56),
    height: heightPercentage(32),
    backgroundColor: '#FFFFFF63',
    borderWidth: 2,
    borderRadius: 16,
    borderColor: '#FFFFFF8C',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: widthPercentage(18),
    bottom: heightPercentage(14),
  },
  btnText: {
    fontFamily: 'NanumSquareRoundB',
    fontSize: fontPercentage(16),
    color: '#1E3968DE',
  },
  categoryTab: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#83A4DE',
    height: heightPercentage(48),
    alignItems: 'center',
  },
  categoryText: {
    fontFamily: 'NanumSquareRoundB',
    color: '#FFFFFF',
    fontSize: fontPercentage(16),
  },
});
