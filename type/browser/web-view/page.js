/* @flow */

import type {URI, ID} from "../../common/prelude"
import type {Effects} from "reflex/type"
import * as Pallet from "../pallet"

export type Icon = {
  href: URI,
  sizes: ?string,
  rel: ?string,
}

export type Model = {
  uri: URI,
  title: ?string,
  faviconURI: ?URI,
  icon: ?Icon,

  themeColor: ?string,
  curatedColor: ?string,

  pallet: Pallet.Model
}

export type ScreenshotUpdate = {
  type: "WebView.Page.ScreenshotUpdate",
  uri: URI,
  image: URI
}

export type CuratedColorUpdate = {
  type: "WebView.Page.CuratedColorUpdate",
  uri: URI,
  color: ?string
}

export type ColorScraped = {
  type: "WebView.Page.ColorScraped",
  uri: URI,
  color: ?string
}

export type Response
  = ScreenshotUpdate
  | CuratedColorUpdate
  | ColorScraped



export type DocumentFirstPaint = {type: "WebView.Page.DocumentFirstPaint"}
export type FirstPaint = {type: "WebView.Page.FirstPaint"}

export type MetaChanged = {
  type: "WebView.Page.MetaChanged",
  name: string,
  content: string
}
export type asMetaChanged = (name:string, content:string) => MetaChanged

export type TitleChanged = {
  type: "WebView.Page.TitleChanged",
  title: string
}
export type asTitleChanged = (title:string) => TitleChanged

export type IconChanged = {
  type: "WebView.Page.IconChanged",
  icon: Icon
}

export type asIconChanged = (icon:Icon) => IconChanged

export type OverflowChanged = {
  type: "WebView.Page.OverflowChanged",
  isOverflown: boolean
}
export type asOverflowChanged = (isOverflown:boolean) => OverflowChanged

export type Scrolled = {
  type: "WebView.Page.Scrolled",
  detail: any
}
export type asScrolled = (detail:any) => Scrolled

export type Action
  = DocumentFirstPaint
  | FirstPaint
  | MetaChanged
  | TitleChanged
  | IconChanged
  | OverflowChanged
  | Scrolled
  | ScreenshotUpdate
  | CuratedColorUpdate
  | ColorScraped

export type init = (uri:URI) => Model
export type update = (model:Model, action:Action) => [Model, Effects<Response>]
