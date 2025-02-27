import { TouchableOpacity, Text } from "react-native";

const ActionButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.color,
                padding: 10,
                margin: 5,
                width: "50%",
            }}
            onPress={props.onPress}
        >
            <Text style={{ color: "white", textAlign: "center", fontSize: 20 }}>
                {props.text}
            </Text>
        </TouchableOpacity>
    );
};

export default ActionButton;
