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
import { useEffect, useState } from "react";
import rider from "@/assets/images/rider.png";
import plan from "@/assets/images/plan.png";

type ItemData = {
  id: string;
  name: string;
  content: string;
  discription: string;
};

const userInfo = {
  name: "Ozlisa xiomui",
  image: "https://i.ibb.co.com/Rc0BhJV/user-one.png",
};

const HomeListItemsdata: ItemData[] = [
  {
    _id: 1,
    content: "post",
    name: "Dianne Russells",
    image: "https://i.ibb.co.com/PDD2Mtd/rider.webp",
    updatedAt: "2 day ago",
    rating: 4,
    discription:
      " Stay tuned for a ​smoother, more convenient experience right at your fingertips , a ​smoother, more convenient a ​smoother, more convenient other, more convenient experience right at your",
    expimage: plan,
    like: 30,
    comments: 20,
    comment: [
      {
        _id: 1,
        name: "Dianne Russells",
        image: rider,
        comment:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis",
        createdAt: "3 min ago",
        upvode: 4,
      },
    ],
    category: [
      {
        _id: 1,
        name: "LHR - DEL​",
      },
      {
        _id: 2,
        name: "Ai​r India",
      },
      {
        _id: 3,
        name: "Bu​siness Class",
      },
      {
        _id: 4,
        name: "Ju​ly 2023",
      },
    ],
  },
  { _id: "2", content: "advertisement", name: "Home2" },
  {
    _id: "3",
    content: "post",
    name: "Dianne Russells",
    image: "https://i.ibb.co.com/PDD2Mtd/rider.webp",
    updatedAt: "2 day ago",
    rating: 4,
    discription:
      " Stay tuned for a ​smoother, more convenient experience right at your fingertips , a ​smoother, more convenient a ​smoother, more convenient other",
    like: 0,
    comments: 0,
  },
];

export default function Home() {
  const [selectedId, setSelectedId] = useState<string>();
  const [HomeListItem, setHomeListItem] = useState(HomeListItemsdata);
  const [searchContext, setSearchContext] = useState("");

  console.log(searchContext);

  useEffect(() => {
    async function question() {
      const response = await fetch(`/questions`);
      const json = await response.json();

      setHomeListItem([...json, ...HomeListItemsdata]);
    }
    question();
  }, []);

  const renderItem = ({ item }: { item: HomeListItem }) => {
    const checkPostorAd =
      item.content === "advertisement" ? (
        <AdvertiseMent />
      ) : (
        <View className=" mb-[34px]">
          <Card data={item} userImage={userInfo.image} />
        </View>
      );
    return checkPostorAd;
  };

  const handlerFilterData = (text: string) => {
    console.log(text);

    // const items = HomeListItem.filter(
    //   (item) =>
    //     item.content !== "advertisement" &&
    //     item.discription.toLowerCase().includes(text.toLowerCase())
    // );

    // if (text === "") {
    // } else {
    //   setHomeListItem(items);
    // }

    // console.log(items);
    // setHomeListItem((prev) =>
    //   prev.filter((item) => {
    //     // Ensure item.discription exists and is a string
    //     if (typeof item.discription === "string") {
    //       return item.discription.toLowerCase().includes(text.toLowerCase());
    //     }
    //     return false; // If not a string, exclude the item
    //   })
    // );
  };

  return (
    <FlatList
      data={HomeListItem}
      renderItem={renderItem}
      keyExtractor={(item) => item._id}
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

            {/* <Search
              onChangeText={(text) => {
                setSearchContext(text);
              }}
              // value={searchContext}
            /> */}
            <Search
              onChangeText={handlerFilterData}
              // value={searchContext} // Don't forget to pass value
            />

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
