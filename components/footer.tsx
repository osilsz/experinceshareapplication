import { Text, View } from "react-native";

export default function Fotter() {
  return (
    <View className=" bg-[#232323]  pt-12">
      <Text className=" font-PlusJakartaSansBold text-2xl text-white text-center capitalize">
        Business & First Class ​Reviews
      </Text>
      <View className=" mb-8 px-11 flex flex-row flex-wrap justify-center">
        {FooterItem.map((item) => {
          return (
            <Text
              key={item.id}
              className="mt-4 font-PlusJakartaSansRegular text-base capitalize text-white pl-4"
              onPress={() => {}}
            >
              {item.title}
            </Text>
          );
        })}
      </View>
      <View className=" border-t-2  border-t-[#505050] py-[13px]">
        <Text className=" text-center text-white font-PlusJakartaSansRegular text-sm">
          © 2024 Business & First Class Reviews
        </Text>
      </View>
    </View>
  );
}

const FooterItem = [
  {
    id: 1,
    title: "About",
    link: "/about",
  },
  {
    id: 2,
    title: "FAQ’s",
    link: "/faq",
  },
  {
    id: 3,
    title: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    id: 4,
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 5,
    title: "Cookie Policy",
    link: "/cookie-policy",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];
