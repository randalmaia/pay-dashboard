import Styles from "./styles";
import Image from "next/image";
import { CreditCardProps } from "./types";
import { FC } from "react";

const CreditCard: FC<CreditCardProps> = ({ card }: CreditCardProps) => (
  <Styles.CreditCard>
    <Styles.Front>
      <Styles.Chip>
        <Image src="/chip.png" alt="Chip" width="40px" height="28px"></Image>
      </Styles.Chip>

      <Styles.Sign>
        <Image src="/sign.png" alt="Sign" width="28px" height="35px"></Image>
      </Styles.Sign>

      <Styles.CardNumber>{card.cardNumber}</Styles.CardNumber>

      <Styles.CardHolderLabel>Card Holder</Styles.CardHolderLabel>
      <Styles.CardHolder>{card.cardHolder}</Styles.CardHolder>

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
        <span>{card.cardCSV}</span>
      </Styles.SecretBar>
    </Styles.Back>
  </Styles.CreditCard>
);

export default CreditCard;
