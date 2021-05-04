const statoIniziale = { somma: 0 };

export function reducerSomma(state = statoIniziale, action) {
  switch (action.type) {
    case "incrementa-di-uno":
      return {
        ...state,
        somma: state.somma + 1
      };
    case "decrementa-di-uno":
      return {
        ...state,
        somma: state.somma - 1
      };
    default:
      return state;
  }
}
