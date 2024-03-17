import { Avatar, Box, DropdownMenu, Text } from '@radix-ui/themes';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const ProfileMenu = () => {
  const { status, data: session } = useSession();

  if (status === 'loading') return null;

  if (status === 'unauthenticated')
    return <Link href="/api/auth/signin">Log in</Link>;

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session.user.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer hover:border-black border-2 border-transparent"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Label>
            <Text size="2">{session.user.email!}</Text>
          </DropdownMenu.Label>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout" className="nav-link">
              Log out
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default ProfileMenu;
