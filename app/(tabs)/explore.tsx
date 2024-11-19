import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function AboutAppScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-6">
      {/* App Logo */}
      <View className="items-center mb-6">
        <Image
          className="w-40 h-40 rounded-lg"
          source={require('../../assets/images/iconforn.png')}
        />
      </View>

      {/* App Name */}
      <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
        Lutung Zoo App
      </Text>

      {/* App Description */}
      <Text className="text-lg text-gray-600 leading-7 mb-6">
        Berisi hewan-hewan yang ada di lutung zoo
      </Text>

      {/* Features Section */}
      <Text className="text-xl font-bold text-gray-800 mb-4">Features:</Text>
      <View className="space-y-2">
        <Text className="text-lg text-gray-600">- Interface yang mudah dibaca</Text>
        <Text className="text-lg text-gray-600">- hewan</Text>
        <Text className="text-lg text-gray-600">- info tentang hewan</Text>
        <Text className="text-lg text-gray-600">- gambar hewan</Text>
      </View>

      {/* Team Section */}
      <Text className="text-xl font-bold text-gray-800 mt-8 mb-4">
        About Lutung Zoo:
      </Text>
      <Text className="text-lg text-gray-600 leading-7">
      Lutung Zoo, didirikan pada 1923 oleh Raden Sukma Dik di Jawa Barat, menjadi tempat perlindungan satwa dan dikenal dengan legenda Nyi Floyd. Kini, kebun binatang ini tetap menjadi destinasi edukasi dan simbol pelestarian satwa Nusantara.
      </Text>
    </ScrollView>
  );
}
