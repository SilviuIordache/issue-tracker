'use client';

import { Container, Flex } from '@radix-ui/themes';
import NavLinks from './NavLinks';
import ProfileMenu from './ProfileMenu';
import HomeButton from './HomeButton';

const NavBar = () => {
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex justify={'between'}>
          <Flex align={'center'} gap={'3'}>
            <HomeButton />
            <NavLinks />
          </Flex>
          <ProfileMenu />
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
