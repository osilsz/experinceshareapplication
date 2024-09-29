import userSwitch from "@/assets/images/user-switch.png";
import question from "@/assets/images/elements.png";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
export default function AskQuestionendExperienceSection() {
  return (
    <View className=" flex flex-row justify-between mt-14 mx-5">
      <TouchableOpacity
        onPress={() => {
          router.push("/(root)/experience");
        }}
        className=" bg-[#232323] rounded-[14px] flex flex-row  items-center justify-center py-[13px] px-2 w-[55%]"
      >
        <Text className=" font-PlusJakartaSansBold  text-[13px] text-white  pr-[11px]">
          Share your experience
        </Text>
        <Image
          source={userSwitch}
          resizeMode="cover"
          className=" w-[25px] h-[25px]"
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          router.push("/(root)/addquestion");
        }}
        className=" bg-[#232323] rounded-[14px] flex flex-row items-center justify-center py-[13px] px-2 w-[42%]"
      >
        <Text className=" font-PlusJakartaSansBold  text-[13px] text-white  pr-[11px]">
          Ask a question
        </Text>
        <Image
          source={question}
          resizeMode="cover"
          className=" w-[20px] h-[20px]"
        />
      </TouchableOpacity>
      {/* <ModalContent /> */}
    </View>
  );
}
