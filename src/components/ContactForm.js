import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const ContactForm = () => (



  <Form>
    <Form.Field width={16}>
      <label>Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field width={16}>
      <label>Email</label>
      <input placeholder='Email' />
    </Form.Field>
    <Form.Field width={16}>
      <label>Message</label>
      <input placeholder='Message' />
    </Form.Field>
    <Button className="nav_item_button" type='submit'>Submit</Button>
  </Form>
)

export default ContactForm
