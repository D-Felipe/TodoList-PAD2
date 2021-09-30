import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const NewTaskButton = styled(Button)`
  position: absolute;
  bottom: 20px;
`

export const Box = styled.View`
  width: 95%;
  height: auto;
  top: 0;

  align-self: center;

  margin-top: 10px;
  margin-bottom: 10px;
    
  border-radius: 5px;

  background: #ffffff;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TaskTitle = styled.Text`
  margin-top: 5px;
  margin-bottom: 0;
  margin-left: 10px;

  font-size: 16px;
  font-weight: bold;
`;

export const TaskDescription = styled.Text`
  margin: 10px;
  margin-top: 0;

  font-size: 14px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const TitleFlatList = styled.Text`
  margin: 10px;
  
  align-self: center;

  font-size: 16px;
  font-weight: bold;
`;