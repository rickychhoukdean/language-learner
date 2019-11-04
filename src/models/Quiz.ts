export enum Status {
  Default = "DEFAULT",
  QuizInProgress = "QUIZ_IN_PROGRESS",
  QuizOver = "QUIZ_OVER"
}

export default interface Quiz {
  Name: String | null;
  Active: boolean;
  Word: {
    English: String;
    French: String;
    Picture: String;
    Correct: Boolean;
  }[];
}
