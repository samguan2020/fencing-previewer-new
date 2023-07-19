import UploadForm from "./Form";
import { currentUser } from "@clerk/nextjs";

export default async function UploadPage() {
  const user = await currentUser()

  return (
    <>
      <UploadForm authId={user!.id}></UploadForm>
    </>
  );
}
