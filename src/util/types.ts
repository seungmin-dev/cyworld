export interface IPlaylist {
  title: string;
  artist: string;
}

export interface DiaryForm {
  title: string;
  contents: string;
}

export interface ITitle {
  titleText: string;
  subText?: string;
  isHome?: boolean;
  isDiary?: boolean;
}

export interface IButton {
  text: string;
  [key: string]: any;
}
