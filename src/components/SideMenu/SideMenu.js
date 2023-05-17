import { Menu, Image } from "antd";
import { HomeOutlined, AppstoreOutlined, ShopOutlined, DropboxOutlined, ShoppingOutlined } from "@ant-design/icons";
import Logo from '../../assets/logo.svg' 
import { useNavigate } from "react-router-dom";
import "./SideMenu.css"


const SideMenu = () => {
  const navigate = useNavigate()
  return (
    <div className='SideMenu'>

      <Image className="logo" src={Logo}></Image>
      <Menu style={{backgroundColor: "transparent"}} className="Menu"
      onClick={(item) => {
        //item.key
        navigate(item.key);
      }}
      
      items={[
        {
          label: "Home",
          icon: <HomeOutlined />,
          key: '/',
        },
        {
          label: "Marketplace",
          icon:  <ShopOutlined />,
          key: '/marketplace',
        },
        {
          label: "Activities",
          icon: <AppstoreOutlined />,
          key: '/activities',
        },
        {
          label: "Portfolio",
          icon: <ShoppingOutlined />,
          key: '/portfolio',
        },
        {
          label: "More",
          icon: <DropboxOutlined />,
          key: '/more',
        }
      ]}>

      </Menu>
    </div>
  )
}

export default SideMenu