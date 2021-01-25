import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import { Typography } from "@redesign-system/react-ui/Typography";
import ReactScrollTrigger from "react-scroll-trigger";
import Img from "gatsby-image";

import { AboutProps } from "./types.about";
import { Heading } from "../../components/Heading";
import { Section } from "../../components/Section";
import { Lead } from "../../components/Lead";
import { useAnimations } from "../../hooks/useAnimations";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const ScrollTrigger: any = ReactScrollTrigger;

export function About<Props extends AboutProps>({
  className = "",
  title,
  content,
  lead,
  images,
  ...propsRest
}: Props): JSX.Element {
  const classNames = `About ${className}`;
  const {
    animate: animateHeading,
    onEnter: onEnterHeading,
  } = useScrollTrigger();
  const { animate: animateLead, onEnter: onEnterLead } = useScrollTrigger();

  return (
    <Section
      id="about"
      className={classNames}
      centered
      mw="var(--container)"
      px={7}
      mb={11}
      css={`
        &::after {
          content: "";
          display: table;
          clear: both;
        }
      `}
      mq={{
        xl: {
          min: {
            paddingLeft: 12,
            paddingRight: 12,
            mb: 12,
          },
        },
      }}
      {...propsRest}
    >
      <style>{`.about-image { clip-path: url(#about-mask); }`}</style>

      <ScrollTrigger onEnter={onEnterHeading} onExit={onEnterHeading} />
      <Heading
        animate={animateHeading}
        animations={useAnimations({
          transform: ["translateX(-100px)", "translateX(0px)"],
          opacity: [0.2, 1, 100, { duration: 2000 }],
        })}
      >
        {title}
      </Heading>

      <Box
        className="about-main"
        mq={{
          xl: {
            min: {
              display: "flex",
            },
          },
        }}
      >
        <Box
          className="image-container"
          mq={{
            lg: {
              min: {
                order: 0,
                flex: 1,
              },
            },
          }}
        >
          <Box
            className="about-image-bg"
            as="svg"
            viewBox="0 0 574 458"
            mh="526px"
            mw="553px"
            position="absolute"
            top={0}
            left={0}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            display="none"
            mq={{
              md: {
                min: { display: "block" },
              },
            }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 237.201C0 152.779 64.0684 131.37 114.468 106.784C164.867 82.1975 189.759 -13.5632 333.362 2.24679C476.964 18.0568 639.01 228.999 546.042 364.861C488.721 448.629 323.525 474.032 228.935 446.684C173.412 430.632 181.732 354.153 153.557 376.925C77.2355 438.201 0 321.389 0 237.201Z"
              fill="#EE3D8B"
            />
          </Box>

          <Box
            className="about-clipPath"
            as="svg"
            viewBox="0 0 553 526"
            position="absolute"
            top={0}
            left={0}
            fill="#D8D8D8"
            xmlns="http://www.w3.org/2000/svg"
            display="none"
            mq={{
              md: {
                min: { display: "block" },
              },
            }}
          >
            <clipPath id="about-mask">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M170.234 7.44445C222.915 24.1916 265.297 64.9944 309.55 99.362C338.687 121.989 370.839 135.417 403.085 151.808C485.066 193.481 566.597 259.175 550.378 360.14C536.862 444.283 451.771 529.077 358.447 525.914C326.169 524.817 299.056 511.832 275.386 493.396C261.173 482.329 247.652 465.183 227.945 462.338C207.159 459.34 184.336 472.499 165.442 480.466C137.322 492.335 107.713 504.692 77.2388 505.65C7.32144 507.853 -7.75297 454.452 3.37493 388.772C8.78625 356.842 18.3735 326.005 25.5169 294.536C35.6496 249.908 30.2329 209.633 23.8932 164.79C18.247 124.856 16.141 80.9256 36.4967 47.2041C59.5942 8.94016 106.654 -5.13565 148.059 2.00895C155.663 3.3209 163.043 5.15842 170.234 7.44445Z"
                fill="#D8D8D8"
              />
            </clipPath>
          </Box>

          <Img
            className="about-image"
            fluid={images.me.fluid}
            alt="Otis Virginie"
          />
          {/* <Box
            as="img"
            // position="absolute"
            mh="526px"
            mw="553px"
            mb={5}
            src="images/me1.jpeg"
            css={{
              clipPath: "url(#about-mask)",
              transition: "all 0.2s ease",
              // backgroundImage: "url(images/me1.jpeg",
            }}
            mq={{
              md: {
                min: { marginBottom: 10 },
              },
            }}
          /> */}
        </Box>
        <Box
          className="About-content"
          mw="600px"
          mq={{
            xl: {
              min: {
                marginLeft: 8,
              },
            },
          }}
        >
          <Lead
            mb={8}
            animate={animateLead}
            animations={useAnimations({
              transform: ["translateX(200px)", "translateX(0px)"],
              opacity: [0.2, 1, 100, { duration: 2000 }],
            })}
          >
            {lead}
          </Lead>
          <ScrollTrigger onEnter={onEnterLead} onExit={onEnterLead} />

          {content.map((text: string, index: number) => (
            <Typography
              key={index}
              mb={5}
              lh={3}
              animate={animateLead}
              animations={useAnimations({
                transform: ["translateY(100px)", "translateY(0px)"],
                opacity: [0.2, 1, 100, { duration: 2000 }],
              })}
            >
              {text}
            </Typography>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
