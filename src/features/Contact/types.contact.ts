import { FormTextBoxInterface } from "@redesign-system/react-ui/FormTextbox";

export const CONTACT_FORM_TEXTBOX = "CONTACT_FORM_TEXTBOX";
export const CONTACT_FORM_TEXTAREA = "CONTACT_FORM_TEXTAREA";

export interface ContactProps {
  readonly className?: string;
  readonly title: string;
  readonly quote: string;
  readonly lead: readonly string[];
  readonly support: string;
  readonly telephone: string;
  readonly form: ContactFormInterface;
}

export interface ContactFormInterface {
  readonly fields: {
    readonly email: ContactFormFieldInterface;
    readonly message: ContactFormFieldInterface;
    readonly subject: ContactFormFieldInterface;
  };
  readonly footer: string;
  readonly button: string;
}

export interface ContactFormFieldInterface extends FormTextBoxInterface {
  readonly dispatch: React.Dispatch<ContactFormActions>;
  readonly type: typeof CONTACT_FORM_TEXTBOX | typeof CONTACT_FORM_TEXTAREA;
}

export interface ContactFormFieldState extends ContactFormFieldInterface {
  readonly errorMessage?: string;
  readonly value: string;
}

export interface ContactFormState {
  readonly email: ContactFormFieldState;
  readonly message: ContactFormFieldState;
  readonly subject: ContactFormFieldState;
}

export const RESET = "RESET";
export const SET_EMAIL_VALUE = "SET_EMAIL_VALUE";
export const SET_MESSAGE_VALUE = "SET_MESSAGE_VALUE";
export const SET_SUBJECT_VALUE = "SET_SUBJECT_VALUE";

export type ContactFormActionTypes =
  | typeof RESET
  | typeof SET_EMAIL_VALUE
  | typeof SET_MESSAGE_VALUE
  | typeof SET_SUBJECT_VALUE;

export type SetResetAction = {
  readonly type: typeof RESET;
};

export type SetEmailValueAction = {
  readonly type: typeof SET_EMAIL_VALUE;
  readonly value: string;
};

export type SetMessageValueAction = {
  readonly type: typeof SET_MESSAGE_VALUE;
  readonly value: string;
};

export type SetSubjectValueAction = {
  readonly type: typeof SET_SUBJECT_VALUE;
  readonly value: string;
};

export type ContactFormActions =
  | SetEmailValueAction
  | SetMessageValueAction
  | SetResetAction
  | SetSubjectValueAction;
