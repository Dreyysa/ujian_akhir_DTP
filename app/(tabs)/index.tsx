import { Link } from "expo-router";
import { FlatList, Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HewanCard from "../../components/HewanCard";
import { useState } from "react";

const CATEGORIES = [
  {
    id: 1,
    name: "herbivora",
  },
  {
    id: 2,
    name: "omnivora",
  },
  {
    id: 3,
    name: "karnivora",
  },
];

const DATA = [
  {
    id: "1",
    category_id: "3",
    name: "Singa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
  },
  {
    id: "2",
    category_id: "3",
    name: "Elang",
    logo: "https://cdn.britannica.com/92/152292-050-EAF28A45/Bald-eagle.jpg",
  },
  {
    id: "3",
    category_id: "3",
    name: "Lumba-lumba",
    logo: "https://www.georgiaaquarium.org/wp-content/uploads/2018/08/common-bottlenose-dolphin-750x750.jpg",
  },
  {
    id: "4",
    category_id: "1",
    name: "Gajah",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
  },
  {
    id: "5",
    category_id: "3",
    name: "Harimau",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
  },
  {
    id: "6",
    category_id: "3",
    name: "Serigala",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Eurasian_wolf_2.jpg",
  },
  {
    id: "7",
    category_id: "3",
    name: "Pinguin",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/be/Pygoscelis_papua.jpg",
  },
  {
    id: "8",
    category_id: "1",
    name: "Kuda",
    logo: "https://www.theinsuranceemporium.co.uk/blog/wp-content/uploads/2023/09/image-10.png",
  },
  {
    id: "9",
    category_id: "3",
    name: "Hiu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Corl0207_%2828225976491%29.jpg",
  },
  { 
    id: "10",
    category_id: "2",
    name: "Panda",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
  },
  { 
    id: "11",
    category_id: "2",
    name: "Homo Sapiens",
    logo: "https://upload.wikimedia.org/wikipedia/id/9/9c/George_Floyd.png",
  },
  { 
    id: "12",
    category_id: "1",
    name: "Lutung",
    logo: "https://cdns.klimg.com/merdeka.com/i/w/news/2016/10/18/767543/content_images/670x335/20161018170410-1-empat-ekor-lutung-disita-oleh-bksda-001-isn.jpg",
  },
  { 
    id: "13",
    category_id: "2",
    name: "Gorilla",
    logo: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2016_21/1556456/capture.png",
  },
  { 
    id: "14",
    category_id: "1",
    name: "Kerbau",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Wasserb%C3%BCffel_%2825787818312%29.jpg/800px-Wasserb%C3%BCffel_%2825787818312%29.jpg",
  },
  { 
    id: "15",
    category_id: "2",
    name: "Rakun",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/640px-Raccoon_in_Central_Park_%2835264%29.jpg",
  },
  { 
    id: "16",
    category_id: "1",
    name: "Kambing Gunung",
    logo: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/05/16/2385285944.jpg",
  },
  { 
    id: "17",
    category_id: "2",
    name: "Rubah",
    logo: "https://asset.kompas.com/crops/0A2Hh_8sNY2uqlk-01Xqa8a5qDY=/0x0:1916x1277/750x500/data/photo/2022/08/26/6308313b18d33.jpg",
  },
  { 
    id: "18",
    category_id: "1",
    name: "Jerapah",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BXJTnyUbICk_gju0ad9uPGda0WzMEMJlhVgmg0NWDk9KNCaS",
  },
  { 
    id: "19",
    category_id: "2",
    name: "Babi Hutan",
    logo: "https://assets-a1.kompasiana.com/items/album/2022/12/12/penggunaan-internet-of-things-untuk-mencegah-hama-babi-639690e608a8b55f67208462.png?t=o&v=770",
  },
  { 
    id: "20",
    category_id: "1",
    name: "Badak Jawa",
    logo: "https://cdn-green.katadata.co.id/media/images/2023/ilustrasi_badak_jawa_2024_06_02_11_35_05.jpg",
  },
];


export default function HomeScreen() {
  const [hewans, setHewans] = useState(DATA);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filterHewans = (category) => {
    setSelectedCategory(category);
    if (category) {
      const filteredHewans = DATA.filter((hewan) => hewan.category_id === category.toString());
      setHewans(filteredHewans);
    } else {
      setHewans(DATA); // Show all if no category is selected
    }
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Kategori */}
      <View>
        <View className="justify-center items-center bg-hijau-boomer mx-4 h-12 w-11/12">
          <Text className="text-white text-3xl font-bold">Lutung Zoo</Text>
        </View>
        <FlatList
          data={CATEGORIES}
          horizontal
          renderItem={({ item }) => (
            <Pressable onPress={() => filterHewans(item.id)}>
              <Text
                className={`m-4 border border-gray-300 p-4 rounded-lg text-xl text-center font-mono ${
                  selectedCategory === item.id ? "bg-hijau-daun text-white" : "bg-gray-100 text-black"
                }`}
              >
                {item.name}
              </Text>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>

      {/* Daftar Hewan */}
      <FlatList
        data={hewans}
        numColumns={2}
        renderItem={({ item }) => (
          <View className="flex-1 m-2">
            <HewanCard item={item} />
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}