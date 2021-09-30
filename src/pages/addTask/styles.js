import styled from "styled-components/native";
import { TextInput, Button } from "react-native-paper";

export const StyledView = styled.View`
  flex: 1;
  align-items: center;
`;

export const StyledTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const StyledTextInput = styled(TextInput)`
  width: 95%;
  margin: 10px;

  font-size: 16px;
`;

export const StyledTextInput_ = styled(TextInput)`
  width: 95%;
  height: 200px;
  margin: 10px;

  font-size: 16px;
`;
export const StyledButton = styled(Button)`
  position: absolute;
  bottom: 20px;
`;
