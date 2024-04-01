import { DoubleArrowLeftIcon } from '@radix-ui/react-icons';
import { Pagination } from './components';
import { Button, Flex } from '@radix-ui/themes';
import LatestIssues from './LatestIssues';
import IssueSummary from './IssueSummary';
import prisma from '@/prisma/client';

export default async function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const open = await prisma.issue.count({ where: { status: 'OPEN' } });
  const inProgress = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' },
  });
  const closed = await prisma.issue.count({ where: { status: 'CLOSED' } });

  return (
    <Flex>
      <IssueSummary open={open} closed={inProgress} inProgress={closed} />
      {/* <LatestIssues /> */}
    </Flex>
  );
}
