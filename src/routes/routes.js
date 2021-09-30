import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import homeScreen from "./../pages/home/home";
import addTaskScreen from "./../pages/addTask/addTask";
import editTaskScreen from "./../pages/editTask/editTask";

const Stack = createNativeStackNavigator();

function routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={homeScreen}
          options={{
            title: "Tarefas",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="AddNewTask"
          component={addTaskScreen}
          options={{
            title: "Adicione uma tarefa",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="EditTask"
          component={editTaskScreen}
          options={{
            title: "Edite esta tarefa",
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default routes;
