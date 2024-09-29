import CustomeButton from "@/components/button";
import ContentLayout from "@/components/contentlayout";
import SearchInput from "@/components/searchinput";
import { Octicons } from "@expo/vector-icons";
import { View, Text } from "react-native";

const userInfo = {
  name: "Ozlisa xiomui",
  image: "https://i.ibb.co.com/Rc0BhJV/user-one.png",
};
export default function Experience() {
  return (
    <ContentLayout title="Share" userInfo={userInfo}>
      <SearchInput
        placeholder="Departure Airport"
        containerContext="mt-[18px] rounded-[18px]"
      />
      <SearchInput
        placeholder="Arrival Airport"
        containerContext="mt-[18px] rounded-[18px]"
      />
      <SearchInput
        placeholder="Airline"
        containerContext="mt-[18px] rounded-[18px]"
      />
      <SearchInput
        placeholder="Class"
        containerContext="mt-[18px] rounded-[18px]"
      />

      <View className=" flex flex-row justify-between">
        <View className=" w-[45%]">
          <SearchInput
            placeholder="travel Date"
            containerContext="mt-[18px] rounded-[18px]"
          />
        </View>
        <View className=" w-[50%] flex flex-row justify-end items-center pt-3">
          <Text>Rating </Text>
          <View className=" flex flex-row">
            {Array(5)
              .fill("_")
              .map((i, index) => {
                return (
                  <Text key={index}>
                    <Octicons name="star-fill" size={24} color="#FFCC00" />
                  </Text>
                );
              })}
          </View>
        </View>
      </View>

      <CustomeButton
        onPress={() => {}}
        title="submit"
        bgVariant="primary"
        className=" mt-8"
      />
    </ContentLayout>
  );
}
