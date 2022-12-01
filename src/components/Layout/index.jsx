import Navbar from '../Navbar';
import './styles.css';

const Layout = ({ nickName, avatarUrl, id, children }) => {
  return (
    <div className="cnLayoutRoot">
      <Navbar nickName={nickName} id={id} avatarUrl={avatarUrl} />
      <div className="cnLayoutBody">{children}</div>
    </div>
  );
};

export default Layout;
