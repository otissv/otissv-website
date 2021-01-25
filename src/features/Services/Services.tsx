import React, { Fragment } from "react";
import { Box } from "@redesign-system/react-ui/Box";

import { ServiceProps } from "./types.services";
import { Section } from "../../components/Section";
import { Card } from "../../components/Card";
import { Heading } from "../../components/Heading";
import { Lead } from "../../components/Lead";
import { ScrollTrigger } from "../../components/ScrollTrigger";
import { useAnimations } from "../../hooks/useAnimations";
import { useScrollTrigger } from "../../hooks/useScrollTrigger";

const cardMediaQuery = {
  md: {
    min: { width: "43%" },
  },
  lg: {
    min: { width: "28%" },
  },
};

export function Services<Props extends ServiceProps>({
  className = "",
  services = [],
}: Props): JSX.Element {
  const classNames = `Services ${className}`;
  const { animate: animateLead, onEnter: onLeadEnter } = useScrollTrigger();

  return (
    <Section
      id="services"
      className={classNames}
      centered
      mb={11}
      mw="var(--container)"
      mq={{ xl: { min: { paddingLeft: 12, paddingRight: 12, mb: 12 } } }}
    >
      <Heading
        px={7}
        animate={animateLead}
        animations={useAnimations({
          transform: ["translateX(-100px)", "translateX(0px)"],
          opacity: [0.2, 1, 100, { duration: 2000 }],
        })}
      >
        Services
      </Heading>
      <ScrollTrigger onEnter={onLeadEnter} onExit={onLeadEnter} />

      <Box
        d="flex"
        flw="wrap"
        ac="center"
        mq={{
          lg: {
            min: {
              justifyContent: "flex-end",
            },
          },
        }}
      >
        {/* Lead */}
        <Card
          bg="none"
          elevate={0}
          left="-24px"
          whiteSpace="nowrap"
          mq={cardMediaQuery}
          m={6}
        >
          <Lead>
            <Box
              as="span"
              d="block"
              css=""
              animate={animateLead}
              animations={useAnimations({
                transform: ["translateX(-100px)", "translateX(0px)"],
                opacity: [0.2, 1, 100, { duration: 2000 }],
              })}
            >
              Design. <br />
            </Box>
            <Box
              as="span"
              d="block"
              animate={animateLead}
              animations={useAnimations({
                transform: ["translateX(-200px)", "translateX(0px)"],
                opacity: [0.2, 1, 100],
              })}
            >
              Develop.
              <br />
            </Box>
            <Box
              as="span"
              d="block"
              animate={animateLead}
              animations={useAnimations({
                transform: ["translateX(-300px)", "translateX(0px)"],
                opacity: [0.2, 1, 100],
              })}
            >
              Ship.
            </Box>
          </Lead>
        </Card>

        {/* Services */}
        <ServiceCard
          animations={useAnimations({
            transform: ["translateY(200px)", "translateY(0px)"],
            opacity: [0.5, 1, 100, { duration: 2000 }],
          })}
        >
          <p>{services[0].content}</p>
        </ServiceCard>

        <ServiceCard
          animations={useAnimations({
            transform: ["translateX(300px)", "translateX(0px)"],
            opacity: [0.5, 1, 100, { duration: 2000 }],
          })}
        >
          <p>{services[1].content}</p>
        </ServiceCard>

        <ServiceCard
          animations={useAnimations({
            transform: ["translateX(-300px)", "translateX(0px)"],
            opacity: [0.5, 1, 100, { duration: 2000 }],
          })}
        >
          <p>{services[2].content}</p>
        </ServiceCard>

        <ServiceCard
          animations={useAnimations({
            transform: ["translateY(100px)", "translateY(0px)"],
            opacity: [0.5, 1, 100, { duration: 2000 }],
          })}
        >
          <p>{services[3].content}</p>
        </ServiceCard>

        <ServiceCard
          animations={useAnimations({
            transform: ["translateX(300px)", "translateX(0px)"],
            opacity: [0.5, 1, 100, { duration: 2000 }],
          })}
        >
          <p>{services[4].content}</p>
        </ServiceCard>
      </Box>
    </Section>
  );
}

function ServiceCard({ children, animations, ...propsRest }: any) {
  const { animate, onEnter } = useScrollTrigger();

  return (
    <Fragment>
      <ScrollTrigger
        onEnter={onEnter}
        onExit={onEnter}
        style={{ position: "absolute", top: "100%" }}
      />
      <Card
        {...propsRest}
        m={6}
        py={10}
        animate={animate}
        animations={animations}
        w="100%"
        mq={cardMediaQuery}
      >
        {children}
      </Card>
    </Fragment>
  );
}
