import { gql } from "@apollo/client";

export const GET_LIST = gql`
  query {
    fetchBoards {
      number
      title
      createdAt
    }
  }
`;

export const GET_DIARY = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      title
      contents
      createdAt
    }
  }
`;

export const CREATE_DIARY = gql`
  mutation createBoard($title: String, $contents: String, $writer: String) {
    createBoard(title: $title, contents: $contents, writer: $writer) {
      _id
      number
      message
    }
  }
`;
