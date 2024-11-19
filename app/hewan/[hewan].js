import { View, Text, Image } from "react-native-web";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import HewanCard from "../../components/HewanCard";

const DATA = [
    {
        id: "1",
        category_id: "3",
        name: "Singa",
        logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg",
        text: "Singa (Panthera leo) adalah salah satu hewan predator terbesar yang hidup di sabana dan padang rumput Afrika, serta sebagian kecil di India. Dikenal sebagai raja hutan singa memiliki tubuh besar dan kekar, dengan jantan yang memiliki surai yang menonjol. Mereka adalah hewan sosial yang hidup dalam kelompok yang disebut pride, terdiri dari betina, anak-anak, dan beberapa pejantan. Singa jantan memiliki peran utama dalam melindungi kelompok, sementara singa betina berburu untuk memenuhi kebutuhan pangan. Mereka adalah pemangsa puncak dalam ekosistem mereka dan terkenal dengan kekuatan serta keterampilan berburu yang luar biasa.",
      },
      {
        id: "2",
        category_id: "3",
        name: "Elang",
        logo: "https://cdn.britannica.com/92/152292-050-EAF28A45/Bald-eagle.jpg",
        text: "Elang (Aquila spp.) adalah burung pemangsa besar yang dikenal karena kemampuan terbang yang luar biasa dan penglihatan tajamnya. Dengan sayap lebar dan tubuh yang kuat, elang sering terlihat di daerah pegunungan, hutan, dan padang rumput. Mereka adalah pemangsa puncak yang memangsa mamalia, ikan, dan burung lainnya. Elang memiliki cakar yang sangat tajam dan paruh yang kuat, yang membantunya dalam berburu dan memakan mangsa. Beberapa spesies elang, seperti elang laut dan elang botak, menjadi simbol kebesaran dan kekuatan dalam berbagai budaya.",
      },
      {
        id: "3",
        category_id: "3",
        name: "Lumba-lumba",
        logo: "https://www.georgiaaquarium.org/wp-content/uploads/2018/08/common-bottlenose-dolphin-750x750.jpg",
        text: "Lumba-lumba (Delphinidae) adalah mamalia laut yang terkenal dengan kecerdasan tinggi, kelincahan, dan sifat sosialnya. Mereka hidup dalam kelompok yang disebut pod dan sering terlihat melompat atau bermain di permukaan air. Lumba-lumba memiliki tubuh ramping yang didesain untuk berenang cepat dan efisien di laut. Mereka berkomunikasi menggunakan suara dan gerakan tubuh, serta dapat menggunakan ekolokasi untuk mendeteksi objek dan mangsa di bawah air. Lumba-lumba dikenal ramah terhadap manusia dan sering menunjukkan perilaku yang tampak bersahabat.",
      },
      {
        id: "4",
        category_id: "1",
        name: "Gajah",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
        text: "Gajah (Elephantidae) adalah mamalia darat terbesar yang dikenal karena tubuhnya yang besar, telinga lebar, dan belalai panjang yang multifungsi. Gajah memiliki kulit tebal yang melindungi mereka dari panas dan gigitan serangga. Mereka hidup dalam kelompok sosial yang disebut kawanan, yang dipimpin oleh gajah betina tertua. Gajah adalah pemakan herbivora yang memakan berbagai jenis tanaman, dari rumput hingga pohon. Belalai mereka sangat fleksibel dan digunakan untuk makan, minum, serta berkomunikasi. Gajah juga dikenal akan kecerdasan mereka dan kemampuan mereka untuk menunjukkan emosi seperti empati dan rasa kehilangan.",
      },
      {
        id: "5",
        category_id: "3",
        name: "Harimau",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
        text: "Harimau adalah karnivora terbesar dari keluarga kucing, dikenal dengan bulu oranye bergaris hitam yang khas. Hewan ini adalah pemburu soliter yang kuat, mampu berlari cepat dan berenang dengan baik. Harimau biasanya hidup di hutan dan padang rumput, memakan mangsa seperti rusa dan babi hutan. Sayangnya, populasinya terancam akibat perburuan dan kehilangan habitat.",
      },
      {
        id: "6",
        category_id: "3",
        name: "Serigala",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/68/Eurasian_wolf_2.jpg",
        text: "Serigala adalah hewan karnivora dari keluarga anjing yang dikenal sebagai pemburu cerdas dan sosial. Hidup dalam kawanan, mereka berkomunikasi melalui suara, gerakan tubuh, dan ekspresi wajah. Serigala memiliki tubuh ramping, bulu tebal, dan kemampuan berlari jarak jauh untuk mengejar mangsa. Mereka tersebar luas di berbagai habitat, termasuk hutan, padang rumput, dan tundra."
      },
      {
        id: "7",
        category_id: "3",
        name: "Pinguin",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxgpDT3UQecCY8ifpNz_Ic3Yyjl_5qVITYIw&s",
        text: "Penguin (Spheniscidae) adalah burung laut yang tidak bisa terbang, terkenal dengan kemampuan berenangnya yang luar biasa. Mereka memiliki tubuh tegak dengan bulu tebal yang melindungi mereka dari suhu ekstrem di habitatnya, yang sebagian besar berada di Antartika atau daerah beriklim dingin. Pinguin menggunakan sayapnya sebagai sirip untuk bergerak cepat di bawah air, berburu ikan, cumi-cumi, dan krill. Di darat, pinguin bergerak dengan cara berjalan tegak atau meluncur di atas perut mereka. Mereka juga dikenal karena tingkah lakunya yang sosial, hidup dalam koloni besar, dan merawat anak-anak mereka dengan kasih sayang.",
      },
      {
        id: "8",
        category_id: "1",
        name: "Kuda",
        logo: "https://www.theinsuranceemporium.co.uk/blog/wp-content/uploads/2023/09/image-10.png",
        text: "Kuda adalah mamalia herbivora cepat dan kuat, dijinakkan untuk transportasi, pertanian, dan olahraga. Mereka cerdas, sosial, dan memiliki penglihatan tajam.",
      },
      {
        id: "9",
        category_id: "3",
        name: "Hiu",
        logo: "https://awsimages.detik.net.id/community/media/visual/2019/07/26/814e9e3c-cf07-40e8-812c-55f5ab9025e1.jpeg?w=1200",
        text: "Hiu (seluruh keluarga Carcharhinidae dan Lamnidae) adalah predator laut dengan tubuh ramping dan gigi tajam. Mereka memiliki indera yang sangat peka, memungkinkan mereka mendeteksi mangsanya. Hiu penting untuk keseimbangan ekosistem laut, meskipun sebagian besar tidak berbahaya bagi manusia.",
      },
      { 
        id: "10",
        category_id: "2",
        name: "Panda",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
        text: "Panda adalah beruang besar khas Cina dengan bulu hitam putih yang unik. Hewan ini utamanya memakan bambu, tetapi juga mengonsumsi buah dan telur. Panda dikenal tenang dan menjadi simbol konservasi karena statusnya yang terancam akibat hilangnya habitat alami.",
      },
      { 
        id: "11",
        category_id: "2",
        name: "Orang Utan",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREJSm2faPkKdIDQbacXYynrGmC0OyGpFiX5yXxU63qYqf9pCKp",
        text: "Orang utan atau mawas adalah kera besar yang berasal dari hutan hujan Indonesia dan Malaysia. Sekarang hewan ini hanya ditemukan di sebagian Kalimantan dan Sumatra, tetapi selama era Pleistosen, mereka tersebar di seluruh Asia Tenggara dan Tiongkok Selatan. ",
      },
      { 
        id: "12",
        category_id: "1",
        name: "Lutung",
        logo: "https://cdns.klimg.com/merdeka.com/i/w/news/2016/10/18/767543/content_images/670x335/20161018170410-1-empat-ekor-lutung-disita-oleh-bksda-001-isn.jpg",
        text: "Lutung merupakan kelompok monyet Dunia Lama yang membentuk genus Trachypithecus. Secara garis besar, lutung tersebar di dua wilayah: Asia Tenggara dan India selatan berikut Sri Lanka. Lutung berbadan langsing dan berekor panjang."
      },
      { 
        id: "13",
        category_id: "2",
        name: "Gorilla",
        logo: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/newscms/2016_21/1556456/capture.png",
        text: "Gorila adalah jenis primata yang terbesar. Makanan gorila terdiri dari sayur-sayuran, walaupun kadang juga makan serangga. Karena itu gorila dapat digolongkan sebagai binatang omnivora. Gorila berasal dari hutan tropis di Afrika. 97-98% DNA gorila identik dengan DNA manusia."
      },
      { 
        id: "14",
        category_id: "1",
        name: "Kerbau",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Wasserb%C3%BCffel_%2825787818312%29.jpg/800px-Wasserb%C3%BCffel_%2825787818312%29.jpg",
        text: "Kerbau, atau yang biasa disebut kebo, benuang atau kerbau air, adalah binatang memamah biak yang menjadi ternak bagi banyak bangsa di dunia, terutama Asia dan Amerika Selatan."
      },
      { 
        id: "15",
        category_id: "2",
        name: "Rakun",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Raccoon_in_Central_Park_%2835264%29.jpg/640px-Raccoon_in_Central_Park_%2835264%29.jpg",
        text: "Rakun biasa atau rakun, adalah Mamalia berukuran sedang yang berasal dari Amerika Utara. Rakun adalah spesies terbesar dalam keluarga Procyonidae, memiliki panjang tubuh 40 hingga 70 cm dan berat 35 hingga 9 kg. Kulitnya terdiri dari rambut abu-abu yang tebal untuk mencegah masuknya hawa dingin kedalam tubuh."
      },
      { 
        id: "16",
        category_id: "1",
        name: "Kambing Gunung",
        logo: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2019/05/16/2385285944.jpg",
        text: "Kambing Gunung adalah mamalia berkuku yang mempunyai tanduk pendek, bengkok, dan berwarna hitam. tepian kukunya tajam, melingkupi telapak yang lunak di bagian dalam. Dengan kukunya ini ia mencengkeram batu karang. Binatang ini lebih tepat dinamakan kambing Rocky Mountain."
      },
      { 
        id: "17",
        category_id: "2",
        name: "Rubah",
        logo: "https://asset.kompas.com/crops/0A2Hh_8sNY2uqlk-01Xqa8a5qDY=/0x0:1916x1277/750x500/data/photo/2022/08/26/6308313b18d33.jpg",
        text: "Rubah adalah mamalia omnivora berukuran kecil hingga sedang yang termasuk dalam beberapa genera keluarga Canidae. Mereka memiliki tengkorak yang rata, telinga yang tegak dan berbentuk segitiga, moncong yang runcing dan agak menengadah, dan ekor yang panjang dan lebat."
      },
      { 
        id: "18",
        category_id: "1",
        name: "Jerapah",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BXJTnyUbICk_gju0ad9uPGda0WzMEMJlhVgmg0NWDk9KNCaS",
        text: "Jerapah adalah mamalia berkuku besar Afrika yang termasuk dalam genus Giraffa. Ini adalah hewan darat tertinggi yang masih hidup dan pemamah biak terbesar di Bumi. Secara tradisional, jerapah dianggap sebagai satu spesies, Giraffa camelopardalis, dengan sembilan subspesies."
      },
      { 
        id: "19",
        category_id: "2",
        name: "Babi Hutan",
        logo: "https://assets-a1.kompasiana.com/items/album/2022/12/12/penggunaan-internet-of-things-untuk-mencegah-hama-babi-639690e608a8b55f67208462.png?t=o&v=770",
        text: "Babi celeng secara umum dikenal sebagai babi hutan adalah nenek moyang babi liar yang menurunkan babi domestik. Daerah persebarannya berada di wilayah hutan-hutan Eropa Tengah, Mediterania dan sebagian besar Asia hingga wilayah paling selatan di Indonesia."
      },
      { 
        id: "20",
        category_id: "1",
        name: "Badak Jawa",
        logo: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQDjsF9IvbogtcAQIN9I6_XYq137cmPICSUnkjQARme1c2H8Ccq",
        text: "Badak Jawa, dikenal juga sebagai badak Sunda atau badak bercula satu kecil, adalah anggota terancam kritis dari genus Rhinoceros, dari keluarga badak, Rhinocerotidae, dan salah satu dari lima spesies badak yang masih ada di kawasan Asia Selatan dan Afrika. "
      },
  ];

const HewanDetail = () => {
    const { hewan } = useLocalSearchParams();
    const selectedHewan = DATA.filter(function (item) {
      return item.name === hewan;
    });
  
    console.log(selectedHewan);
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HewanCard item={selectedHewan[0]} />
      </SafeAreaView>
    );
  };
  
  export default HewanDetail;