import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

export default function SearchInput({
  containerContext,
  placeholder,
  LeftIcone,
  RightIcone,
  multiline = false,
  ...rest
}: {
  containerContext: string;
  placeholder: string;
  LeftIcone?: React.ComponentType<any>;
  RightIcone?: React.ComponentType<any>;
  multiline?: boolean;
}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className={` ${containerContext}  border border-[#E8E8EA]`}>
          <View className=" py-5 px-6">
            <TextInput multiline={multiline} {...rest}>
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
