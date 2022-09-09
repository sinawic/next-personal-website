import { Button } from "react-bootstrap";

export default function Layout({ onClick }: { onClick: () => void }) {
  return (
    <div className="containerr pb-5" style={{ zIndex: 1000 }}>
      <div className="position-fixed" style={{ bottom: '3rem' }}>
        <Button className="pt-2 rounded-circle" style={{ width: 50, height: 50 }} onClick={onClick}>
          <i className="fas fa-plus fs-3"></i>
        </Button>
      </div>
    </div>
  )
}