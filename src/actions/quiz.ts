import { Status } from "../models/Quiz";
import Quiz from "../models/Quiz";
type card = {
  English: String;
  French: String;
  Picture: String;
  Correct: Boolean;
};

export enum ActionTypes {
  SETUP = "SETUP",
  UPDATE_CARD = "UPDATE_CARD",
  REMOVE_CARD = "REMOVE_CARD",
  START_QUIZ = "START_QUIZ",
  END_QUIZ = "END_QUIZ"
}

export interface UpdateCardAction {
  type: ActionTypes.UPDATE_CARD;
  payload: { card: card };
}

export interface RemoveCardAction {
  type: ActionTypes.REMOVE_CARD;
  payload: {
    quiz: Quiz;
  };
}

export interface StartQuizAction {
  type: ActionTypes.START_QUIZ;
  payload: {
    quiz: Quiz;
    active: Boolean;
  };
}

export interface EndQuizAction {
  type: ActionTypes.END_QUIZ;
  payload: {
    quiz: Quiz;
    active: Boolean;
  };
}

export function startQuiz(quiz: Quiz, active: Boolean): StartQuizAction {
  return {
    type: ActionTypes.START_QUIZ,
    payload: { quiz, active: true }
  };
}

export function endQuiz(quiz: Quiz): EndQuizAction {
  return {
    type: ActionTypes.END_QUIZ,
    payload: { quiz, active: false }
  };
}

export function updateCard(card: card): UpdateCardAction {
  return {
    type: ActionTypes.UPDATE_CARD,
    payload: { card }
  };
}

export function removeCard(quiz: Quiz): RemoveCardAction {
  return {
    type: ActionTypes.REMOVE_CARD,
    payload: { quiz }
  };
}

export type Action =
  | StartQuizAction
  | EndQuizAction
  | UpdateCardAction
  | RemoveCardAction;
