import { Entypo } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import rider from "@/assets/images/rider.png";
import image from "@/assets/images/image-upload.png";

export default function ContentLayout({
  title,
  children,
  userInfo,
}: {
  title: string;
  children: React.ReactNode;
  userInfo: {
    name: string;
    image: string;
  };
}) {
  return (
    <View className=" bg-white flex-1">
      <SafeAreaView className={` ${Platform.OS === "ios" ? "" : "mt-8"}`}>
        <ScrollView
          className=" rounded-[32px] px-10"
          // keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
            className=" absolute top-4 right-0"
          >
            <Entypo name="cross" size={34} color="black" />
          </TouchableOpacity>
          <Text className="font-PlusJakartaSansBold text-[26px] text-[#1D1929] mt-8">
            {title}
          </Text>
          <View className="flex flex-row items-center mt-7">
            <Image
              source={{
                uri: userInfo.image,
              }}
              className="w-12 h-12 rounded-full"
              resizeMode="cover"
            />
            <Text className="font-PlusJakartaSansExtraBold text-[15px] text-[#555555] ml-2 capitalize">
              {userInfo.name}
            </Text>
          </View>

          <View className="mt-7 mb-[18px] rounded-[14px] bg-[#F8F8FF] h-[202px] border border-dashed border-[#384EB7] flex flex-col justify-center items-center">
            <Image source={image} className="w-16 h-16" resizeMode="cover" />
            <Text className="mt-2 font-bold text-sm capitalize">
              drop your image here or Browse
            </Text>
          </View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            // style={{ flex: 1 }}
          >
            {children}
          </KeyboardAvoidingView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
