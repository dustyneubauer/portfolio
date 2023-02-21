import React from 'react';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';

const SERVICE_ID = "service_bp46xxe";
const TEMPLATE_ID = "template_z5h3cd6";
const USER_ID = "zNpTYXSL0BNcFs27f";


export const EmailForm = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
      };

    return (
        <div className='email-form'>
            <Form onSubmit={handleOnSubmit}>
            <Form.Field
                 id='form-input-control-email'
                control={Input}
                name='user_email'
                placeholder='Email(Required)'
                required
                icon='mail'
                iconPosition='left'
             />
             <Form.Field
                id='form-input-control-last-name'
                control={Input}
                name='user_name'
                placeholder='Name(Required)'
                required
                icon='user circle'
                iconPosition='left'
            />
               <Form.Field
                 id='form-input-control-subject'
                control={Input}
                name='user_subject'
                placeholder='Subject(Required)'
                required
             />
            <Form.Field
                 id='form-textarea-control-opinion'
                 control={TextArea}
                 name='user_message'
                placeholder='Message(Required)'
                 required
            />
        <Button type='submit'>Send Your Email</Button>
            </Form>
        </div>    
    )
}
