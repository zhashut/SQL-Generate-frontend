import {
  BugOutlined,
  GithubOutlined,
  SketchOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';
import './index.less';

/**
 * 全局 Footer
 *
 * @author https://github.com/zhashut
 */
const GlobalFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      className="default-footer"
      copyright={`${currentYear} 炸薯条`}
      links={[
        {
          key: 'master',
          title: (
            <>
              <UserOutlined /> 站长：zhashut
            </>
          ),
          href: 'https://space.bilibili.com/395185087',
          blankTarget: true,
        },
        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> 代码已开源
            </>
          ),
          href: 'https://github.com/zhashut',
          blankTarget: true,
        },
        {
          key: 'feedback',
          title: (
            <>
              <BugOutlined /> 建议反馈
            </>
          ),
          href: 'https://support.qq.com/product/596724',
          blankTarget: true,
        },
        {
          title: (
            <>
                <a>粤ICP备2024356243号-1</a>
            </>
          ),
          href: 'https://beian.miit.gov.cn/#/Integrated/recordQuery',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default GlobalFooter;
