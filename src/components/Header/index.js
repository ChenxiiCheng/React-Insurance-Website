import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Popover, Menu, Dropdown, Button } from 'antd';
import { Icon, message } from 'antd';
import HomeLogo from '../../utils/imgs/insu4.png';
import AutoLogo from '../../utils/imgs/auto2.png';

import './style.scss';

export const Header = (props) => {
  const onClick = ({ key }) => {
    if (key === 'home') {
      message.info('Home Insurance Page', 0.4);
    } else {
      message.info('Auto Insurance Page', 0.4);
    }
  };

  const content = (
    <Menu onClick={onClick}>
      <Menu.Item key="home">
        <Link to="/">Home Insurance</Link>
      </Menu.Item>
      <Menu.Item key="auto">
        <Link to="/auto">Auto Insurance</Link>
      </Menu.Item>
    </Menu>
  );

  const contact = (
    <div>
      <p>Phone: 111-111-1111</p>
      <p>Email: contact-us@wds.com</p>
      <p>Weibo: We_Do_Secure_Official</p>
      <p>Twitter: We_Do_Secure_Official</p>
      <p>Instagram: We_Do_Secure_Official</p>
    </div>
  );

  const menu = (
    <Menu
      onClick={(p) => {
        if (p.key === 'team') {
          message.info('You clicked Team item');
        } else if (p.key === 'careers') {
          message.info('You clicked Careers item');
        } else {
          message.info('You clicked FAQs item');
        }
      }}
    >
      <Menu.Item key="team">Team</Menu.Item>
      <Menu.Item key="careers">Careers</Menu.Item>
      <Menu.Item key="faqs">FAQs</Menu.Item>
    </Menu>
  );

  return (
    <Fragment>
      <div className="header-wrapper">
        {/* 导航栏左侧 */}
        <div className="header-left-side">
          {props.logo === 'home' ? (
            <img src={HomeLogo} alt="home logo" />
          ) : (
            <img src={AutoLogo} alt="auto logo" />
          )}
          <Dropdown overlay={content}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Compare Insurance Types <Icon type="down" />
            </a>
          </Dropdown>
        </div>

        {/* 导航栏右侧 */}
        <div className="header-right-side">
          <span>Why us? </span>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              About Us <Icon type="down" />
            </a>
          </Dropdown>

          <Popover content={contact}>Contact Us</Popover>

          <a href="http://172.81.242.65:3000">
            <Button className="button-signup">Login ?</Button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
