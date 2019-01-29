export function reducer(state = initialState, action: filmAction.Action) {
  switch (action.type) {
    case filmAction.ADD_ONE: {
      const newFilm: Film = action.payload;
      return {
        ...state,
        ids: [...state.ids, newFilm.id],
        films: { ...state.films, newFilm }
      };
    }
    case filmAction.SELECT: {
      const id = action.payload;
      return {
        ...state,
        selected: id
      };
    }
    default:
      return state;
  }
}
