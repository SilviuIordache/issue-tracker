import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import { Pagination } from './components';
import { Button } from '@radix-ui/themes';

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
      <div>Hello World</div>
    </>
  );
}
