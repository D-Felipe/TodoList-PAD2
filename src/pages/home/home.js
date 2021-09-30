import React, { useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { FlatList, TouchableOpacity } from "react-native";

// import { Creators as TaskActions } from "../../Store/Ducks/Tasks";
import {
  Container,
  NewTaskButton,
  Box,
  Header,
  TaskTitle,
  TaskDescription,
  TitleFlatList,
} from "./styles.js";

function home({ navigation }) {

const state = useSelector((state) => state);
const dispatch = useDispatch();

useEffect(() => {
  state.Tasks.data;
  console.log(state.Tasks.data);
}),
  [];

function handleEditTask(item) {
  navigation.navigate("EditTask", {
    itemId: item.id,
    itemT: item.title,
    itemD: item.description,
  });
}

const defaultMessage = () => {
  return <TitleFlatList>Você não tem tarefas!</TitleFlatList>;
};

const renderItem = ({ item }) => {
  return (
    <Box>
      <Header>
        <TaskTitle onPress={() => handleEditTask(item)}>
          Tarefa#{item.id}
        </TaskTitle>
        <TaskTitle onPress={() => handleEditTask(item)}>{item.title}</TaskTitle>
        <TouchableOpacity
          onPress={() =>
            dispatch(TaskActions.removeTasks(item.id)) &&
            dispatch(TaskActions.verifyTask())
          }
        >
          <MaterialIcons
            name="delete"
            size={24}
            color="black"
            style={{ marginTop: "5px", marginRight: "5px", float: "right" }}
          />
        </TouchableOpacity>
      </Header>
      <TaskDescription onPress={() => handleEditTask(item)}>
        {item.description}
      </TaskDescription>
    </Box>
  );
};

  return (
    <>
      <FlatList
        data={state.Tasks.data}
        renderItem={renderItem}
        ListEmptyComponent={defaultMessage}
        keyExtractor={(item) => item.id}
      />
      <Container>
        <NewTaskButton
          mode="contained"
          uppercase={true}
          onPress={() => {
            navigation.navigate("AddNewTask");
          }}
        >
          Nova tarefa
        </NewTaskButton>
      </Container>
    </>
  );
}

export default home;
