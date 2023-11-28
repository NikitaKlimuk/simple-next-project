import { auth, signIn } from "@/configs/auth";

export default async function Profile() {
  const session = await auth();
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button className="border p-4">Sign in with Google</button>
      </form>
    </div>
  );
}
