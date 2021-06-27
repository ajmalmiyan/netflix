import {
  Container,
  Row,
  Column,
  Text,
  Title,
  Break,
  Link,
  Select
} from "../../Styles/Footer/Footer";

function Footer() {
  return (
    <Container>
      <Title>Questions? Contact us!</Title>
      <Break />
      <Row>
        <Column>
          <Link href="#">FAQ</Link>
          <Link href="#">Investor Relations</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">Speed Test</Link>
        </Column>
        <Column>
          <Link href="#">Help Centre</Link>
          <Link href="#">Jobs</Link>
          <Link href="#">Cookie Preferences</Link>
          <Link href="#">Legal Notices</Link>
        </Column>
        <Column>
          <Link href="#">Account</Link>
          <Link href="#">Ways to Watch</Link>
          <Link href="#">Corporate Information</Link>
          <Link href="#">Netflix Originals</Link>
        </Column>
        <Column>
          <Link href="#">Media Centre</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Contact Us</Link>
        </Column>
      </Row>
      <Break/>
      <Select value="Language">
            <option>English</option>
            <option>Hindi</option>
          </Select>
          <Text>Netflix India</Text>
    </Container>
  );
}

export default Footer;
