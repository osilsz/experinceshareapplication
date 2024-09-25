import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import rider from "@/assets/images/rider.png";
import image from "@/assets/images/image-upload.png";
import SearchInput from "./searchinput";
export default function ModalContent() {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        // setModalVisible(!modalVisible);
      }}
    >
      <ScrollView className=" bg-white mt-10  mx-6  rounded-[32px] px-12">
        <Text className=" font-PlusJakartaSansBold text-[26px] text-[#1D1929] mt-12">
          Share
        </Text>

        <View className="flex flex-row items-center  mt-7">
          <Image
            source={rider}
            className="  w-12 h-12 rounded-full"
            resizeMode="cover"
          />
          <Text className=" font-PlusJakartaSansExtraBold text-[15px] text-[#555555] ml-2">
            Dianne Russell
          </Text>
        </View>
        <View className="mt-7 mb-[18px] rounded-[14px] bg-[#F8F8FF] h-[202px] border border-dashed border-[#384EB7] flex flex-col justify-center items-center">
          <Image source={image} className="w-16 h-16" resizeMode="cover" />
          <Text className="mt-2 font-bold text-sm capitalize">
            drop your image here or Browse
          </Text>
        </View>

        <SearchInput
          placeholder="Departure Airport"
          containerContext=" mt-[18px]  rounded-[18px]"
        />

        <SearchInput
          placeholder="​arrival Airport"
          containerContext=" mt-[18px]  rounded-[18px]"
        />

        <SearchInput
          placeholder="Airline"
          containerContext=" mt-[18px]  rounded-[18px]"
        />

        <SearchInput
          placeholder="class"
          containerContext=" mt-[18px]  rounded-[18px]"
        />

        {/* <View className="  my-[18px] border border-[#E8E8EA] rounded-[18px]">
          <View className=" py-5 px-6">
            <TextInput>
              <Text className="  font-PlusJakartaSansRegular text-sm text-[#A5A3A9]">
                Departure Airport
              </Text>
            </TextInput>
          </View>
        </View> */}
      </ScrollView>
    </Modal>
  );
}
