import Link from 'next/link';

export default function Header() {
  return (
    <header className="m-8">
      <nav className="flex justify-between text-3xl">
        <div className="logo font-extrabold">
          <Link href='/'>본오설비</Link>
        </div>
        <div className="nav flex gap-x-10 text-2xl">
          <div><Link href='/leak'>누수공사</Link></div>
          <div><Link href='/toilet'>변기통수</Link></div>
          <div><Link href='/water'>상하수도통수</Link></div>
          <div><Link href='/warm'>난방설비공사</Link></div>
        </div>
        <div className='empty_for_menubar'></div>
      </nav>
    </header>
  );
}