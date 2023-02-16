import { LIST_ADD, LIST_DELETE, LIST_ITEM_COMPLETE, LIST_ITEM_UNCOMPLETE } from '~/constant/ListConstant';

export const addList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_ADD,
        payload: {
            name: name,
            complete: false,
        },
    });

    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
};

export const deleteList = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_DELETE,
        payload: name,
    });
    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
};

export const listItemComplete = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_ITEM_COMPLETE,
        payload: {
            name: name,
            complete: true,
        },
    });

    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
};

export const listItemUnComplete = (name) => async (dispatch, getState) => {
    dispatch({
        type: LIST_ITEM_UNCOMPLETE,
        payload: {
            name: name,
            complete: false,
        },
    });

    localStorage.setItem('listItems', JSON.stringify(getState().todoItems.todoList));
};
