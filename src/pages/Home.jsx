import React from 'react';
import {Feature} from '../Components/Feature/Feature';
import {OptForm} from '../Components/OptForm/OptForm'
import {FaqsContainer} from '../container/Faqs';
import {FooterContainer} from '../container/Footer';
import {HeaderContainer} from '../container/Header';
import {JumbotronContainer} from '../container/Jumbotron';
export function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films, TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
          Watch anywhere. Cancel anytime.
          </Feature.SubTitle>
          <OptForm.Text>
            Ready to watch? Enter you email to create or restart your membership
            </OptForm.Text>
            {/* <OptForm.Break /> */}
          <OptForm>
            <OptForm.Input placeholder = "Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
            
            
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
