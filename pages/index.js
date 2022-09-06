import Image from "next/image";

export default function Home() {
  return (
    <>
      <h1>Fische Shop</h1>
      <Image
        alt=""
        src="https://unsplash.com/photos/9y7y26C-l4Y/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5MjcwNjYw&force=true&w=2400"
        layout="responsive"
        width={2400}
        height={1599}
      />
    </>
  );
}
