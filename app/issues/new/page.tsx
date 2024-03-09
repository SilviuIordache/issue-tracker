'use client';

import { Button, Callout, Text, TextArea, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';

type IssueForm = z.infer<typeof createIssueSchema>;

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const [error, setError] = useState('');

  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error) {
      console.log(error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register('title')} />
        </TextField.Root>
        <ErrorMessage error={errors.title?.message} />

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage error={errors.description?.message} />

        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;
