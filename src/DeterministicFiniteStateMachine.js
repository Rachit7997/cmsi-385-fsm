export default class DeterministicFiniteStateMachine {

  /**
   */
  constructor({ transitions, startState, acceptStates }) {
    this._transitions = transitions;
    this._startState  = startState;
    this._acceptStates = acceptStates;
  }

  /**
   *
   * @returns a string state name
   */
  transition(state, symbol) {
    return this._transitions[state][symbol];
  }

  accepts(string, state = this._startState) {
    var index;
    var current_state = state;
    var current_token = string.charAt(0);
    for (index = 0; index < (string.length); index++)
    {
      current_token = string.charAt(index);
      current_state = this._transitions[current_state][current_token];
    }
    if (this._acceptStates == current_state)
    {
      return true
    }
    else {
      return false
    }
  }

}
