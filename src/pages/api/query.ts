import { gql } from "@apollo/client";

export const GET_LIST = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
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

export const DELETE_DIARY = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      _id
      number
      message
    }
  }
`;

export const UPDATE_DIARY = gql`
  mutation updateBoard(
    $number: Int
    $writer: String
    $title: String
    $contents: String
  ) {
    updateBoard(
      number: $number
      writer: $writer
      title: $title
      contents: $contents
    ) {
      _id
      number
      message
    }
  }
`;
