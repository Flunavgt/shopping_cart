import { useNavigate } from 'react-router-dom';

const CrelosaMainPage = () => {
  const navigate = useNavigate();

  const ChangePage = () => {
    navigate('/main');
  };

  return (
    <>
      <h1>Main page here for CRELOSA</h1>
      <button type="button" onClick={ChangePage}>STORE</button>
    </>
  );
};

export default CrelosaMainPage;
