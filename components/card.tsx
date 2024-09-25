import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import rider from "@/assets/images/rider.png";
import plan from "@/assets/images/plan.png";
import {
  AntDesign,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";

export default function Card() {
  const comments = true;
  return (
    <View className="  py-5 bg-white mx-5 px-4 rounded-2xl ">
      {/* user profile info */}
      <View className=" flex flex-row items-center  justify-between ">
        <View className=" flex flex-row">
          <Image
            source={rider}
            className="  w-11 h-11 rounded-full"
            resizeMode="cover"
          />
          <View className=" ml-[11px]">
            <Text className=" font-PlusJakartaSansExtraBold text-[15px] text-[#555555]">
              Dianne Russell
            </Text>
            <Text className=" font-PlusJakartaSansRegular text-sm text-[#646464] mt-[2px]">
              1 day ago
            </Text>
          </View>
        </View>
        <View className=" flex flex-row items-center">
          {Array(5)
            .fill("_")
            .map((i, index) => {
              return (
                <Text key={index}>
                  <Octicons name="star-fill" size={24} color="#FFCC00" />
                </Text>
              );
            })}
          <Text className=" ml-[4px] font-PlusJakartaSansRegular text-[13.67px] text-[#646464] ml-[5px]">
            4.5
          </Text>
        </View>
      </View>
      {/* user sub category */}
      <View className=" mt-4 flex flex-row">
        <View className=" px-[6px] py-[6px]  bg-[#F2F4F8] rounded-lg">
          <Text className=" font-PlusJakartaSansSemiBold   text-xs text-[#34303E]">
            LHR - DEL​
          </Text>
        </View>
        <View className=" px-[6px] py-[6px]  bg-[#F2F4F8] rounded-lg ml-[13px]">
          <Text className=" font-PlusJakartaSansSemiBold   text-xs text-[#34303E]">
            Ai​r India
          </Text>
        </View>
        <View className=" px-[6px] py-[6px]  bg-[#F2F4F8] rounded-lg ml-[13px]">
          <Text className=" font-PlusJakartaSansSemiBold   text-xs text-[#34303E]">
            Bu​siness Class
          </Text>
        </View>
        <View className=" px-[6px] py-[6px]  bg-[#F2F4F8] rounded-lg ml-[13px]">
          <Text className=" font-PlusJakartaSansSemiBold   text-xs text-[#34303E]">
            Ju​ly 2023
          </Text>
        </View>
      </View>
      <View className=" mt-4">
        <Text className=" font-PlusJakartaSansMedium text-sm text-[#404040]">
          Stay tuned for a ​smoother, more convenient experience right at your
          fingertips , a ​smoother, more convenient a ​smoother, more convenient
          other, more convenient experience right at your{" "}
        </Text>
        <Text className=" mt-2  mb-3 font-PlusJakartaSansExtraBold text-sm text-[#646464] capitalize">
          see more
        </Text>
      </View>

      <Image source={plan} className=" w-full" resizeMode="cover" />

      <View className=" flex flex-row  items-center mt-2 mb-[5px]">
        <Text className=" font-PlusJakartaSansRegular text-sm text-[#232323]">
          30 Like
        </Text>
        <Text className=" text-sm  text-gray-500"> . </Text>
        <Text className=" font-PlusJakartaSansRegular text-sm text-[#232323]">
          20 Comment
        </Text>
      </View>

      <View className="mt-[5px] flex flex-row justify-between">
        <TouchableOpacity
          onPress={() => {
            console.log("like");
          }}
          className=" flex flex-row items-center px-1"
        >
          <AntDesign name="like2" size={24} color="#141B34" />
          <Text className=" ml-2  text-[#232323] font-PlusJakartaSansRegular text-sm">
            Like
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log("share");
          }}
          className=" flex flex-row items-center px-1"
        >
          <MaterialCommunityIcons
            name="share-outline"
            size={26}
            color="#141B34"
          />
          <Text className=" ml-2  text-[#232323] font-PlusJakartaSansRegular text-sm">
            Share
          </Text>
        </TouchableOpacity>
      </View>

      {comments && (
        <View className=" mt-[11px]  bg-[#F2F4F8] py-[12.66px] px-[12.66px] rounded-[12.66px]">
          <View className=" flex flex-row  items-center justify-between">
            <View className=" flex flex-row items-center">
              <Image
                source={rider}
                className="   w-8 h-8 rounded-full"
                resizeMode="cover"
              />
              <View className=" ml-[11px]">
                <Text className=" font-PlusJakartaSansBold  text-sm text-[#232323]">
                  Dianne Russell
                </Text>
                <Text className=" font-PlusJakartaSansRegular  text-xs text-[#232323] mt-[2px]">
                  3 min ago
                </Text>
              </View>
            </View>
            <Text className=" font-PlusJakartaSansSemiBold text-xs text-[#232323]">
              5 Upvotes
            </Text>
          </View>
          <View className="  mt-[6px] mb-4">
            <Text className=" font-PlusJakartaSansRegular text-sm text-[#232323]">
              {" "}
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis
            </Text>
          </View>

          <View className=" flex flex-row">
            <TouchableOpacity
              onPress={() => {
                console.log("unvote");
              }}
              className=" flex flex-row items-center"
            >
              <View className="bg-[#141B34] w-7 h-7 rounded-full flex flex-row justify-center items-center">
                <FontAwesome name="angle-double-up" size={22} color="#fff" />
              </View>
              <Text className=" ml-2 font-PlusJakartaSansRegular text-[#100c0c] text-sm capitalize">
                upvote
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                console.log("reply");
              }}
              className=" ml-7 flex flex-row items-center"
            >
              <Ionicons name="chatbubbles" size={28} color="#141B34" />
              <Text className=" ml-2 font-PlusJakartaSansRegular text-[#232323] text-sm capitalize">
                Reply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View className=" mt-3">
        <Text className=" font-PlusJakartaSansExtraBold text-sm text-[#646464]">
          See More Comments
        </Text>
      </View>

      <View className=" mt-3 flex flex-row">
        <View className=" w-[15%]">
          <Image
            source={rider}
            className="w-[42px] h-[42px] rounded-full"
            resizeMode="cover"
          />
        </View>
        <View className=" bg-[#F2F4F8] rounded-[17px] w-[85%] ">
          <View className=" flex flex-row items-center justify-between  px-[13px]">
            <TextInput>
              <Text className=" font-PlusJakartaSansMedium text-xs text-[#646464] capitalize">
                write your Comment
              </Text>
            </TextInput>
            <View className=" my-[10px]">
              <Ionicons name="send" size={24} color="black" />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
