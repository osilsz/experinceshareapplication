import { Octicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

export default function Search() {
  return (
    <View className=" mt-6 mx-5 rounded-[18px] bg-white border border-[#808080] flex flex-row items-center justify-between py-1 pr-1  pl-6">
      <Text className="  font-PlusJakartaSansRegular text-lg text-[#232323] ">
        Search anything ...
      </Text>

      <View className="  bg-[#232323] px-4 py-4 rounded-2xl">
        <Octicons name="search" size={18} color="#fff" />
      </View>
    </View>
  );
}
