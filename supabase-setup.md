# Supabase setup

1. Create a Supabase project.
2. Open the SQL Editor and run `supabase-schema.sql`.
3. In Authentication, enable Google and Email providers.
4. In Authentication > URL Configuration, set the Site URL to `https://workout.uitenbroek.com`.
5. Add `https://workout.uitenbroek.com/**` and the exact local URL `http://localhost:8000/` to the Redirect URLs.
6. For Google login, add the Supabase callback URL shown in the Google provider settings to your Google OAuth client's authorized redirect URIs.
7. Copy the project URL and the public anon key into `supabase-config.js`.
8. Never add a service-role key to this repository or frontend code.

The first hosted release uses the `workout_data` table as one user-owned hybrid document. The existing Google Drive JSON remains the migration source and can remain the manual backup.
