import CustomeButton from "@/components/button";
import ContentLayout from "@/components/contentlayout";
import TextAreaInputs from "@/components/textAreaInput";
import { router } from "expo-router";
import { useState } from "react";

const userInfo = {
  name: "Ozlisa xiomui",
  image: "https://i.ibb.co.com/Rc0BhJV/user-one.png",
};

export default function AddAquestion() {
  const [questionInfo, setQuestionInfo] = useState({
    image: null,
    context: "",
  });

  const handlerQuestion = async () => {
    // TODO: Send the question to the server
    // console.log({ ...userInfo, question: questionInfo });
    const response = await fetch(`/addquestion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...userInfo,
        expimage: questionInfo.image,
        discription: questionInfo.context,
      }),
    });

    const json = await response.json();

    console.log(json.status);

    if (json.status === 200) {
      router.push("/(root)/home");
    }
  };

  return (
    <ContentLayout title="Ask a question" userInfo={userInfo}>
      <TextAreaInputs
        placeholder="Write Your Message"
        containerContext="mt-[18px] rounded-[18px]  h-[200px]"
        multiline={true}
        onChangeText={(text) => {
          setQuestionInfo({ ...questionInfo, context: text });
        }}
        value={questionInfo.context}
      />

      <CustomeButton
        onPress={handlerQuestion}
        title="submit"
        bgVariant="primary"
        className=" mt-8"
        multiline={true}
      />
    </ContentLayout>
  );
}
