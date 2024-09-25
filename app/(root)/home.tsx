import AskQuestionendExperienceSection from "@/components/expericence-ask-question";
import Search from "@/components/search";
import { Feather } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import header from "@/assets/images/header.png";
import Card from "@/components/card";
import AdvertiseMent from "@/components/ad";
import Fotter from "@/components/footer";
import { useState } from "react";

type ItemData = {
  id: string;
  name: string;
  content: string;
};

const HomeListItem: ItemData[] = [
  { id: "1", content: "post", name: "Home" },
  { id: "2", content: "advertisement", name: "Home2" },
  { id: "3", content: "post", name: "Home3" },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({ item }: { item: HomeListItem }) => {
    const checkPostorAd =
      item.content === "advertisement" ? (
        <AdvertiseMent />
      ) : (
        <View className=" mb-[34px]">
          <Card />
        </View>
      );
    return checkPostorAd;
  };

  return (
    <FlatList
      data={HomeListItem}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{}}
      ListHeaderComponent={() => {
        return (
          <SafeAreaView className={` ${Platform.OS === "ios" ? "" : "mt-8 "}`}>
            <View className=" flex flex-row bg-white  py-7 px-5  items-center justify-between">
              <Text className=" font-PlusJakartaSansBold text-xl">
                Business & First Class ​Reviews
              </Text>

              <Feather name="menu" size={24} color="black" />
            </View>
            <AskQuestionendExperienceSection />

            <Search />

            <View className="mx-5  my-[34px] rounded-xl overflow-hidden">
              <Image
                source={header}
                classname=" w-full h-32"
                resizeMode="cover"
              />
            </View>
          </SafeAreaView>
        );
      }}
      ListFooterComponent={() => <Fotter />}
    />
  );
}

{
  /* <ScrollView className={` ${Platform.OS === "ios" ? "" : "mt-8 "}`}> */
}
{
  /* <View className=" flex flex-row bg-white  py-7 px-5  items-center justify-between">
  <Text className=" font-PlusJakartaSansBold text-xl">
    Business & First Class ​Reviews
  </Text>

  <Feather name="menu" size={24} color="black" />
</View>
<AskQuestionendExperienceSection />

<Search />

<View className="mx-5  my-[34px] rounded-xl overflow-hidden">
  <Image source={header} classname=" w-full h-32" resizeMode="cover" />
</View> */
}

{
  /* <Card />

<AdvertiseMent /> */
}

{
  /* footer design */
}
{
  /* <Fotter />
</ScrollView> */
}
