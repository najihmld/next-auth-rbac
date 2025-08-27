export default function DashboardPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Dashboard</h1>
      <p>
        Only <span className='text-red-500'>admin, editor, guest</span> can
        access this page.
      </p>
    </main>
  );
}
