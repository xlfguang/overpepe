import Container from "./Container";
import PieChart from "./PieChart";
import {
  CardBox,
  FlexBox,
  HowToBuyCardText,
  HowToBuyCardTitle,
  MediaBox,
  Title,
} from "./style";

function Tokenomics() {
  return (
    <div id="tokenomics">
      <Container>
        <FlexBox direction="column">
          <Title>TOKENOMICS</Title>
          <FlexBox>
            <MediaBox>
              <FlexBox
                direction="column"
                style={{
                  width: "100%",
                }}
              >
                <HowToBuyCardTitle>Token Supply:</HowToBuyCardTitle>
                <HowToBuyCardTitle>100000000000</HowToBuyCardTitle>
                <CardBox
                  style={{
                    padding: "20px",
                  }}
                >
                  <HowToBuyCardText>
                    1% Taxes, No Bullshit. It’s that simple.
                  </HowToBuyCardText>
                  <HowToBuyCardText>
                    Adopting the latest Pinksale presale mechanism, with 5%
                    token airdrop, 5% of tokens allocated for listing, 50% added
                    to liquidity, and the remaining 50% will be automatically
                    repurchased and burned
                  </HowToBuyCardText>
                </CardBox>
              </FlexBox>
            </MediaBox>
            <MediaBox>
              <PieChart
                data={[
                  { value: 60, name: "Presale" },
                  { value: 30, name: "Liquidity" },
                  { value: 5, name: "Airdrop" },
                  { value: 5, name: "Cex Listing" },
                ]}
                style={{ height: "500px", width: "100%" }}
              ></PieChart>
            </MediaBox>
          </FlexBox>
        </FlexBox>
      </Container>
    </div>
  );
}

export default Tokenomics;
