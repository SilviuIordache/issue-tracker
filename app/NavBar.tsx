'use client';

import { Box, Container, Flex, Text } from '@radix-ui/themes';
import classnames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiFillBug } from 'react-icons/ai';
import { useSession } from 'next-auth/react';

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify={'between'}>
          <Flex align={'center'} gap={'3'}>
            <Link href="/">
              <Flex align={'center'} gap={'2'}>
                <AiFillBug />
                <Text>Home</Text>
              </Flex>
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={classnames({
                      'text-zinc-900': currentPath === link.href,
                      'text-gray-500': currentPath !== link.href,
                      'hover:text-zinc-800 transition-colors': true,
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>

          <Box>
            {status === 'authenticated' ? (
              <Link href="/api/auth/signout">Log out</Link>
            ) : (
              <Link href="/api/auth/signin">Log in</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
