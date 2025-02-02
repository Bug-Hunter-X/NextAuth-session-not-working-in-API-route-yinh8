```javascript
import {unstable_getServerSession} from 'next-auth';
import {authOptions} from './api/auth/[...nextauth]'; // corrected path

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Access session data
  const { user } = session;
  console.log('Session:', session, user);
  res.status(200).json({ message: 'Success', session });
}
```