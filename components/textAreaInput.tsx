import { InputFieldProps } from "@/types/type";
import {
  KeyboardAvoidingView,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

export default function TextAreaInput({
  containerContext,
  placeholder,
  multiline = false,
  value, // Pass the value here
  onChangeText, // Pass onChangeText directly
  ...rest
}: InputFieldProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className={` ${containerContext} border border-[#E8E8EA]`}>
          <View className="py-5 px-6">
            <TextInput
              multiline={multiline}
              value={value} // Controlled value
              onChangeText={onChangeText} // Handle text change
              placeholder={placeholder} // Use the placeholder prop here
              style={{ fontSize: 14, color: "#000" }} // Optional: adjust styles as needed
              {...rest} // Spread the rest of the props
              placeholderTextColor="#000"
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
