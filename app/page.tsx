import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import { Pagination } from './components';
import { Button } from '@radix-ui/themes';

export default function Home() {
  return (
    <>
      <Pagination itemCount={100} pageSize={10} currentPage={10} />
      <div>Hello World</div>
    </>
  );
}
