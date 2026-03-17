import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  const isAdmin = true;
  const message = "JSX 완전 정복 실습 예제";

  // side effect 코드를 작성!!!
  //document.getElementById("root");

  return (
    <> 
      <Header title={message} />
      <Main isAdmin={isAdmin} />      
      <Footer />
    </>
  );
}

export default App;
