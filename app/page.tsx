import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/blog');
  return null;
}
