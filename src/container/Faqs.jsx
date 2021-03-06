import React from 'react';
import {Accordion} from '../Components/Acordion/Accordion';
import {OptForm} from '../Components/OptForm/OptForm';
import faqsData from '../fixtures/faqs.json';


export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key = {item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Input placeholder = "Email address" />
        <OptForm.Button>Get Started</OptForm.Button>
        <OptForm.Break />
        <OptForm.Text>
            Ready to watch? Enter you email to create or restart your membership
        </OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
