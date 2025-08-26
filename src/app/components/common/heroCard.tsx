import Link from 'next/link';
import BowSvg from '../../images/BowSvg';

interface HereCardProps {
  href: string;
  imgUrl: string;
  text: string;
  pink?: boolean;
}

const HeroCard = ({ href, imgUrl, text, pink = false }: HereCardProps) => (
  <Link href={href}>
    <div className="w-[360px] mx-10 text-center text-2xl font-medium">
      <div
        className={`${
          pink ? 'hue-rotate-300' : 'hue-rotate-160'
        } saturate-60 contrast-95 opacity-80`}
      >
        <img className="sepia" alt="" src={imgUrl} width={360} height={360} />
      </div>

      <BowSvg className="m-auto scale-y-70 fill-sky-900" width={300} />

      <div className="text-center">{text}</div>
    </div>
  </Link>
);

export default HeroCard;
