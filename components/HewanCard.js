import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const HewanCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/hewan/[hewan]",
        params: { hewan: item.name },
      }}
    >
      <View className="p-2 bg-hijau-daun rounded-xl items-center">
        <Image
          className="rounded-xl justify-center"
          source={{
            uri: item.logo,
            height: 150,
            width: 150,
          }}
        />
        <Text className="pt-10 pb-5 text-center font-bold text-neutral-100 font-mono text-2xl">
        {item.id}. {item.name}
        </Text>
        <Text className="text-center font-bold text-neutral-100 font-mono text-sm">
            {item.text}
        </Text>
      </View>
    </Link>
  );
};
export default HewanCard;