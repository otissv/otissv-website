import React from "react";
import { Textbox } from "@redesign-system/react-ui/Textbox";

import { SubscribeProps } from "./types.subscribe";
import { CTAButton } from "../../components/Button";
import { Form } from "../../components/Form";
import { Section } from "../../components/Section";

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

  const css = `
    background: var(--background-color-3);
  `;
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
          <Textbox
            id={inputId}
            appearance="SUBSCRIBE"
            label={inputLabel}
            placeholder={inputPlaceholder}
            fs="20px"
            h="52px"
            flex={1}
            mb={7}
            mx={0}
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
      </div>
    </Section>
  );
}
