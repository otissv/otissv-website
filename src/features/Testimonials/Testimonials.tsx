import React from "react";
import { Box } from "@redesign-system/react-ui/Box";
import ReactScrollTrigger from "react-scroll-trigger";

import { TestimonialsProps } from "./types.testimonials";
import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading";
import { Section } from "../../components/Section";
import { useAnimations } from "../../hooks/useAnimations";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const ScrollTrigger: any = ReactScrollTrigger;

export function Testimonials<Props extends TestimonialsProps>({
  className = "",
  testimonials = [],
}: Props): JSX.Element {
  const classNames = `Testimonials ${className}`;

  const { animate, onEnter } = useScrollTrigger();

  const animations = React.useCallback(function animations(start = 0) {
    return useAnimations({
      transform: [`translateX(${start}px)`, "translateX(0px)"],
    });
  }, []);

  return (
    <Section
      id="testimonials-section"
      className={classNames}
      centered
      mw="var(--container)"
      px={7}
      mq={{ xl: { min: { paddingLeft: 12, paddingRight: 12, mb: 4 } } }}
    >
      <ScrollTrigger onEnter={onEnter} onExit={onEnter} />

      <Heading
        fs={7}
        color="#fff"
        mb={9}
        animate={animate}
        animations={useAnimations({
          transform: [`translateX(-200px)`, "translateX(0px)"],
        })}
      >
        Testimonials
      </Heading>

      <Box
        mq={{
          lg: {
            min: {
              display: "flex",
            },
          },
        }}
      >
        {testimonials.map(
          ({ name, city, avatar, content }: any, index: number) => (
            <Card
              key={index}
              animate={animate}
              animations={animations((index + 1) * 100)}
              mb={8}
              mq={{
                lg: {
                  min: {
                    marginLeft: 6,
                    marginRight: 6,
                  },
                },
              }}
            >
              <svg
                width="45"
                height="37"
                viewBox="0 0 244 212"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="left quotes">
                  <path
                    id="Path"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M201.697 96.0782C195.564 94.2781 189.431 93.3648 183.466 93.3648C174.253 93.3648 166.566 95.511 160.605 98.1393C166.352 76.6927 180.156 39.6871 207.656 35.5197C210.202 35.1336 212.289 33.2563 212.984 30.7293L218.994 8.81403C219.501 6.96069 219.201 4.97686 218.164 3.3685C217.127 1.76014 215.46 0.687015 213.593 0.426056C211.563 0.143794 209.494 0 207.444 0C174.436 0 141.746 35.123 127.952 85.4135C119.855 114.918 117.48 159.276 137.426 187.196C148.587 202.818 164.87 211.161 185.824 211.995C185.91 211.997 185.994 212 186.08 212C211.934 212 234.86 194.249 241.834 168.838C246 153.646 244.117 137.715 236.526 123.966C229.017 110.372 216.649 100.464 201.697 96.0782Z"
                    fill="white"
                  />
                  <path
                    id="Path_2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M114.525 123.967C107.016 110.371 94.6476 100.463 79.6961 96.077C73.563 94.277 67.4299 93.3636 61.4666 93.3636C52.2538 93.3636 44.5639 95.5098 38.6032 98.138C44.3497 76.6917 58.1545 39.6866 85.6569 35.5193C88.2036 35.1332 90.288 33.2559 90.9855 30.7289L96.9958 8.81392C97.5025 6.9606 97.2022 4.9768 96.1652 3.36846C95.1308 1.76012 93.4643 0.687006 91.5941 0.42605C89.5671 0.143792 87.4984 0 85.4453 0C52.4367 0 19.7467 35.1225 5.9498 85.4124C-2.14498 114.916 -4.51934 159.274 15.429 187.199C26.5877 202.819 42.8739 211.164 63.8252 211.995C63.9114 211.997 63.995 212 64.0838 212C89.9354 212 112.864 194.25 119.838 168.838C123.999 153.647 122.113 137.713 114.525 123.967Z"
                    fill="white"
                  />
                </g>
              </svg>

              <Box mt={8} mb={6}>
                {content}
              </Box>

              <Box d="flex">
                <Box
                  as="img"
                  src={avatar}
                  radius="circle"
                  height="48px"
                  width="48px"
                  mr={3}
                  alt="avatar"
                />
                <div>
                  <span>{name}</span>
                  <br />
                  <span>{city}</span>
                </div>
              </Box>
            </Card>
          ),
        )}
      </Box>
    </Section>
  );
}
