export enum TFtype {
  TRUE = "true",
  FALSE = "false",
  UNSELECTED = "unselected",
}

export type SelectType = number | null;

export enum AnswerType {
  TF = "tf", // answer = TFtype
  SELECT = "select", // answer = number or number[]
  SHORT = "short", // answer = string
}
