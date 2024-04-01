import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import { Pagination } from './components';
import { Button } from '@radix-ui/themes';
import LatestIssues from './LatestIssues';

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <>
      <LatestIssues/>
    </>
  );
}
