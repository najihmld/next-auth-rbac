import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { Can } from '../../components/ui/can';
import { users } from '../../constants/users';

export default function UsersTable() {
  return (
    <div className='my-6 border p-2'>
      <div className='mb-2 font-bold'>Users list</div>
      <Can permission='users:access' fallback="You don't have permission">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Permissions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <pre>{JSON.stringify(user.permissions, null, 2)}</pre>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Can>
    </div>
  );
}
