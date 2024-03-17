import { Flex, Text } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';

const HomeButton = () => {
  return (
    <Link href="/">
      <Flex align={'center'} gap={'2'}>
        <AiFillBug />
        <Text>Home</Text>
      </Flex>
    </Link>
  );
};

export default HomeButton;
