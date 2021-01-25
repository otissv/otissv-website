import React from "react";
import { isEmail } from "../../utils/isEmail";

import {
  ContactFormActions,
  ContactFormFieldInterface,
  ContactFormInterface,
  ContactFormState,
  RESET,
  SET_EMAIL_VALUE,
  SET_MESSAGE_VALUE,
  SET_SUBJECT_VALUE,
} from "./types.contact";

export function useContactForm(
  form: ContactFormInterface,
): readonly [ContactFormState, React.Dispatch<ContactFormActions>] {
  const initialState: ContactFormState = {
    email: {
      ...form.fields.email,
      value: "",
      errorMessage: "Invalid email address",
      validate(field: ContactFormFieldInterface) {
        return !isEmail(field.value as string);
      },
    },
    subject: {
      ...form.fields.subject,
      value: "",
      errorMessage: "Subject must be more than 5 characters.",
      validate(field: ContactFormFieldInterface) {
        return !((field.value as string).length > 5);
      },
    },
    message: {
      ...form.fields.message,
      value: "",
      errorMessage: "Message must be more than 10 characters.",
      validate(field: ContactFormFieldInterface) {
        return !((field.value as string).length > 10);
      },
    },
  };
  function reducer(state = initialState, action: ContactFormActions): any {
    switch (action.type) {
      case RESET:
        return initialState;

      case SET_EMAIL_VALUE: {
        return {
          ...state,
          email: {
            ...state.email,
            value: action.value,
          },
        };
      }

      case SET_MESSAGE_VALUE: {
        return {
          ...state,
          message: {
            ...state.message,
            value: action.value,
          },
        };
      }

      case SET_SUBJECT_VALUE: {
        return {
          ...state,
          subject: {
            ...state.subject,
            value: action.value,
          },
        };
      }
    }
  }

  return React.useReducer(reducer, initialState);
}
