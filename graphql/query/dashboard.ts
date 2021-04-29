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
      cardCSV
    }
    payments(first: 2) {
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
          id
          description
          value
          type
          date
        }
      }
    }
    saving(id: "CPRuyBZcU3") {
      saved
      percentSaved
    }
  }
`;

export default Dashboard;
