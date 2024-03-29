'use client';
import { Status } from '@prisma/client';
import { Select } from '@radix-ui/themes';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const statuses: { label: string; value?: Status }[] = [
  { label: 'All' },
  { label: 'Open', value: 'OPEN' },
  { label: 'In Progress', value: 'IN_PROGRESS' },
  { label: 'Closed', value: 'CLOSED' },
];

const IssueStatusFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleFilterChange = (status: Status | '') => {
    const params = new URLSearchParams(searchParams.toString());

    // Set or replace the status parameter
    if (status) {
      params.set('status', status);
    } else {
      // If status is empty and you want to remove it from the query
      params.delete('status');
    }

    // Ensure 'orderBy' is preserved if it exists, without appending it again
    const orderBy = searchParams.get('orderBy');
    if (orderBy) {
      params.set('orderBy', orderBy);
    }

    // Construct the query string
    const query = params.toString() ? `?${params.toString()}` : '';

    router.push(`/issues${query}`);
  };

  return (
    <Select.Root
      defaultValue={searchParams.get('status') || '  '}
      onValueChange={handleFilterChange}
    >
      <Select.Trigger>
        <Select.Label>Fitler by status... </Select.Label>
      </Select.Trigger>
      <Select.Content>
        {statuses.map((status, index) => (
          <Select.Item key={index} value={status.value || ''}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
