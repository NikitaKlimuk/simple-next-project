import { auth } from "@/configs/auth";

export default async function Profile() {
  const session = await auth();
  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
    </div>
  );
}
