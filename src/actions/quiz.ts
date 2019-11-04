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
  payload: {};
}

export interface RemoveCardAction {
  type: ActionTypes.REMOVE_CARD;
  payload: {};
}

export interface StartQuizAction {
  type: ActionTypes.START_QUIZ;
  payload: {};
}

export interface EndQuizAction {
  type: ActionTypes.END_QUIZ;
  payload: {};
}

export function startQuiz(quiz: Quiz): StartQuizAction {
  return {
    type: ActionTypes.START_QUIZ,
    payload: {}
  };
}

export function endQuiz(quiz: Quiz): EndQuizAction {
  return {
    type: ActionTypes.END_QUIZ,
    payload: {}
  };
}

export function updateCard(card: card): UpdateCardAction {
  return {
    type: ActionTypes.UPDATE_CARD,
    payload: {}
  };
}

export function removeCard(quiz: Quiz): RemoveCardAction {
  return {
    type: ActionTypes.REMOVE_CARD,
    payload: {}
  };
}
