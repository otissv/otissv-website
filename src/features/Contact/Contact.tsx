import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { ErrorMessageInterface } from "@redesign-system/react-ui/ErrorMessage";
import { Fieldset } from "@redesign-system/react-ui/Fieldset";
import { FormTextbox } from "@redesign-system/react-ui/FormTextbox";
import { Typography } from "@redesign-system/react-ui/Typography";
import { toSnakeCase } from "ufunc/textTransform";
import { everyTrue } from "ufunc/everyTrue";

import { ScrollTrigger } from "../../components/ScrollTrigger";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";
import { useAnimations } from "../../hooks/useAnimations";
import {
  NetlifyFormFields,
  submitNetlifyForm,
} from "../../components/NetlifyForm";

import {
  ContactProps,
  ContactFormFieldInterface,
  CONTACT_FORM_TEXTBOX,
  CONTACT_FORM_TEXTAREA,
} from "./types.contact";
import { CTAButton } from "../../components/Button";
import { Form } from "../../components/Form";
import { Heading } from "../../components/Heading";
import { Lead } from "../../components/Lead";
import { Section } from "../../components/Section";
import { useContactForm } from "./useContactForm";

export function Contact<Props extends ContactProps>({
  className = "",
  form,
  lead,
  quote,
  support,
  telephone,
  title,
}: Props): JSX.Element {
  const { animate, onEnter } = useScrollTrigger();
  const [showThankYou, setShowThankYou] = React.useState(false);
  const CONTACT_FORM = "contact";
  const { button, footer } = form || {};
  const classNames = `Contact ${className}`;

  const [state, dispatch] = useContactForm(form);

  function validate(): boolean {
    const fields = Object.values(state).map((field: Record<string, any>) => {
      return !field.validate(field);
    });

    return everyTrue(fields);
  }

  function handleOnSubmit(e: any) {
    // eslint-disable-next-line functional/no-expression-statement
    e.preventDefault();

    const isValid = validate();

    // eslint-disable-next-line functional/no-conditional-statement
    if (isValid === true) {
      // eslint-disable-next-line functional/no-expression-statement
      submitNetlifyForm({
        formId: `form-${CONTACT_FORM}`,
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
      id="contact"
      className={classNames}
      mt={10}
      centered
      css={{
        "&:before": {
          content: '""',
          backgroundImage: "url(images/shape.svg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          width: "100%",
          height: "1116px",
          transform: "translateY(201px)",
        },
      }}
      mq={{
        lg: {
          min: {
            marginBottom: 12,
          },
        },
      }}
    >
      <Box className="quote-container" d="flex" jc="center" px={7}>
        <ScrollTrigger onEnter={onEnter} onExit={onEnter} />
        <Box
          className="Quote"
          as="blockquote"
          fs={7}
          fontWeight={4}
          bd="none"
          color="#fff"
          mw="710px"
          af="center"
          ls="2px"
          lh="61px"
          mb={11}
          mt={13}
          ml={7}
          animate={animate}
          animations={useAnimations({
            transform: ["translateX(-500px)", "translateX(0px)"],
            opacity: [0.4, 1, 100, { duration: 2000 }],
          })}
          css={{
            "&:before": {
              content: "url(images/left-quotes.svg)",
              position: "absolute",
              transform: "translate(-50px,-120px)",
            },
          }}
        >
          {quote}
        </Box>
      </Box>

      <Box
        className="Contact"
        centered
        mw="var(--container)"
        d="flex"
        fld="column"
        mb={13}
        mq={{ xl: { min: { paddingLeft: 12, paddingRight: 12 } } }}
      >
        <Heading
          mb={0}
          px={7}
          mq={{ xl: { min: { paddingLeft: 0, paddingRight: 0 } } }}
        >
          {title}
        </Heading>

        <Box className="Contact-container" d="flex" fld="column">
          <Box
            className="Contact-left"
            mq={{
              lg: { min: { mr: 7 } },
            }}
          >
            <Lead
              mt={4}
              mw="467px"
              px={7}
              mq={{
                lg: { min: { marginTop: 10 } },
                xl: { min: { paddingLeft: 0, paddingRight: 0 } },
              }}
            >
              {lead}
            </Lead>
            <Form
              id={`form-${CONTACT_FORM}`}
              name={CONTACT_FORM}
              data-netlify="true"
              netlify={true}
              method="POST"
              onSubmit={handleOnSubmit}
              radius="5px"
              bg="var(--background-color-2)"
              w="100%"
              pt={8}
              pb={9}
              px={9}
              mt={8}
              flex="1"
              mw="100%"
              zIndex={1}
              mq={{
                lg: {
                  min: {
                    maxWidth: "514px",
                    float: "right",
                    position: "absolute",
                    top: 0,
                    left: "50%",
                  },
                },
              }}
              elevate={5}
            >
              <Fieldset
                legend={{
                  visibility: "hidden",
                  children: "compose message",
                }}
                childrenProps={{
                  marginBottom: 4,
                }}
              >
                <NetlifyFormFields name={CONTACT_FORM} />

                <ContactFormField {...state.email} dispatch={dispatch} />
                <ContactFormField
                  mt={7}
                  {...state.subject}
                  dispatch={dispatch}
                />
                <ContactFormField
                  mt={7}
                  {...state.message}
                  dispatch={dispatch}
                  type={CONTACT_FORM_TEXTAREA}
                />
              </Fieldset>

              <CTAButton as="button" type="submit" mt={8}>
                {button}
              </CTAButton>
              <Typography fs={1} mt={4} mb={5}>
                {footer}
              </Typography>

              {showThankYou && <p>Thank you for subscribing.</p>}
            </Form>

            <Typography
              px={7}
              mt={9}
              mq={{
                lg: { min: { marginTop: 11 } },
                xl: { min: { paddingLeft: 0, paddingRight: 0 } },
              }}
            >
              {support}
              <br />
              <a
                href={`tel:${telephone}`}
                style={{ fontSize: "26px", color: "#fff" }}
              >
                {telephone}
              </a>
            </Typography>

            <Box
              d="none"
              h="200px"
              mq={{ lg: { min: { display: "block" } } }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}

function ContactFormField({
  dispatch,
  type = CONTACT_FORM_TEXTBOX,
  ...propsRest
}: ContactFormFieldInterface): JSX.Element {
  const { errorMessage, value = "", validate, ...field } = propsRest;
  const [error, setError] = React.useState<
    string | Partial<ErrorMessageInterface> | undefined
  >("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    // eslint-disable-next-line functional/no-expression-statement
    dispatch({
      type: `SET_${toSnakeCase(e.target.id).toUpperCase()}_VALUE` as any,
      value: e.target.value,
    });
  }

  function onBlur(_e: React.FocusEvent<HTMLInputElement>) {
    /* eslint-disable functional/no-conditional-statement, functional/no-expression-statement  */
    if (value.trim() === "") {
      setError("This field is required.");
    } else if (validate(propsRest)) {
      setError(errorMessage);
    } else {
      setError("");
    }
  }

  const fieldProps = {
    ...field,
    onChange,
    onBlur,
    invalid: Boolean(error),
    appearance: "CONTACT_FORM",
    errorMessage: {
      appearance: "TERTIARY",
      children: error,
    },
    value: value,
  };

  return type === CONTACT_FORM_TEXTAREA ? (
    <FormTextbox
      {...(fieldProps as any)}
      control={{
        as: "textarea",
        display: "block",
        rows: 5,
        resize: "none",
      }}
    />
  ) : (
    <FormTextbox
      {...(fieldProps as any)}
      control={{
        h: "40px",
        stretch: true,
      }}
      h="88px"
    />
  );
}
