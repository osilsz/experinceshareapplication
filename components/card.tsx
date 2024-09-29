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

export default function Card({ data, userImage }) {
  return (
    <View className="  py-5 bg-white mx-5 px-4 rounded-2xl ">
      {/* user profile info */}
      <View className=" flex flex-row items-center  justify-between ">
        <View className=" flex flex-row">
          <Image
            source={{
              uri: data.image,
            }}
            className="  w-11 h-11 rounded-full"
            resizeMode="cover"
          />
          <View className=" ml-[11px]">
            <Text className=" font-PlusJakartaSansExtraBold text-[15px] text-[#555555]">
              {data.name}
            </Text>
            <Text className=" font-PlusJakartaSansRegular text-sm text-[#646464] mt-[2px]">
              {data.updatedAt}
            </Text>
          </View>
        </View>
        <View className=" flex flex-row items-center">
          {data.rating &&
            Array(data.rating)
              .fill("_")
              .map((i, index) => {
                return (
                  <Text key={index}>
                    <Octicons name="star-fill" size={24} color="#FFCC00" />
                  </Text>
                );
              })}
          <Text className=" ml-[4px] font-PlusJakartaSansRegular text-[13.67px] text-[#646464] ml-[5px]">
            {data.rating}
          </Text>
        </View>
      </View>
      {/* user sub category */}
      <View className=" mt-4 flex flex-row">
        {data?.category?.map((item) => (
          <View
            key={item._id}
            className=" px-[6px] py-[6px]  bg-[#F2F4F8] rounded-lg mr-[13px]"
          >
            <Text className=" font-PlusJakartaSansSemiBold   text-xs text-[#34303E]">
              {item.name}
            </Text>
          </View>
        ))}
      </View>
      <View className=" mt-4">
        <Text className=" font-PlusJakartaSansMedium text-sm text-[#404040]">
          {data.discription}{" "}
        </Text>

        {data?.discription?.length > 187 && (
          <TouchableOpacity onPress={() => {}}>
            <Text className=" mt-2   font-PlusJakartaSansExtraBold text-sm text-[#646464] capitalize">
              see more
            </Text>
          </TouchableOpacity>
        )}
      </View>

      {data?.expimage && (
        <Image
          source={data.expimage}
          className="mt-3 w-full"
          resizeMode="cover"
        />
      )}

      <View className=" flex flex-row  items-center mt-2 mb-[5px]">
        {Number(data?.like) !== 0 && (
          <Text className=" font-PlusJakartaSansRegular text-sm text-[#232323]">
            {data.like} Like
          </Text>
        )}
        {Number(data?.like) !== 0 && (
          <Text className=" text-sm  text-gray-500"> . </Text>
        )}

        {Number(data?.comments) !== 0 && (
          <Text className=" font-PlusJakartaSansRegular text-sm text-[#232323]">
            {data.comments} Comment
          </Text>
        )}
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

      {data?.comment?.length > 0 &&
        data?.comment?.map((item) => {
          return (
            <View
              key={item._id}
              className=" mt-[11px]  bg-[#F2F4F8] py-[12.66px] px-[12.66px] rounded-[12.66px]"
            >
              <View className=" flex flex-row  items-center justify-between">
                <View className=" flex flex-row items-center">
                  <Image
                    source={item.image}
                    className="   w-8 h-8 rounded-full"
                    resizeMode="cover"
                  />
                  <View className=" ml-[11px]">
                    <Text className=" font-PlusJakartaSansBold  text-sm text-[#232323]">
                      {item.name}
                    </Text>
                    <Text className=" font-PlusJakartaSansRegular  text-xs text-[#232323] mt-[2px]">
                      {item.createdAt}
                    </Text>
                  </View>
                </View>
                {Number(item?.upvode) !== 0 && (
                  <Text className=" font-PlusJakartaSansSemiBold text-xs text-[#232323]">
                    {item?.upvode} Upvotes
                  </Text>
                )}
              </View>
              <View className="  mt-[6px] mb-4">
                <Text className=" font-PlusJakartaSansRegular text-sm text-[#232323]">
                  {" "}
                  {item.comment}
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
                    <FontAwesome
                      name="angle-double-up"
                      size={22}
                      color="#fff"
                    />
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
          );
        })}
      <View className=" mt-3">
        {data?.comment?.length > 1 && (
          <TouchableOpacity onPress={() => {}}>
            <Text className=" font-PlusJakartaSansExtraBold text-sm text-[#646464]">
              See More Comments
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View className=" mt-3 flex flex-row">
        <View className=" w-[15%]">
          <Image
            source={{
              uri: userImage,
            }}
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
