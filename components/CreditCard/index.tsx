import Styles from "./styles";
import Image from "next/image";

const CreditCard = () => (
  <Styles.CreditCard>
    <Styles.Front>
      <Styles.Chip>
        <Image src="/chip.png" alt="Chip" width="40px" height="28px"></Image>
      </Styles.Chip>

      <Styles.Sign>
        <Image src="/sign.png" alt="Chip" width="28px" height="35px"></Image>
      </Styles.Sign>

      <Styles.CardNumber>4543 3434 3223 3213</Styles.CardNumber>

      <Styles.CardHolderLabel>Card Holder</Styles.CardHolderLabel>
      <Styles.CardHolder>Ghulam Rasool</Styles.CardHolder>

      <Styles.CardBrand>
        <Image
          src="/mastercard.png"
          alt="Mastercard Brand"
          width="58px"
          height="38px"
        ></Image>
      </Styles.CardBrand>
      <Styles.CardBrandText>Mastercard</Styles.CardBrandText>
    </Styles.Front>
    <Styles.Back>
      <Styles.BlackBar>a</Styles.BlackBar>
      <Styles.SecretBar>
        <span>434</span>
      </Styles.SecretBar>
    </Styles.Back>
  </Styles.CreditCard>
);

export default CreditCard;
