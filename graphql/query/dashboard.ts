import { gql } from "@apollo/client";

const Dashboard = gql`
  query Dashboard {
    user(id: "hPKjCePFjf") {
      username
      image
    }
    card(id: "K1k5wDGcHF") {
      cardHolder
      cardNumber
    }
    payments {
      edges {
        node {
          description
          value
          type
        }
      }
    }
    transactions {
      edges {
        node {
          description
          value
          type
          date
        }
      }
    }
    savings {
      edges {
        node {
          saved
          date
        }
      }
    }
  }
`;

export default Dashboard;
