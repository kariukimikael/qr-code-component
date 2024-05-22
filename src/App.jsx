import code from './assets/images/image-qr-code.png';

const CardComponent = () => {
  return <div className="card">
    <img src={code} alt="qr-code" className="card-img-top" />
    <div className="card-body">
      <h1 className="card-title">Improve your front-end skills by building projects</h1>
      <p className="card-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.</p>
    </div>
  </div>
}
function App() {
  return (
    <>
      <CardComponent />
    </>
  )
}

export default App
