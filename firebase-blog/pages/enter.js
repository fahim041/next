export default function EnterPage() {
  const user = null;
  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <SignOutButton />
        )
      ) : (
        <SignInButton />
      )}
    </main>
  );
}

function SignInButton() {}

function SignOutButton() {}

function UsernameForm() {}
