import Markdown from "react-native-marked";
import { StyleSheet, Text, View } from "react-native";

const text = `
# Frutiger Aero 

![Header](https://static.wikia.nocookie.net/aesthetics/images/1/13/EjOHWqqVgAAg_VB.jpg/revision/latest?cb=20230724003054)

Frutiger Aero  (also known as Web 2.0 Gloss) is a broad design style and aesthetic that was prevalent in advertising, media, stock imagery and technology from roughly 2004 to 2013, following the end of the Y2K era. Overlapping with the McBling and ElectroPop 08 aesthetics. 

## Television

* One Life to Live (1968-present) (2007-2014 episodes only)
* All My Children (1970-present) (2007-2014 episodes only)
* Teletubbies (1997-2001)
* Make Way for Noddy (2002-2006)
* Boohbah (2003-2006)

## Film

* Robots (2005)
* Click (2006)
* Pokémon Ranger and the Temple of the Sea (2006)
* Wall-E (2008)

![WallE](https://static.wikia.nocookie.net/aesthetics/images/6/6d/Walle_0_41_12_full.jpg/revision/latest/scale-to-width-down/1000?cb=20210502150936)
`;

export default function App() {
  return (
      <View style={styles.container}>
        <Markdown
            value={text}
            flatListProps={{
              initialNumToRender: 8,
            }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
