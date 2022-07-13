import Link from 'next/link';

interface INavLink{
  to :string
  text:string
  children?:any
  className?:string |any
  title?:string|any
  newtab?:boolean
  icon?:any
  hidden?:boolean
}

export default function NavLink({
  to,
  text,
  children,
  className,
  title,
  newtab,
  icon,
  hidden,
}:INavLink) {
  if (hidden) return null;
  if (newtab) {
    return (
      <Link href={to ? to : '/'}>
        <a
          className={className}
          title={title ? title : text ? text : ''}
          target='_blank'
          rel='noopener noreferrer'
        >
          {icon}
          {!!text && <span>{text}</span>}
          {children}
        </a>
      </Link>
    );
  }
  return (
    <Link
      href={to ? to : '/'}
    >
      <a className={'link '+className} title={title ? title : text ? text : ''} href={to ? to : '/'}>
        {icon}
        {!!text && <span>{text}</span>}
        {children}
      </a>
    </Link>
  );
}
