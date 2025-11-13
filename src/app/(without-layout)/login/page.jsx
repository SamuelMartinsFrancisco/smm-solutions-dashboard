'use client'

import Form from '../../../components/Form';
import Input from '../../../components/Input';
import Label from '../../../components/Label';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


export default function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const onLogin = () => {
    window.alert('OK!');
    router.push('/courses')
  }

  return (
    <div className='flex flex-col h-[100vh]'>
      <Header 
        title='SMM Solutions'
        subtitle='Página de Login'
        titleClasses='pt-4'
        subtitleClasses='text-gray-600'
      />
      <div className='bg-linear-to-tr from-cyan-900 to-cyan-950 w-full grow-1'>
        <Form className='min-w-60 w-[20%] m-auto mt-[10%] p-7' onSubmit={onLogin}>
          <div>
            <Label 
              text='Email'
              htmlFor='email-field'
            />
            <Input
              type='email'
              id='email-field'
              className='mb-4'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <Label 
              text='Senha'
              htmlFor='password-field'
            />
            <Input
              type='password'
              id='password-field'
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <Button 
            type='submit'
            label='Entrar'
            className='hover:bg-cyan-700 bg-cyan-800 w-17 text-white font-bold ml-auto mr-auto mt-2'
          />
        </Form>
      </div>
    </div>
  )
}