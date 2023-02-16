import { LIST_ADD, LIST_ITEM_COMPLETE, LIST_DELETE, LIST_ITEM_UNCOMPLETE } from '~/constant/ListConstant';

export const listReducer = (state = { todoList: [], repeat: false }, action) => {
    switch (action.type) {
        case LIST_ADD:
            const newList = action.payload;
            const checkName = state.todoList.find((x) => x.name === action.payload.name);

            if (!checkName) {
                return {
                    ...state,
                    repeat: false,
                    todoList: [...state.todoList, newList],
                };
            } else {
                return {
                    ...state,
                    repeat: true,
                };
            }

        case LIST_DELETE:
            return {
                ...state,
                todoList: state.todoList.filter((x) => x.name !== action.payload),
            };

        case LIST_ITEM_COMPLETE:
            const checkNote = state.todoList.find((x) => x.name === action.payload.name);
            return {
                ...state,
                todoList: state.todoList.map((x) => (x.name === checkNote.name ? action.payload : x)),
            };

        case LIST_ITEM_UNCOMPLETE:
            const checkNoteUnComplete = state.todoList.find((x) => x.name === action.payload.name);
            return {
                ...state,
                todoList: state.todoList.map((x) => (x.name === checkNoteUnComplete.name ? action.payload : x)),
            };
        default:
            return state;
    }
};
