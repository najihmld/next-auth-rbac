'use client';

import { Button } from '../../../components/ui/button';
import { Can } from '../../../components/ui/can';
import UsersTable from '../../../features/admin/users-table';

export default function DashboardPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>
        Only <span className='text-red-500'>admin, editor, guest</span> can
        access this page.
      </p>

      <div className='mt-8'>
        <section>
          <div className='flex gap-3'>
            <Can
              permission='users:edit'
              disableInstead
              showTooltip='You need admin/editor role'
            >
              <Button onClick={() => alert('clicked')}>Edit User</Button>
            </Can>
            <Can
              permission='users:delete'
              disableInstead
              showTooltip='You need admin role'
            >
              <Button onClick={() => alert('clicked')} variant={'destructive'}>
                Delete User
              </Button>
            </Can>
          </div>

          <UsersTable />
        </section>
      </div>
    </main>
  );
}
