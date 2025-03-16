import React from "react";
import { Text, View } from "react-native";

export default {
  title: "Design System/Typography",
  parameters: {
    layout: "centered",
  },
};

const TypographyExample = ({ label, family, size, lineHeight }) => (
  <View className="mb-4">
    <Text className="text-large font-bold">{label}</Text>
    <View className="flex-row space-x-4">
      <Text className="text-small ">Family: <Text className="font-semibold">{family}</Text></Text>
      <Text className="text-small ">Size: <Text className="font-semibold">{size}</Text></Text>
      <Text className="text-small ">Line height: <Text className="font-semibold">{lineHeight}</Text></Text>
    </View>
  </View>
);

export const Typography = () => (
  <>
  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="Large" family="Ubuntu Sans(700)" size="96px" lineHeight="112px" />
    <Text className="font-uber text-displaylarge leading-displaylarge font-bold flex-wrap" >
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-displaylarge leading-displaylarge font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="Medium" family="Ubuntu Move(700)" size="52px" lineHeight="64px" />
    <Text className="font-uber text-displaymedium leading-displaymedium font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-displaymedium leading-displaymedium font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="Small" family="Ubuntu Move(700)" size="44px" lineHeight="52px" />
    <Text className="font-uber text-displaysmall leading-displaysmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-displaysmall leading-displaysmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="X Small" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-displayxsmall leading-displayxsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-displayxsmall leading-displayxsmall font-bold">0123456789</Text>
  </View>

{/* typography heading */}


  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  {/* TYPOGRAPHY LABEL */}

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  {/* TYPOGRAPGY PARAGRAPH  */}

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View>

  <View className="p-5">
    {/* Small Example */}
    <TypographyExample label="xsmall" family="Ubuntu Move(700)" size="36px" lineHeight="44px" />
    <Text className="font-uber text-xsmall leading-xsmall font-bold">
      We ignite opportunity by setting the world in motion.
    </Text>
    <Text className="font-uber text-xsmall leading-xsmall font-bold">0123456789</Text>
  </View> 
  
  </>
);




