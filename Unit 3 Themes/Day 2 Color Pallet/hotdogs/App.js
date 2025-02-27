import {useState} from 'react';
import { View, Text, Button, TextInput, useColorScheme } from "react-native";
import { lightTheme, darkTheme } from "./assets/theme.js";
import { Picker } from "@react-native-picker/picker";

const HotDogOrderForm = () => {
  const colorScheme = useColorScheme();
  const [SelectedTopping, setSelectedTopping] = useState("");
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  const toppings = ["Ketchup", "Mustard", "Onions", "Pickles", "Relish"];

  return (
      <View
          style={{
            backgroundColor: theme.primary,
            paddingTop: 80,
            padding: 10,
            flex: 1,
          }}
      >
        <View style={{ backgroundColor: theme.secondary, padding: 20 }}>
          <Text style={{ color: theme.text }}>
            Select your favorite topping:
          </Text>
          <Picker
              onValueChange={(itemValue) => setSelectedTopping(itemValue)}
              style={{ color: theme.text }}
          >
            {toppings.map((topping, index) => (
                <Picker.Item
                    key={index}
                    label={topping}
                    value={topping}
                />
            ))}
          </Picker>
          <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginTop: 10,
                color: theme.text,
              }}
              placeholder=" Your Name"
          />
          <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                marginTop: 10,
                color: theme.text,
              }}
              placeholder=" Your Email"
          />
          <View style={{ padding: 10 }}>
            <Button title="Submit Order" color={theme.tertiary} />
          </View>
        </View>
      </View>
  );
};

export default HotDogOrderForm;