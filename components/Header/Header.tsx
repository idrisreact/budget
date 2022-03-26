import { ReactNode, FC, useRef, useEffect } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { Wrapper } from '../../styles/utils/utils';

interface IProps {
  children: ReactNode;
}
const Header: FC<IProps> = ({ children }) => {
  const HeaderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (HeaderRef !== null) {
      // if (HeaderRef.current?.getBoundingClientRect())
      if (window.scrollY > 60) {
        if (HeaderRef.current?.style) {
          HeaderRef.current.style.backgroundColor = '#000';
          HeaderRef.current.style.color = '#fff';
        }
      } else {
        if (HeaderRef.current?.style) {
          HeaderRef.current.style.backgroundColor = '#fff';
          HeaderRef.current.style.color = '#000';
        }
      }
    }
  };
  return (
    <>
      <PageLayout>
        <HeaderWrapper ref={HeaderRef}>
          <InnerHeaderWrapper>
            <p>Welcome, Idris</p>
            <SubMenu>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/budget">
                <a>Budget</a>
              </Link>
            </SubMenu>
          </InnerHeaderWrapper>
        </HeaderWrapper>

        <Page>{children}</Page>
      </PageLayout>
    </>
  );
};

export default Header;

const PageLayout = styled.div``;

const Page = styled.div`
  margin-top: 55px;
`;

const InnerHeaderWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const SubMenu = styled.div`
  display: flex;

  & > * {
    margin-left: 5px;
  }
`;

const HeaderWrapper = styled.header`
  height: 52px;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #fff;
  /* background-color: red; */
`;
