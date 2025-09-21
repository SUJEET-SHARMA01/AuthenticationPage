export default function ProfilePage({ params }: any) {
  return (
    <div className="flex flex-col justify-center text-center min-h-screen">
      <h1>Profile page</h1>
      <p className="text-5xl">
        Profile page
        <span className=" bg-orange-500 rounded ml-2 p-2">
          {params.id}
        </span>
      </p>
    </div>
  );
}
