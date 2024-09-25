import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";
// import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default function SearchInput({
  containerContext,
  placeholder,
  LeftIcone,
  RightIcone,
  ...rest
}: {
  containerContext: string;
  placeholder: string;
  LeftIcone?: React.ComponentType<any>;
  RightIcone?: React.ComponentType<any>;
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Keyboard.dismiss */}
      <TouchableWithoutFeedback onPress={() => {}}>
        <View className={` ${containerContext}  border border-[#E8E8EA]`}>
          <View className=" py-5 px-6">
            <TextInput {...rest}>
              <Text className="  font-PlusJakartaSansRegular text-sm text-[#A5A3A9]">
                {placeholder}
              </Text>
            </TextInput>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
