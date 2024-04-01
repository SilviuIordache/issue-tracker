import { Flex } from '@radix-ui/themes';
import LatestIssues from './LatestIssues';
import IssueSummary from './IssueSummary';
import prisma from '@/prisma/client';
import IssueChart from './IssueChart';

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
      <IssueChart open={open} closed={inProgress} inProgress={closed} />
      {/* <IssueSummary open={open} closed={inProgress} inProgress={closed} /> */}
      {/* <LatestIssues /> */}
    </Flex>
  );
}
