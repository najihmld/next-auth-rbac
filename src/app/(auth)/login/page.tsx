'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLoginMutation } from '@/features/auth/api/use-login';
import { useAuthStore } from '@/stores/use-auth-store';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@mail.com');
  const [password, setPassword] = useState('123');

  const loginMutation = useLoginMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          useAuthStore.setState({ user: data.user });
          router.replace('/dashboard');
        },
        onError: (err) => {
          alert(err.message);
        },
      }
    );
  };

  return (
    <main className='flex h-screen w-full items-center justify-center bg-gray-100'>
      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant='link'>Sign Up</Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  defaultValue={email}
                />
              </div>
              <div className='grid gap-2'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                  <a
                    href='#'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id='password'
                  type='password'
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  defaultValue={password}
                />
              </div>

              <Button type='submit' className='w-full'>
                Login
              </Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex-col gap-2'>
          <div className='w-full rounded-sm bg-red-200 p-3 text-left text-xs'>
            Email: <br />
            admin@mail.com <br />
            editor@mail.com <br />
            guest@mail.com
            <br />
            <br />
            Passowrd: 123
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
