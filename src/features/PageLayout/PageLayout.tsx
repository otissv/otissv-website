import React from "react";
import { Main } from "@redesign-system/react-ui/Main";

import { Layout } from "../../components/Layout";
import { Menu } from "../../components/Menu";
import { Footer, FooterColumn } from "../../components/Footer";
import { SocialLinks } from "../../components/SocialLinks";
import { Subscribe } from "../Subscribe";

export function PageLayout({
  children,
  className = "",
  site,
  menu,
  company,
  social,
  subscribe,
  page: {
    location: { pathname, hash },
  },
  ...propsRest
}: Record<string, any>): JSX.Element {
  const classNames = `PageLayout ${className}`;

  return (
    <Layout className={classNames} site={site} jc="center" pt={6}>
      <Menu
        centered
        items={menu}
        currentRoute={`${pathname}${hash}`}
        mw="var(--container)"
        mt={2}
        px={7}
        mq={{
          xl: {
            min: {
              paddingLeft: 12,
              paddingRight: 12,
            },
          },
        }}
      />
      <Main {...propsRest}>{children}</Main>
      <Subscribe
        title={subscribe.title}
        content={subscribe.content}
        info={subscribe.form.info}
        inputLabel={subscribe.form.input.label}
        inputId={subscribe.form.input.id}
        inputPlaceholder={subscribe.form.input.placeholder}
        buttonLabel={subscribe.form.button.label}
      />
      <Footer>
        <FooterColumn>
          {company.name}
          <br />
          {company.email}
          <br />
          <a href={`tel:${company.telephone}`}>{company.telephone}</a>
          <br />
        </FooterColumn>
        <FooterColumn>
          {(company.address || []).join(",")}
          <SocialLinks links={social} />
        </FooterColumn>
      </Footer>
    </Layout>
  );
}
