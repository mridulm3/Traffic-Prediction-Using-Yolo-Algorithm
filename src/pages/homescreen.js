import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HS from "./HS";
import Tvm from "./tvm";
import Tvl from "./tvl";
import Cgnr from "./cgnr";
import Ekm from "./ekm";
import Klm from "./klm";

const BaseStack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <BaseStack.Navigator headerMode="none">
    <BaseStack.Screen name="HS" component={HS} />
    <BaseStack.Screen name="Tvl" component={Tvl} />
    <BaseStack.Screen name="Cgnr" component={Cgnr} />
    <BaseStack.Screen name="Ekm" component={Ekm} />
    <BaseStack.Screen name="Tvm" component={Tvm} />
    <BaseStack.Screen name="Klm" component={Klm} />
  </BaseStack.Navigator>
);

export default HomeScreen;
