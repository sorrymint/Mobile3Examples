import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Dish = ({ dish, onStarPress, isStarred }) => {


  const renderDifficultyGraph = (difficulty) => {
    const boxes = [];
    const colors = ['#4CAF50', '#8BC34A', '#FFEB3B', '#FF9800', '#FF5722']; // Green to Red

    for (let i = 0; i < 5; i++) {
      boxes.push(
        <View
          key={i}
          style={{
            ...styles.difficultyBox,
            backgroundColor: i < difficulty ? colors[i] : 'transparent',
          }}
        />
      );
    }

    return <View style={styles.difficultyContainer}>{boxes}</View>;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{dish.name}</Text>
      <Text>{dish.ingredients.join(', ')}</Text>
      <Text>Cook Time: {dish.cookTime} mins</Text>
      <Text>Difficulty: {renderDifficultyGraph(dish.difficulty)}</Text>
      <TouchableOpacity onPress={() => onStarPress(dish.id)}>
        <Text style={{ ...styles.star, color: isStarred ? 'gold' : 'gray' }}>{isStarred ? '⭐️' : '☆'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  difficultyContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  difficultyBox: {
    //diff will now show without
    width: 20,
    height: 20,
    marginRight: 4,
    borderRadius: 4,
  },
  star: {
    fontSize: 24,
  },
});

export default Dish;
