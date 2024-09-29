import React from "react";
import {
  Alert,
  Modal,
  ScrollView,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import rider from "@/assets/images/rider.png";
import image from "@/assets/images/image-upload.png";
import SearchInput from "./searchinput";
import { Entypo } from "@expo/vector-icons";

export default function ModalContent() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={false}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <ScrollView
        // className="bg-white my-10 mx-4 rounded-[32px] px-12"
        // keyboardShouldPersistTaps="handled"
        // contentContainerStyle={{ flexGrow: 1 }}
        className="bg-white my-10 mx-4 rounded-[32px] px-10"
        keyboardShouldPersistTaps="handled"
        // Remove or adjust this to avoid shrinking
        // contentContainerStyle={{ flexGrow: 1 }}
      >
        {/* Wrap the entire modal content in KeyboardAvoidingView */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : ""}
          // style={{ flex: 1 }}
        >
          <TouchableOpacity className=" absolute top-10 right-1">
            <Entypo name="cross" size={34} color="black" />
          </TouchableOpacity>
          <Text className="font-PlusJakartaSansBold text-[26px] text-[#1D1929] mt-12">
            Share
          </Text>

          <View className="flex flex-row items-center mt-7">
            <Image
              source={rider}
              className="w-12 h-12 rounded-full"
              resizeMode="cover"
            />
            <Text className="font-PlusJakartaSansExtraBold text-[15px] text-[#555555] ml-2">
              Dianne Russell
            </Text>
          </View>

          <View className="mt-7 mb-[18px] rounded-[14px] bg-[#F8F8FF] h-[202px] border border-dashed border-[#384EB7] flex flex-col justify-center items-center">
            <Image source={image} className="w-16 h-16" resizeMode="cover" />
            <Text className="mt-2 font-bold text-sm capitalize">
              drop your image here or Browse
            </Text>
          </View>

          {/* Input fields */}
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
        </KeyboardAvoidingView>
      </ScrollView>
    </Modal>
  );
}
