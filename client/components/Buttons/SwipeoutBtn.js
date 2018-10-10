import { Alert } from "react-native";

// each object is a new button style
const swipeoutBtn = (obj, remove, createWhat, edit) => {
  return [
    {
      text: "Edit",
      backgroundColor: "#337ab7",
      color: "#000",
      underlayColor: "rgba(51, 122, 183, 0.8)",
      onPress: () => {
        edit(obj);
      }
    },
    {
      text: "Delete",
      backgroundColor: "#d9534f",
      color: "#000",
      underlayColor: "rgba(217, 83, 79, 0.8)",
      onPress: () => {
        if (createWhat === "program") {
          Alert.alert("Confirm", `You sure you want to delete ${obj.title}?`, [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            {
              text: "Delete",
              onPress: () => remove(obj.id)
            }
          ]);
        } else {
          remove(obj.id);
        }
      }
    }
  ];
};

export default swipeoutBtn;
