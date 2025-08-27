import UsersTable from '../../../features/admin/users-table';

export default function UsersPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Users</h1>
      <p>
        Only <span className='text-red-500'>admin, editor</span> can access this
        page.
      </p>
      <div className='mb-8'></div>

      <UsersTable />
    </main>
  );
}
