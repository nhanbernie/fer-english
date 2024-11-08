import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/SalaryAndFee.scss";
import Table from "../components/Table";

const SalaryAndFee = () => {
  return (
    <Container className="mt-5">
      <Table />
    </Container>
  );
};

export default SalaryAndFee;
