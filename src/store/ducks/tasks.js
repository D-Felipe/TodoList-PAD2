export const Types = {
  ADD: "@tasks/ADD_TASK",
  REMOVE: "@tasks/REMOVAL_TASK",
  UPDATE: "@tasks/UPDATE_TASK",
  VERIFY: "@tasks/VERIFY_TASK",
};

const initialState = {
  data: [],
};

let count = 1;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        data: [
          ...state.data,
          {
            id: action.id,
            title: action.title,
            description: action.description,
          },
        ],
      };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };
    case Types.UPDATE:
      const index = state.data.findIndex((item) => item.id === action.id);
      const newArray = [...state.data];
      newArray[index] = {
        id: action.id,
        title: action.title,
        description: action.description,
      };
      return {
        ...state,
        data: newArray,
      };
    case Types.VERIFY:
      count = 1;
      const newNewArray = [...state.data];

      newNewArray.map((item) => (item.id = count++));
      return {
        ...state,
        data: newNewArray,
      };
    default:
      return state;
  }
}

export const Creators = {
  addTasks: (title, description) => ({
    type: Types.ADD,
    id: count++,
    title,
    description,
  }),
  removeTasks: (id) => ({
    type: Types.REMOVE,
    id,
  }),
  updateTask: (id, title, description) => ({
    type: Types.UPDATE,
    id,
    title,
    description,
  }),
  verifyTask: () => ({
    type: Types.VERIFY,
  }),
};
