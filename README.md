# NextAuth Session Issue in API Route

This repository demonstrates a common issue encountered when using NextAuth.js for authentication within API routes. The problem is that the `unstable_getServerSession` function fails to retrieve the session, resulting in a 401 Unauthorized error even after a successful login.  This example shows the problem and provides a solution.

## Problem

The provided `bug.js` file contains an API route that attempts to retrieve the user's session using `unstable_getServerSession`.  Despite a successful login, the session is often null, leading to the unauthorized error.

## Solution

The solution, demonstrated in `bugSolution.js`, involves ensuring the correct setup and usage of `unstable_getServerSession` within the Next.js API route. The solution ensures that the session is properly retrieved and handled.