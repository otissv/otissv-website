import React from "react";
import { Textbox } from "@redesign-system/react-ui/Textbox";
import { Box } from "@redesign-system/react-ui/Box";

import { SubscribeProps } from "./types.subscribe";
import { CTAButton } from "../../components/Button";
import { Form } from "../../components/Form";
import { Section } from "../../components/Section";
import { Typography } from "@redesign-system/react-ui/Typography";
import {
  NetlifyFormFields,
  submitNetlifyForm,
} from "../../components/NetlifyForm";

export function Subscribe({
  buttonLabel,
  className = "",
  content,
  info,
  inputId,
  inputLabel,
  inputPlaceholder,
  title,
}: SubscribeProps): JSX.Element {
  const classNames = `Subscribe ${className}`;
  const [email, setEmail] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const [showThankYou, setShowThankYou] = React.useState(false);
  const SUBMIT_FORM = "subscribe";

  const css = `
    background: var(--background-color-3);
  `;

  function validateEmail(value: string): boolean {
    return value.length < 5 || !value.match(/@\w/);
  }

  function handleOnBlur(e: any) {
    const value = e.target.value;

    const isValid = validateEmail(value);

    // eslint-disable-next-line functional/no-conditional-statement
    if (isValid !== hasError) {
      // eslint-disable-next-line functional/no-expression-statement
      setHasError(isValid);
    }
  }

  function handleOnChange(e: any) {
    const value = e.target.value;
    // eslint-disable-next-line functional/no-expression-statement
    setEmail(value);
  }

  function handleOnSubmit(e: any) {
    // eslint-disable-next-line functional/no-expression-statement
    e.preventDefault();

    const isInvalid = validateEmail(email);

    // eslint-disable-next-line functional/no-conditional-statement
    if (isInvalid === true) {
      // eslint-disable-next-line functional/no-expression-statement
      isInvalid !== hasError && setHasError(isInvalid);
      // eslint-disable-next-line functional/no-conditional-statement
    } else {
      // eslint-disable-next-line functional/no-expression-statement
      submitNetlifyForm({
        formId: `form-${SUBMIT_FORM}`,
      })
        .then((response: any) => {
          // eslint-disable-next-line functional/no-conditional-statement
          if (response.status === 200) {
            // eslint-disable-next-line functional/no-expression-statement
            setShowThankYou(true);
          }
        })
        .catch(console.error);
    }
  }

  return (
    <Section
      id="subscribe"
      className={classNames}
      d="flex"
      fld="column"
      ai="center"
      css={css}
      pt={9}
      pb={10}
      px={5}
    >
      <div>
        <h3>{title}</h3>
        <p style={{ maxWidth: "576px" }}>
          {content}

          <em
            style={{
              display: "block",
              marginTop: "30px",
              marginBottom: "5px",
            }}
          >
            {info}
          </em>
        </p>

        <Form
          id={`form-${SUBMIT_FORM}`}
          name={SUBMIT_FORM}
          data-netlify="true"
          netlify={true}
          method="POST"
          onSubmit={handleOnSubmit}
        >
          <NetlifyFormFields name={SUBMIT_FORM} />

          <Box
            w="100%"
            mq={{
              md: {
                min: {
                  height: 9,
                  display: "inline-flex",
                },
              },
            }}
          >
            <Textbox
              id={inputId}
              value={email}
              label={inputLabel}
              placeholder={inputPlaceholder}
              onBlur={handleOnBlur}
              onChange={handleOnChange}
              required={true}
              type="email"
              appearance="SUBSCRIBE"
              fs="20px"
              h="52px"
              flex={1}
              mb={7}
              mx={0}
              border={hasError}
              css={`
                border-bottom-left-radius: 30px;
                border-top-left-radius: 30px;
                border-bottom-right-radius: 30px;
                border-top-right-radius: 30px;
                padding-left: 30px;
              `}
              mq={{
                md: {
                  min: {
                    borderTopRightRadius: "0px",
                    borderBottomRightRadius: "0px",
                    height: "63px",
                  },
                },
              }}
            />

            <CTAButton
              as="button"
              type="submit"
              mq={{
                md: {
                  min: {
                    borderBottomLeftRadius: "0px",
                    borderTopLeftRadius: "0px",
                  },
                },
              }}
            >
              {buttonLabel}
            </CTAButton>
          </Box>
        </Form>
        <Typography
          color="#F29B9B"
          mt={3}
          visibility={hasError ? "visible" : "hidden"}
        >
          Invalid Email address.
        </Typography>

        {showThankYou && <p>Thank you for subscribing.</p>}
      </div>
    </Section>
  );
}
