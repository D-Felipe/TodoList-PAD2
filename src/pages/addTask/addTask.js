import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";

import { Creators as TaskActions } from "../../store/ducks/tasks";
import {
  StyledView,
  StyledTextInput,
  StyledTextInput_,
  StyledButton,
} from "./styles";

function addTask() {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(TaskActions.addTasks(taskTitle, taskDescription));
    setTaskTitle("");
    setTaskDescription("");
    Keyboard.dismiss();
    navigation.navigate("Home");
  }

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      enabled={Platform.OS === "ios"}
      style={{ flex: 1 }}
    >
      <StyledView>
        <StyledTextInput
          label="Título"
          placeholder="Escreva o título da tarefa"
          mode="outlined"
          value={taskTitle}
          onChangeText={(text) => setTaskTitle(text)}
          maxLength={20}
          right={<TextInput.Affix text="/20" />}
        />
        <StyledTextInput_
          label="Descrição"
          placeholder="Escreva a descrição da tarefa"
          mode="flat"
          value={taskDescription}
          onChangeText={(text) => setTaskDescription(text)}
          multiline={true}
          scrollEnable={true}
          blurOnSubmit={true}
          maxLength={100}
          right={<TextInput.Affix text="/100" />}
        />
        <StyledButton
          mode="contained"
          uppercase={true}
          disabled={taskTitle === "" ? true : false}
          onPress={() => {
            handleAddTask();
          }}
        >
          Adicionar tarefa
        </StyledButton>
      </StyledView>
    </KeyboardAvoidingView>
  );
}

export default addTask;
