import { InputFieldProps } from "@/types/type";
import { Octicons } from "@expo/vector-icons";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Search({
  title = "Search anything ...",
  onChangeText,
  ...rest
}: InputFieldProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="mt-6 mx-5 rounded-[18px] bg-white border border-[#808080] flex flex-row items-center justify-between py-2 pr-2 pl-6">
          {/* TextInput for search */}
          <TextInput
            onChangeText={onChangeText}
            placeholder={title}
            className=" flex-1  py-3 font-PlusJakartaSansRegular text-lg text-[#232323]  "
            placeholderTextColor="#000"
            {...rest}
          />

          {/* Search Icon */}
          <View className="bg-[#232323] px-4 py-4 rounded-2xl">
            <Octicons name="search" size={18} color="#fff" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
