import styled from "styled-components";

function App() {
  const onCLickEvent = () => {
    console.log("Clicked!!"); 
    

  };

  return (
    <Layout>
      <div
        onClick={() => {
          onCLickEvent();
        }}
        style={{width:'281px', height:'88px'}}
      >
        <img src="https://static.univstore.com/web/image/logo.png" />
      </div>
      <div>
      검색
      </div>
      <div>
      로그인
      </div>
    </Layout>
  );
}

export default App;

const Layout = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const StyledInput = styled.input``;