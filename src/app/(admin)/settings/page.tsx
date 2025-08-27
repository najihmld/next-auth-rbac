export default function AdminPage() {
  return (
    <main style={{ padding: 20 }}>
      <h1>Settings</h1>
      <p>
        Only <span className='text-red-500'>admin</span> can access this page.
      </p>
    </main>
  );
}
