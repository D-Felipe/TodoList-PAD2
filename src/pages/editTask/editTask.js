import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { KeyboardAvoidingView, Platform, Keyboard } from "react-native";
import { TextInput } from "react-native-paper";

import { Creators as TaskActions } from "../../store/ducks/tasks";
import {
  StyledView,
  StyledView_,
  StyledTextInput,
  StyledTextInput_,
  StyledButton,
} from "./styles";

function editTask() {
  const { itemId, itemT, itemD } = route.params;
  const [taskTitle, setTaskTitle] = useState(itemT);
  const [taskDescription, setTaskDescription] = useState(itemD);

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleAddTask() {
    dispatch(TaskActions.updateTask(itemId, taskTitle, taskDescription));
    setTaskTitle("");
    setTaskDescription("");
    Keyboard.dismiss();
    navigation.navigate("Home");
  }

  function handleDeleteTask(id) {
    dispatch(TaskActions.removeTasks(id));
    dispatch(TaskActions.verifyTask());
    setTaskTitle("");
    setTaskDescription("");
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
          placeholder={taskTitle}
          mode="outlined"
          value={taskTitle}
          onChangeText={(text) => setTaskTitle(text)}
          maxLength={20}
          right={<TextInput.Affix text="/20" />}
        />
        <StyledTextInput_
          label="Descrição"
          placeholder={taskDescription}
          mode="flat"
          value={taskDescription}
          onChangeText={(text) => setTaskDescription(text)}
          multiline={true}
          scrollEnable={true}
          blurOnSubmit={true}
          maxLength={100}
          right={<TextInput.Affix text="/100" />}
        />
        <StyledView_>
          <StyledButton
            color="red"
            mode="contained"
            uppercase={true}
            disabled={taskTitle === "" ? true : false}
            onPress={() => {
              handleDeleteTask(itemId);
            }}
          >
            APAGAR
          </StyledButton>
          <StyledButton
            mode="contained"
            uppercase={true}
            disabled={taskTitle === "" ? true : false}
            onPress={() => {
              handleAddTask();
            }}
          >
            SALVAR
          </StyledButton>
        </StyledView_>
      </StyledView>
    </KeyboardAvoidingView>
  );
}

export default editTask;
