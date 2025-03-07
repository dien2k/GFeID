import { ModelsWarrantyClaim } from '@/@types/api.type';

export const data: ModelsWarrantyClaim[] = [
  {
    id: 1,
    service_job_card_id: 1,
    status: 'pending',
    claim_date: '2024-01-15',
    comments: 'This is a test comment',
    created_at: '2024-01-15',
    created_by_id: 1,
    update_by_id: 1,
    updated_at: '2024-01-15',
    items: [],
  },
  {
    id: 2,
    service_job_card_id: 2,
    status: 'pending',
    claim_date: '2024-01-17',
    comments: 'This is a test comment',
    created_at: '2024-01-17',
    created_by_id: 1,
    update_by_id: 1,
    updated_at: '2024-01-17',
    items: [],
  },
];
