import Image from 'next/image';

export function Header() {
  return (
    <header>
      <Image src="/images/logo.svg" alt="Logo" width={100} height={50} />
      <nav>
        {}
      </nav>
    </header>
  );
}