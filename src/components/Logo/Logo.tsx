import { Link } from 'react-router-dom';

import logo from '../../assets/icons/logo.svg';

type Props = {
  className?: string;
};

export const Logo: React.FC<Props> = ({ className = '' }) => (
  <Link to="/" className={className}>
    <img src={logo} alt="Nice gadgets" />
  </Link>
);
