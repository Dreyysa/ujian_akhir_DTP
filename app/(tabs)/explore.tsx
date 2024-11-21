import { View, Text, Image, ScrollView } from "react-native";
import React from "react";

export default function AboutAppScreen() {
  return (
    <ScrollView className="flex-1 bg-gray-100 p-6">
      {/* App Logo */}
      <View className="items-center mb-6">
        <Image
          className="w-40 h-40 rounded-lg"
          source={require('../../assets/images/icon.png')}
        />
      </View>

      {/* App Name */}
      <Text className="text-2xl font-bold text-gray-800 text-center mb-4">
        Lutung Zoo, GO!
      </Text>

      {/* App Description */}
      <Text className="text-lg text-gray-600 leading-7 mb-6">
         "Lutung Zoo, GO!: Jelajahi Kehidupan Satwa, Dekatkan Alam di Genggaman!"
      </Text>

      {/* Features Section */}
      <Text className="text-xl font-bold text-gray-800 mb-4">Features:</Text>
      <View className="space-y-4">
      <View className="flex-row items-center space-x-2">
        <Text className="text-lg text-gray-600">✅</Text>
      <Text className="text-lg text-gray-600">Interface yang mudah dibaca</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <Text className="text-lg text-gray-600">✅</Text>
      <Text className="text-lg text-gray-600">Informasi lengkap tentang hewan</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <Text className="text-lg text-gray-600">✅</Text>
        <Text className="text-lg text-gray-600">Gambar hewan dengan resolusi tinggi</Text>
      </View>
      <View className="flex-row items-center space-x-2">
        <Text className="text-lg text-gray-600">✅</Text>
      <Text className="text-lg text-gray-600">Fakta unik tentang hewan</Text>
      </View>
  </View>
      {/* Team Section */}
      <Text className="text-xl font-bold text-gray-800 mt-8 mb-4">
        About Lutung Zoo:
      </Text>
      <Text className="text-lg text-gray-600 leading-7">
      Lutung Zoo, didirikan pada 1923 oleh Raden Sukma Dik di Jawa Barat, menjadi tempat perlindungan satwa dan tempat wisata edukasi. Kini, kebun binatang ini tetap menjadi destinasi edukasi dan simbol pelestarian satwa Nusantara.
      </Text>
    </ScrollView>
  );
}
