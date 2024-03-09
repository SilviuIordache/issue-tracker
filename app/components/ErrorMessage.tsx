import { Text } from '@radix-ui/themes';
import React, { PropsWithChildren } from 'react';
interface Props {
  error?: string;
}

const ErrorMessage = ({ error }: Props) => {
  if (!error) return null;
  return (
    <Text color="red" as="p">
      {error}
    </Text>
  );
};

export default ErrorMessage;
