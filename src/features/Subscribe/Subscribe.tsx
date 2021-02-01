import React, { useState } from "react";
import { Textbox } from "@redesign-system/react-ui/Textbox";

import { SubscribeProps } from "./types.subscribe";
import { CTAButton } from "../../components/Button";
import { Form } from "../../components/Form";
import { Section } from "../../components/Section";
import { Typography } from "@redesign-system/react-ui/Typography";

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
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

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

    const isValid = validateEmail(email);

    // eslint-disable-next-line functional/no-conditional-statement
    if (isValid === true) {
      // eslint-disable-next-line functional/no-expression-statement
      isValid !== hasError && setHasError(isValid);
      // eslint-disable-next-line functional/no-conditional-statement
    } else {
      // eslint-disable-next-line functional/no-expression-statement
      fetch("/", {
        method: "POST",
        body: new URLSearchParams(email).toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
        // .then((response: Response) => response.json())
        .then(() => setShowThankYou(true))
        .catch(console.log);
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
          id="subscribe"
          name="form-subscribe"
          method="POST"
          data-netlify="true"
          netlify
          d="block"
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
          <input type="hidden" name="form-subscribe" value="subscribe" />
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
            type="submit"
            onClick={handleOnSubmit}
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
