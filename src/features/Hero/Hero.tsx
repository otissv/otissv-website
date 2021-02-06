import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import Img from "gatsby-image";

import { HeroProps } from "./types.hero";
import { Section } from "../../components/Section";
import { SocialLinks } from "../../components/SocialLinks";
import { CTAButton } from "../../components/Button";
import { Markdown } from "../../components/Markdown";
import { ScrollTrigger } from "../../components/ScrollTrigger";
import { useAnimations } from "../../hooks/useAnimations";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

export function Hero<Props extends HeroProps>({
  className = "",
  title,
  lead,
  socialInfo,
  cta,
  social,
  images,
  ...propsRest
}: Props): JSX.Element {
  const classNames = `Hero ${className}`;
  const { animate, onEnter } = useScrollTrigger();

  return (
    <Section
      id="hero-section"
      className={classNames}
      centered
      px={7}
      mt={6}
      mb={11}
      mw="var(--container)"
      mq={{
        lg: {
          min: {
            mb: 13,
            mt: 8,
          },
        },
        xl: {
          min: {
            mt: 13,
            paddingLeft: 12,
            paddingRight: 12,
          },
        },
      }}
      {...propsRest}
    >
      <style>{"#hero  .hero-image { clip-path: url(#hero-mask)  }"}</style>
      <Box>
        <ScrollTrigger onEnter={onEnter} onExit={onEnter} />
        <Markdown
          fw={0}
          mb={5}
          fs={5}
          color="#fff"
          css={{ h1: { fontSize: "inherit", fontWeight: "inherit" } }}
          animate={animate}
          animations={useAnimations({
            transform: ["translateY(-100px)", "translateY(0px)"],
          })}
        >
          {title}
        </Markdown>
        <Box
          className="hero-image"
          mb={6}
          mq={{
            md: {
              min: {
                mt: 9,
              },
            },
            lg: {
              min: {
                float: "right",
                width: "50%",
              },
            },
          }}
        >
          <Img
            className="hero-image"
            fluid={images.me.fluid}
            alt="Otis Virginie"
          />

          <Box
            as="svg"
            width="0"
            height="0"
            viewBox="0 0 575 513"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute" }}
            display="none"
            mq={{
              md: {
                min: { display: "block" },
              },
            }}
          >
            <defs>
              <clipPath id="hero-mask">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M393.661 508.643C338.95 492.685 299.235 439.852 253.272 407.119C223.009 385.568 189.618 372.776 156.128 357.161C70.9849 317.465 -13.6964 254.895 3.12555 158.767C17.1432 78.6546 105.489 -2.06179 202.404 0.971876C235.924 2.0235 264.082 14.3935 288.667 31.9531C303.429 42.4933 317.473 58.8221 337.939 61.5357C359.525 64.3944 383.223 51.8705 402.843 44.2896C432.042 32.9955 462.787 21.237 494.433 20.3317C567.04 18.2504 582.705 69.0987 571.163 131.633C565.551 162.033 555.601 191.392 548.19 221.353C537.677 263.842 543.31 302.191 549.904 344.89C555.775 382.913 557.972 424.742 536.84 456.845C512.862 493.272 448.372 524.601 393.661 508.643Z"
                  fill="#D8D8D8"
                />
              </clipPath>
            </defs>
          </Box>
        </Box>
        <Markdown
          className="lead"
          fs={6}
          lh={3}
          css={{
            p: { fontSize: "inherit" },
          }}
          animate={animate}
          animations={useAnimations({
            transform: ["translateX(-200px)", "translateX(0px)"],
          })}
          mq={{
            lg: {
              min: {
                fs: 9,
                mw: "645px",
              },
            },
          }}
        >
          {lead}
        </Markdown>
        <Box
          animate={animate}
          animations={useAnimations({
            transform: ["translateY(100px)", "translateY(0px)"],
          })}
        >
          <CTAButton
            mt={6}
            mb={7}
            mq={{ md: { min: { mt: 8 } }, lg: { min: { mt: 10 } } }}
            href="/#contact"
          >
            {cta}
          </CTAButton>

          <p>{socialInfo}</p>
          <SocialLinks links={social} />
        </Box>
      </Box>
    </Section>
  );
}
