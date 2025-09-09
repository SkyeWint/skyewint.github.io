import { blue } from '@/app/utils/colors';
import Link from 'next/link';

const Footer = () => (
  <div className={`${blue} text-center flex justify-center gap-8 p-4`}>
    <Link href="/tos">
      <u>Terms of Service</u>
    </Link>
    <Link href="/privacy">
      <u>Privacy Policy</u>
    </Link>
  </div>
);

export default Footer;
