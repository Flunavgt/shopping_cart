// Actions
const RESERVATIONS_FETCHED = 'RESERVATIONS_FETCHED';
const RESERVATIONS_ADDED = 'RESERVATIONS_ADDED';
const RESERVATIONS_REMOVED = 'RESERVATIONS_REMOVED';

// Actions creators
const fetchOperations = (payload) => ({
  type: RESERVATIONS_FETCHED,
  payload,
});

const postOperations = (payload) => ({
  type: RESERVATIONS_ADDED,
  payload,
});

const removeOperation = (id) => ({
  type: RESERVATIONS_REMOVED,
  id,
});

// get resrvations from server
const url = (id) => `http://localhost:3000/api/v1/users/${id}/operations`;

// fetch operations from the server
export const fetchOperationsFromServer = (id) => async (dispatch) => {
  const data = await fetch(`http://localhost:3000/api/v1/users/${id}/operations`);
  const operations = await data.json();
  dispatch(fetchOperations(operations));
};

// add input/form data to operation
export const addOperation = (formData) => async (dispatch) => {
  await fetch(url(formData.user_id), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  dispatch(postOperations(formData));
};

// delete specific operation
export const removeOperations = (data) => async (dispatch) => {
  await fetch(`${url(data.user_id)}/${data.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id: data.id }),
  });
  dispatch(removeOperation(data.id));
};

const initialState = {
  operations: [],
};

// Reducers
export const operations = (state = initialState, action) => {
  switch (action.type) {
    case RESERVATIONS_FETCHED:
      return {
        ...state,
        operations: action.payload,
      };

    case RESERVATIONS_ADDED:
      return {
        ...state,
        operations: [...state.operations, action.payload],
      };
    case RESERVATIONS_REMOVED:
      return {
        ...state,
        operations: state.operations.filter(
          (operation) => operation.id !== action.id,
        ),
      };
    default:
      return state;
  }
};
