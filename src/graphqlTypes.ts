export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};










export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  SourceInstanceName = 'sourceInstanceName',
  AbsolutePath = 'absolutePath',
  RelativePath = 'relativePath',
  Extension = 'extension',
  Size = 'size',
  PrettySize = 'prettySize',
  ModifiedTime = 'modifiedTime',
  AccessTime = 'accessTime',
  ChangeTime = 'changeTime',
  BirthTime = 'birthTime',
  Root = 'root',
  Dir = 'dir',
  Base = 'base',
  Ext = 'ext',
  Name = 'name',
  RelativeDirectory = 'relativeDirectory',
  Dev = 'dev',
  Mode = 'mode',
  Nlink = 'nlink',
  Uid = 'uid',
  Gid = 'gid',
  Rdev = 'rdev',
  Ino = 'ino',
  AtimeMs = 'atimeMs',
  MtimeMs = 'mtimeMs',
  CtimeMs = 'ctimeMs',
  Atime = 'atime',
  Mtime = 'mtime',
  Ctime = 'ctime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  PublicUrl = 'publicURL',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildrenMarkdownRemark = 'childrenMarkdownRemark',
  ChildrenMarkdownRemarkId = 'childrenMarkdownRemark___id',
  ChildrenMarkdownRemarkFrontmatterTitle = 'childrenMarkdownRemark___frontmatter___title',
  ChildrenMarkdownRemarkFrontmatterLogoImageSourceInstanceName = 'childrenMarkdownRemark___frontmatter___logoImage___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterLogoImageAbsolutePath = 'childrenMarkdownRemark___frontmatter___logoImage___absolutePath',
  ChildrenMarkdownRemarkFrontmatterLogoImageRelativePath = 'childrenMarkdownRemark___frontmatter___logoImage___relativePath',
  ChildrenMarkdownRemarkFrontmatterLogoImageExtension = 'childrenMarkdownRemark___frontmatter___logoImage___extension',
  ChildrenMarkdownRemarkFrontmatterLogoImageSize = 'childrenMarkdownRemark___frontmatter___logoImage___size',
  ChildrenMarkdownRemarkFrontmatterLogoImagePrettySize = 'childrenMarkdownRemark___frontmatter___logoImage___prettySize',
  ChildrenMarkdownRemarkFrontmatterLogoImageModifiedTime = 'childrenMarkdownRemark___frontmatter___logoImage___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterLogoImageAccessTime = 'childrenMarkdownRemark___frontmatter___logoImage___accessTime',
  ChildrenMarkdownRemarkFrontmatterLogoImageChangeTime = 'childrenMarkdownRemark___frontmatter___logoImage___changeTime',
  ChildrenMarkdownRemarkFrontmatterLogoImageBirthTime = 'childrenMarkdownRemark___frontmatter___logoImage___birthTime',
  ChildrenMarkdownRemarkFrontmatterLogoImageRoot = 'childrenMarkdownRemark___frontmatter___logoImage___root',
  ChildrenMarkdownRemarkFrontmatterLogoImageDir = 'childrenMarkdownRemark___frontmatter___logoImage___dir',
  ChildrenMarkdownRemarkFrontmatterLogoImageBase = 'childrenMarkdownRemark___frontmatter___logoImage___base',
  ChildrenMarkdownRemarkFrontmatterLogoImageExt = 'childrenMarkdownRemark___frontmatter___logoImage___ext',
  ChildrenMarkdownRemarkFrontmatterLogoImageName = 'childrenMarkdownRemark___frontmatter___logoImage___name',
  ChildrenMarkdownRemarkFrontmatterLogoImageRelativeDirectory = 'childrenMarkdownRemark___frontmatter___logoImage___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterLogoImageDev = 'childrenMarkdownRemark___frontmatter___logoImage___dev',
  ChildrenMarkdownRemarkFrontmatterLogoImageMode = 'childrenMarkdownRemark___frontmatter___logoImage___mode',
  ChildrenMarkdownRemarkFrontmatterLogoImageNlink = 'childrenMarkdownRemark___frontmatter___logoImage___nlink',
  ChildrenMarkdownRemarkFrontmatterLogoImageUid = 'childrenMarkdownRemark___frontmatter___logoImage___uid',
  ChildrenMarkdownRemarkFrontmatterLogoImageGid = 'childrenMarkdownRemark___frontmatter___logoImage___gid',
  ChildrenMarkdownRemarkFrontmatterLogoImageRdev = 'childrenMarkdownRemark___frontmatter___logoImage___rdev',
  ChildrenMarkdownRemarkFrontmatterLogoImageIno = 'childrenMarkdownRemark___frontmatter___logoImage___ino',
  ChildrenMarkdownRemarkFrontmatterLogoImageAtimeMs = 'childrenMarkdownRemark___frontmatter___logoImage___atimeMs',
  ChildrenMarkdownRemarkFrontmatterLogoImageMtimeMs = 'childrenMarkdownRemark___frontmatter___logoImage___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterLogoImageCtimeMs = 'childrenMarkdownRemark___frontmatter___logoImage___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterLogoImageAtime = 'childrenMarkdownRemark___frontmatter___logoImage___atime',
  ChildrenMarkdownRemarkFrontmatterLogoImageMtime = 'childrenMarkdownRemark___frontmatter___logoImage___mtime',
  ChildrenMarkdownRemarkFrontmatterLogoImageCtime = 'childrenMarkdownRemark___frontmatter___logoImage___ctime',
  ChildrenMarkdownRemarkFrontmatterLogoImageBirthtime = 'childrenMarkdownRemark___frontmatter___logoImage___birthtime',
  ChildrenMarkdownRemarkFrontmatterLogoImageBirthtimeMs = 'childrenMarkdownRemark___frontmatter___logoImage___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterLogoImageBlksize = 'childrenMarkdownRemark___frontmatter___logoImage___blksize',
  ChildrenMarkdownRemarkFrontmatterLogoImageBlocks = 'childrenMarkdownRemark___frontmatter___logoImage___blocks',
  ChildrenMarkdownRemarkFrontmatterLogoImagePublicUrl = 'childrenMarkdownRemark___frontmatter___logoImage___publicURL',
  ChildrenMarkdownRemarkFrontmatterLogoImageChildrenImageSharp = 'childrenMarkdownRemark___frontmatter___logoImage___childrenImageSharp',
  ChildrenMarkdownRemarkFrontmatterLogoImageChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___logoImage___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterLogoImageId = 'childrenMarkdownRemark___frontmatter___logoImage___id',
  ChildrenMarkdownRemarkFrontmatterLogoImageChildren = 'childrenMarkdownRemark___frontmatter___logoImage___children',
  ChildrenMarkdownRemarkFrontmatterTechnologies = 'childrenMarkdownRemark___frontmatter___technologies',
  ChildrenMarkdownRemarkFrontmatterDesktopImageSourceInstanceName = 'childrenMarkdownRemark___frontmatter___desktopImage___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterDesktopImageAbsolutePath = 'childrenMarkdownRemark___frontmatter___desktopImage___absolutePath',
  ChildrenMarkdownRemarkFrontmatterDesktopImageRelativePath = 'childrenMarkdownRemark___frontmatter___desktopImage___relativePath',
  ChildrenMarkdownRemarkFrontmatterDesktopImageExtension = 'childrenMarkdownRemark___frontmatter___desktopImage___extension',
  ChildrenMarkdownRemarkFrontmatterDesktopImageSize = 'childrenMarkdownRemark___frontmatter___desktopImage___size',
  ChildrenMarkdownRemarkFrontmatterDesktopImagePrettySize = 'childrenMarkdownRemark___frontmatter___desktopImage___prettySize',
  ChildrenMarkdownRemarkFrontmatterDesktopImageModifiedTime = 'childrenMarkdownRemark___frontmatter___desktopImage___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageAccessTime = 'childrenMarkdownRemark___frontmatter___desktopImage___accessTime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageChangeTime = 'childrenMarkdownRemark___frontmatter___desktopImage___changeTime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageBirthTime = 'childrenMarkdownRemark___frontmatter___desktopImage___birthTime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageRoot = 'childrenMarkdownRemark___frontmatter___desktopImage___root',
  ChildrenMarkdownRemarkFrontmatterDesktopImageDir = 'childrenMarkdownRemark___frontmatter___desktopImage___dir',
  ChildrenMarkdownRemarkFrontmatterDesktopImageBase = 'childrenMarkdownRemark___frontmatter___desktopImage___base',
  ChildrenMarkdownRemarkFrontmatterDesktopImageExt = 'childrenMarkdownRemark___frontmatter___desktopImage___ext',
  ChildrenMarkdownRemarkFrontmatterDesktopImageName = 'childrenMarkdownRemark___frontmatter___desktopImage___name',
  ChildrenMarkdownRemarkFrontmatterDesktopImageRelativeDirectory = 'childrenMarkdownRemark___frontmatter___desktopImage___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterDesktopImageDev = 'childrenMarkdownRemark___frontmatter___desktopImage___dev',
  ChildrenMarkdownRemarkFrontmatterDesktopImageMode = 'childrenMarkdownRemark___frontmatter___desktopImage___mode',
  ChildrenMarkdownRemarkFrontmatterDesktopImageNlink = 'childrenMarkdownRemark___frontmatter___desktopImage___nlink',
  ChildrenMarkdownRemarkFrontmatterDesktopImageUid = 'childrenMarkdownRemark___frontmatter___desktopImage___uid',
  ChildrenMarkdownRemarkFrontmatterDesktopImageGid = 'childrenMarkdownRemark___frontmatter___desktopImage___gid',
  ChildrenMarkdownRemarkFrontmatterDesktopImageRdev = 'childrenMarkdownRemark___frontmatter___desktopImage___rdev',
  ChildrenMarkdownRemarkFrontmatterDesktopImageIno = 'childrenMarkdownRemark___frontmatter___desktopImage___ino',
  ChildrenMarkdownRemarkFrontmatterDesktopImageAtimeMs = 'childrenMarkdownRemark___frontmatter___desktopImage___atimeMs',
  ChildrenMarkdownRemarkFrontmatterDesktopImageMtimeMs = 'childrenMarkdownRemark___frontmatter___desktopImage___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterDesktopImageCtimeMs = 'childrenMarkdownRemark___frontmatter___desktopImage___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterDesktopImageAtime = 'childrenMarkdownRemark___frontmatter___desktopImage___atime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageMtime = 'childrenMarkdownRemark___frontmatter___desktopImage___mtime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageCtime = 'childrenMarkdownRemark___frontmatter___desktopImage___ctime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageBirthtime = 'childrenMarkdownRemark___frontmatter___desktopImage___birthtime',
  ChildrenMarkdownRemarkFrontmatterDesktopImageBirthtimeMs = 'childrenMarkdownRemark___frontmatter___desktopImage___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterDesktopImageBlksize = 'childrenMarkdownRemark___frontmatter___desktopImage___blksize',
  ChildrenMarkdownRemarkFrontmatterDesktopImageBlocks = 'childrenMarkdownRemark___frontmatter___desktopImage___blocks',
  ChildrenMarkdownRemarkFrontmatterDesktopImagePublicUrl = 'childrenMarkdownRemark___frontmatter___desktopImage___publicURL',
  ChildrenMarkdownRemarkFrontmatterDesktopImageChildrenImageSharp = 'childrenMarkdownRemark___frontmatter___desktopImage___childrenImageSharp',
  ChildrenMarkdownRemarkFrontmatterDesktopImageChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___desktopImage___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterDesktopImageId = 'childrenMarkdownRemark___frontmatter___desktopImage___id',
  ChildrenMarkdownRemarkFrontmatterDesktopImageChildren = 'childrenMarkdownRemark___frontmatter___desktopImage___children',
  ChildrenMarkdownRemarkFrontmatterMobileImageSourceInstanceName = 'childrenMarkdownRemark___frontmatter___mobileImage___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterMobileImageAbsolutePath = 'childrenMarkdownRemark___frontmatter___mobileImage___absolutePath',
  ChildrenMarkdownRemarkFrontmatterMobileImageRelativePath = 'childrenMarkdownRemark___frontmatter___mobileImage___relativePath',
  ChildrenMarkdownRemarkFrontmatterMobileImageExtension = 'childrenMarkdownRemark___frontmatter___mobileImage___extension',
  ChildrenMarkdownRemarkFrontmatterMobileImageSize = 'childrenMarkdownRemark___frontmatter___mobileImage___size',
  ChildrenMarkdownRemarkFrontmatterMobileImagePrettySize = 'childrenMarkdownRemark___frontmatter___mobileImage___prettySize',
  ChildrenMarkdownRemarkFrontmatterMobileImageModifiedTime = 'childrenMarkdownRemark___frontmatter___mobileImage___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterMobileImageAccessTime = 'childrenMarkdownRemark___frontmatter___mobileImage___accessTime',
  ChildrenMarkdownRemarkFrontmatterMobileImageChangeTime = 'childrenMarkdownRemark___frontmatter___mobileImage___changeTime',
  ChildrenMarkdownRemarkFrontmatterMobileImageBirthTime = 'childrenMarkdownRemark___frontmatter___mobileImage___birthTime',
  ChildrenMarkdownRemarkFrontmatterMobileImageRoot = 'childrenMarkdownRemark___frontmatter___mobileImage___root',
  ChildrenMarkdownRemarkFrontmatterMobileImageDir = 'childrenMarkdownRemark___frontmatter___mobileImage___dir',
  ChildrenMarkdownRemarkFrontmatterMobileImageBase = 'childrenMarkdownRemark___frontmatter___mobileImage___base',
  ChildrenMarkdownRemarkFrontmatterMobileImageExt = 'childrenMarkdownRemark___frontmatter___mobileImage___ext',
  ChildrenMarkdownRemarkFrontmatterMobileImageName = 'childrenMarkdownRemark___frontmatter___mobileImage___name',
  ChildrenMarkdownRemarkFrontmatterMobileImageRelativeDirectory = 'childrenMarkdownRemark___frontmatter___mobileImage___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterMobileImageDev = 'childrenMarkdownRemark___frontmatter___mobileImage___dev',
  ChildrenMarkdownRemarkFrontmatterMobileImageMode = 'childrenMarkdownRemark___frontmatter___mobileImage___mode',
  ChildrenMarkdownRemarkFrontmatterMobileImageNlink = 'childrenMarkdownRemark___frontmatter___mobileImage___nlink',
  ChildrenMarkdownRemarkFrontmatterMobileImageUid = 'childrenMarkdownRemark___frontmatter___mobileImage___uid',
  ChildrenMarkdownRemarkFrontmatterMobileImageGid = 'childrenMarkdownRemark___frontmatter___mobileImage___gid',
  ChildrenMarkdownRemarkFrontmatterMobileImageRdev = 'childrenMarkdownRemark___frontmatter___mobileImage___rdev',
  ChildrenMarkdownRemarkFrontmatterMobileImageIno = 'childrenMarkdownRemark___frontmatter___mobileImage___ino',
  ChildrenMarkdownRemarkFrontmatterMobileImageAtimeMs = 'childrenMarkdownRemark___frontmatter___mobileImage___atimeMs',
  ChildrenMarkdownRemarkFrontmatterMobileImageMtimeMs = 'childrenMarkdownRemark___frontmatter___mobileImage___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterMobileImageCtimeMs = 'childrenMarkdownRemark___frontmatter___mobileImage___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterMobileImageAtime = 'childrenMarkdownRemark___frontmatter___mobileImage___atime',
  ChildrenMarkdownRemarkFrontmatterMobileImageMtime = 'childrenMarkdownRemark___frontmatter___mobileImage___mtime',
  ChildrenMarkdownRemarkFrontmatterMobileImageCtime = 'childrenMarkdownRemark___frontmatter___mobileImage___ctime',
  ChildrenMarkdownRemarkFrontmatterMobileImageBirthtime = 'childrenMarkdownRemark___frontmatter___mobileImage___birthtime',
  ChildrenMarkdownRemarkFrontmatterMobileImageBirthtimeMs = 'childrenMarkdownRemark___frontmatter___mobileImage___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterMobileImageBlksize = 'childrenMarkdownRemark___frontmatter___mobileImage___blksize',
  ChildrenMarkdownRemarkFrontmatterMobileImageBlocks = 'childrenMarkdownRemark___frontmatter___mobileImage___blocks',
  ChildrenMarkdownRemarkFrontmatterMobileImagePublicUrl = 'childrenMarkdownRemark___frontmatter___mobileImage___publicURL',
  ChildrenMarkdownRemarkFrontmatterMobileImageChildrenImageSharp = 'childrenMarkdownRemark___frontmatter___mobileImage___childrenImageSharp',
  ChildrenMarkdownRemarkFrontmatterMobileImageChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___mobileImage___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterMobileImageId = 'childrenMarkdownRemark___frontmatter___mobileImage___id',
  ChildrenMarkdownRemarkFrontmatterMobileImageChildren = 'childrenMarkdownRemark___frontmatter___mobileImage___children',
  ChildrenMarkdownRemarkFrontmatterLiveUrl = 'childrenMarkdownRemark___frontmatter___liveUrl',
  ChildrenMarkdownRemarkFrontmatterGithubUrl = 'childrenMarkdownRemark___frontmatter___githubUrl',
  ChildrenMarkdownRemarkFrontmatterSortIndex = 'childrenMarkdownRemark___frontmatter___sortIndex',
  ChildrenMarkdownRemarkFrontmatterRelatedSkills = 'childrenMarkdownRemark___frontmatter___related_skills',
  ChildrenMarkdownRemarkFrontmatterIconSourceInstanceName = 'childrenMarkdownRemark___frontmatter___icon___sourceInstanceName',
  ChildrenMarkdownRemarkFrontmatterIconAbsolutePath = 'childrenMarkdownRemark___frontmatter___icon___absolutePath',
  ChildrenMarkdownRemarkFrontmatterIconRelativePath = 'childrenMarkdownRemark___frontmatter___icon___relativePath',
  ChildrenMarkdownRemarkFrontmatterIconExtension = 'childrenMarkdownRemark___frontmatter___icon___extension',
  ChildrenMarkdownRemarkFrontmatterIconSize = 'childrenMarkdownRemark___frontmatter___icon___size',
  ChildrenMarkdownRemarkFrontmatterIconPrettySize = 'childrenMarkdownRemark___frontmatter___icon___prettySize',
  ChildrenMarkdownRemarkFrontmatterIconModifiedTime = 'childrenMarkdownRemark___frontmatter___icon___modifiedTime',
  ChildrenMarkdownRemarkFrontmatterIconAccessTime = 'childrenMarkdownRemark___frontmatter___icon___accessTime',
  ChildrenMarkdownRemarkFrontmatterIconChangeTime = 'childrenMarkdownRemark___frontmatter___icon___changeTime',
  ChildrenMarkdownRemarkFrontmatterIconBirthTime = 'childrenMarkdownRemark___frontmatter___icon___birthTime',
  ChildrenMarkdownRemarkFrontmatterIconRoot = 'childrenMarkdownRemark___frontmatter___icon___root',
  ChildrenMarkdownRemarkFrontmatterIconDir = 'childrenMarkdownRemark___frontmatter___icon___dir',
  ChildrenMarkdownRemarkFrontmatterIconBase = 'childrenMarkdownRemark___frontmatter___icon___base',
  ChildrenMarkdownRemarkFrontmatterIconExt = 'childrenMarkdownRemark___frontmatter___icon___ext',
  ChildrenMarkdownRemarkFrontmatterIconName = 'childrenMarkdownRemark___frontmatter___icon___name',
  ChildrenMarkdownRemarkFrontmatterIconRelativeDirectory = 'childrenMarkdownRemark___frontmatter___icon___relativeDirectory',
  ChildrenMarkdownRemarkFrontmatterIconDev = 'childrenMarkdownRemark___frontmatter___icon___dev',
  ChildrenMarkdownRemarkFrontmatterIconMode = 'childrenMarkdownRemark___frontmatter___icon___mode',
  ChildrenMarkdownRemarkFrontmatterIconNlink = 'childrenMarkdownRemark___frontmatter___icon___nlink',
  ChildrenMarkdownRemarkFrontmatterIconUid = 'childrenMarkdownRemark___frontmatter___icon___uid',
  ChildrenMarkdownRemarkFrontmatterIconGid = 'childrenMarkdownRemark___frontmatter___icon___gid',
  ChildrenMarkdownRemarkFrontmatterIconRdev = 'childrenMarkdownRemark___frontmatter___icon___rdev',
  ChildrenMarkdownRemarkFrontmatterIconIno = 'childrenMarkdownRemark___frontmatter___icon___ino',
  ChildrenMarkdownRemarkFrontmatterIconAtimeMs = 'childrenMarkdownRemark___frontmatter___icon___atimeMs',
  ChildrenMarkdownRemarkFrontmatterIconMtimeMs = 'childrenMarkdownRemark___frontmatter___icon___mtimeMs',
  ChildrenMarkdownRemarkFrontmatterIconCtimeMs = 'childrenMarkdownRemark___frontmatter___icon___ctimeMs',
  ChildrenMarkdownRemarkFrontmatterIconAtime = 'childrenMarkdownRemark___frontmatter___icon___atime',
  ChildrenMarkdownRemarkFrontmatterIconMtime = 'childrenMarkdownRemark___frontmatter___icon___mtime',
  ChildrenMarkdownRemarkFrontmatterIconCtime = 'childrenMarkdownRemark___frontmatter___icon___ctime',
  ChildrenMarkdownRemarkFrontmatterIconBirthtime = 'childrenMarkdownRemark___frontmatter___icon___birthtime',
  ChildrenMarkdownRemarkFrontmatterIconBirthtimeMs = 'childrenMarkdownRemark___frontmatter___icon___birthtimeMs',
  ChildrenMarkdownRemarkFrontmatterIconBlksize = 'childrenMarkdownRemark___frontmatter___icon___blksize',
  ChildrenMarkdownRemarkFrontmatterIconBlocks = 'childrenMarkdownRemark___frontmatter___icon___blocks',
  ChildrenMarkdownRemarkFrontmatterIconPublicUrl = 'childrenMarkdownRemark___frontmatter___icon___publicURL',
  ChildrenMarkdownRemarkFrontmatterIconChildrenImageSharp = 'childrenMarkdownRemark___frontmatter___icon___childrenImageSharp',
  ChildrenMarkdownRemarkFrontmatterIconChildrenMarkdownRemark = 'childrenMarkdownRemark___frontmatter___icon___childrenMarkdownRemark',
  ChildrenMarkdownRemarkFrontmatterIconId = 'childrenMarkdownRemark___frontmatter___icon___id',
  ChildrenMarkdownRemarkFrontmatterIconChildren = 'childrenMarkdownRemark___frontmatter___icon___children',
  ChildrenMarkdownRemarkFrontmatterBrandColor = 'childrenMarkdownRemark___frontmatter___brandColor',
  ChildrenMarkdownRemarkFrontmatterTags = 'childrenMarkdownRemark___frontmatter___tags',
  ChildrenMarkdownRemarkExcerpt = 'childrenMarkdownRemark___excerpt',
  ChildrenMarkdownRemarkRawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  ChildrenMarkdownRemarkFileAbsolutePath = 'childrenMarkdownRemark___fileAbsolutePath',
  ChildrenMarkdownRemarkHtml = 'childrenMarkdownRemark___html',
  ChildrenMarkdownRemarkHtmlAst = 'childrenMarkdownRemark___htmlAst',
  ChildrenMarkdownRemarkExcerptAst = 'childrenMarkdownRemark___excerptAst',
  ChildrenMarkdownRemarkHeadings = 'childrenMarkdownRemark___headings',
  ChildrenMarkdownRemarkHeadingsId = 'childrenMarkdownRemark___headings___id',
  ChildrenMarkdownRemarkHeadingsValue = 'childrenMarkdownRemark___headings___value',
  ChildrenMarkdownRemarkHeadingsDepth = 'childrenMarkdownRemark___headings___depth',
  ChildrenMarkdownRemarkTimeToRead = 'childrenMarkdownRemark___timeToRead',
  ChildrenMarkdownRemarkTableOfContents = 'childrenMarkdownRemark___tableOfContents',
  ChildrenMarkdownRemarkWordCountParagraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  ChildrenMarkdownRemarkWordCountSentences = 'childrenMarkdownRemark___wordCount___sentences',
  ChildrenMarkdownRemarkWordCountWords = 'childrenMarkdownRemark___wordCount___words',
  ChildrenMarkdownRemarkParentId = 'childrenMarkdownRemark___parent___id',
  ChildrenMarkdownRemarkParentParentId = 'childrenMarkdownRemark___parent___parent___id',
  ChildrenMarkdownRemarkParentParentChildren = 'childrenMarkdownRemark___parent___parent___children',
  ChildrenMarkdownRemarkParentChildren = 'childrenMarkdownRemark___parent___children',
  ChildrenMarkdownRemarkParentChildrenId = 'childrenMarkdownRemark___parent___children___id',
  ChildrenMarkdownRemarkParentChildrenChildren = 'childrenMarkdownRemark___parent___children___children',
  ChildrenMarkdownRemarkParentInternalContent = 'childrenMarkdownRemark___parent___internal___content',
  ChildrenMarkdownRemarkParentInternalContentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  ChildrenMarkdownRemarkParentInternalDescription = 'childrenMarkdownRemark___parent___internal___description',
  ChildrenMarkdownRemarkParentInternalFieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  ChildrenMarkdownRemarkParentInternalIgnoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  ChildrenMarkdownRemarkParentInternalMediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  ChildrenMarkdownRemarkParentInternalOwner = 'childrenMarkdownRemark___parent___internal___owner',
  ChildrenMarkdownRemarkParentInternalType = 'childrenMarkdownRemark___parent___internal___type',
  ChildrenMarkdownRemarkChildren = 'childrenMarkdownRemark___children',
  ChildrenMarkdownRemarkChildrenId = 'childrenMarkdownRemark___children___id',
  ChildrenMarkdownRemarkChildrenParentId = 'childrenMarkdownRemark___children___parent___id',
  ChildrenMarkdownRemarkChildrenParentChildren = 'childrenMarkdownRemark___children___parent___children',
  ChildrenMarkdownRemarkChildrenChildren = 'childrenMarkdownRemark___children___children',
  ChildrenMarkdownRemarkChildrenChildrenId = 'childrenMarkdownRemark___children___children___id',
  ChildrenMarkdownRemarkChildrenChildrenChildren = 'childrenMarkdownRemark___children___children___children',
  ChildrenMarkdownRemarkChildrenInternalContent = 'childrenMarkdownRemark___children___internal___content',
  ChildrenMarkdownRemarkChildrenInternalContentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  ChildrenMarkdownRemarkChildrenInternalDescription = 'childrenMarkdownRemark___children___internal___description',
  ChildrenMarkdownRemarkChildrenInternalFieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  ChildrenMarkdownRemarkChildrenInternalIgnoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  ChildrenMarkdownRemarkChildrenInternalMediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  ChildrenMarkdownRemarkChildrenInternalOwner = 'childrenMarkdownRemark___children___internal___owner',
  ChildrenMarkdownRemarkChildrenInternalType = 'childrenMarkdownRemark___children___internal___type',
  ChildrenMarkdownRemarkInternalContent = 'childrenMarkdownRemark___internal___content',
  ChildrenMarkdownRemarkInternalContentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  ChildrenMarkdownRemarkInternalDescription = 'childrenMarkdownRemark___internal___description',
  ChildrenMarkdownRemarkInternalFieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  ChildrenMarkdownRemarkInternalIgnoreType = 'childrenMarkdownRemark___internal___ignoreType',
  ChildrenMarkdownRemarkInternalMediaType = 'childrenMarkdownRemark___internal___mediaType',
  ChildrenMarkdownRemarkInternalOwner = 'childrenMarkdownRemark___internal___owner',
  ChildrenMarkdownRemarkInternalType = 'childrenMarkdownRemark___internal___type',
  ChildMarkdownRemarkId = 'childMarkdownRemark___id',
  ChildMarkdownRemarkFrontmatterTitle = 'childMarkdownRemark___frontmatter___title',
  ChildMarkdownRemarkFrontmatterLogoImageSourceInstanceName = 'childMarkdownRemark___frontmatter___logoImage___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterLogoImageAbsolutePath = 'childMarkdownRemark___frontmatter___logoImage___absolutePath',
  ChildMarkdownRemarkFrontmatterLogoImageRelativePath = 'childMarkdownRemark___frontmatter___logoImage___relativePath',
  ChildMarkdownRemarkFrontmatterLogoImageExtension = 'childMarkdownRemark___frontmatter___logoImage___extension',
  ChildMarkdownRemarkFrontmatterLogoImageSize = 'childMarkdownRemark___frontmatter___logoImage___size',
  ChildMarkdownRemarkFrontmatterLogoImagePrettySize = 'childMarkdownRemark___frontmatter___logoImage___prettySize',
  ChildMarkdownRemarkFrontmatterLogoImageModifiedTime = 'childMarkdownRemark___frontmatter___logoImage___modifiedTime',
  ChildMarkdownRemarkFrontmatterLogoImageAccessTime = 'childMarkdownRemark___frontmatter___logoImage___accessTime',
  ChildMarkdownRemarkFrontmatterLogoImageChangeTime = 'childMarkdownRemark___frontmatter___logoImage___changeTime',
  ChildMarkdownRemarkFrontmatterLogoImageBirthTime = 'childMarkdownRemark___frontmatter___logoImage___birthTime',
  ChildMarkdownRemarkFrontmatterLogoImageRoot = 'childMarkdownRemark___frontmatter___logoImage___root',
  ChildMarkdownRemarkFrontmatterLogoImageDir = 'childMarkdownRemark___frontmatter___logoImage___dir',
  ChildMarkdownRemarkFrontmatterLogoImageBase = 'childMarkdownRemark___frontmatter___logoImage___base',
  ChildMarkdownRemarkFrontmatterLogoImageExt = 'childMarkdownRemark___frontmatter___logoImage___ext',
  ChildMarkdownRemarkFrontmatterLogoImageName = 'childMarkdownRemark___frontmatter___logoImage___name',
  ChildMarkdownRemarkFrontmatterLogoImageRelativeDirectory = 'childMarkdownRemark___frontmatter___logoImage___relativeDirectory',
  ChildMarkdownRemarkFrontmatterLogoImageDev = 'childMarkdownRemark___frontmatter___logoImage___dev',
  ChildMarkdownRemarkFrontmatterLogoImageMode = 'childMarkdownRemark___frontmatter___logoImage___mode',
  ChildMarkdownRemarkFrontmatterLogoImageNlink = 'childMarkdownRemark___frontmatter___logoImage___nlink',
  ChildMarkdownRemarkFrontmatterLogoImageUid = 'childMarkdownRemark___frontmatter___logoImage___uid',
  ChildMarkdownRemarkFrontmatterLogoImageGid = 'childMarkdownRemark___frontmatter___logoImage___gid',
  ChildMarkdownRemarkFrontmatterLogoImageRdev = 'childMarkdownRemark___frontmatter___logoImage___rdev',
  ChildMarkdownRemarkFrontmatterLogoImageIno = 'childMarkdownRemark___frontmatter___logoImage___ino',
  ChildMarkdownRemarkFrontmatterLogoImageAtimeMs = 'childMarkdownRemark___frontmatter___logoImage___atimeMs',
  ChildMarkdownRemarkFrontmatterLogoImageMtimeMs = 'childMarkdownRemark___frontmatter___logoImage___mtimeMs',
  ChildMarkdownRemarkFrontmatterLogoImageCtimeMs = 'childMarkdownRemark___frontmatter___logoImage___ctimeMs',
  ChildMarkdownRemarkFrontmatterLogoImageAtime = 'childMarkdownRemark___frontmatter___logoImage___atime',
  ChildMarkdownRemarkFrontmatterLogoImageMtime = 'childMarkdownRemark___frontmatter___logoImage___mtime',
  ChildMarkdownRemarkFrontmatterLogoImageCtime = 'childMarkdownRemark___frontmatter___logoImage___ctime',
  ChildMarkdownRemarkFrontmatterLogoImageBirthtime = 'childMarkdownRemark___frontmatter___logoImage___birthtime',
  ChildMarkdownRemarkFrontmatterLogoImageBirthtimeMs = 'childMarkdownRemark___frontmatter___logoImage___birthtimeMs',
  ChildMarkdownRemarkFrontmatterLogoImageBlksize = 'childMarkdownRemark___frontmatter___logoImage___blksize',
  ChildMarkdownRemarkFrontmatterLogoImageBlocks = 'childMarkdownRemark___frontmatter___logoImage___blocks',
  ChildMarkdownRemarkFrontmatterLogoImagePublicUrl = 'childMarkdownRemark___frontmatter___logoImage___publicURL',
  ChildMarkdownRemarkFrontmatterLogoImageChildrenImageSharp = 'childMarkdownRemark___frontmatter___logoImage___childrenImageSharp',
  ChildMarkdownRemarkFrontmatterLogoImageChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___logoImage___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterLogoImageId = 'childMarkdownRemark___frontmatter___logoImage___id',
  ChildMarkdownRemarkFrontmatterLogoImageChildren = 'childMarkdownRemark___frontmatter___logoImage___children',
  ChildMarkdownRemarkFrontmatterTechnologies = 'childMarkdownRemark___frontmatter___technologies',
  ChildMarkdownRemarkFrontmatterDesktopImageSourceInstanceName = 'childMarkdownRemark___frontmatter___desktopImage___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterDesktopImageAbsolutePath = 'childMarkdownRemark___frontmatter___desktopImage___absolutePath',
  ChildMarkdownRemarkFrontmatterDesktopImageRelativePath = 'childMarkdownRemark___frontmatter___desktopImage___relativePath',
  ChildMarkdownRemarkFrontmatterDesktopImageExtension = 'childMarkdownRemark___frontmatter___desktopImage___extension',
  ChildMarkdownRemarkFrontmatterDesktopImageSize = 'childMarkdownRemark___frontmatter___desktopImage___size',
  ChildMarkdownRemarkFrontmatterDesktopImagePrettySize = 'childMarkdownRemark___frontmatter___desktopImage___prettySize',
  ChildMarkdownRemarkFrontmatterDesktopImageModifiedTime = 'childMarkdownRemark___frontmatter___desktopImage___modifiedTime',
  ChildMarkdownRemarkFrontmatterDesktopImageAccessTime = 'childMarkdownRemark___frontmatter___desktopImage___accessTime',
  ChildMarkdownRemarkFrontmatterDesktopImageChangeTime = 'childMarkdownRemark___frontmatter___desktopImage___changeTime',
  ChildMarkdownRemarkFrontmatterDesktopImageBirthTime = 'childMarkdownRemark___frontmatter___desktopImage___birthTime',
  ChildMarkdownRemarkFrontmatterDesktopImageRoot = 'childMarkdownRemark___frontmatter___desktopImage___root',
  ChildMarkdownRemarkFrontmatterDesktopImageDir = 'childMarkdownRemark___frontmatter___desktopImage___dir',
  ChildMarkdownRemarkFrontmatterDesktopImageBase = 'childMarkdownRemark___frontmatter___desktopImage___base',
  ChildMarkdownRemarkFrontmatterDesktopImageExt = 'childMarkdownRemark___frontmatter___desktopImage___ext',
  ChildMarkdownRemarkFrontmatterDesktopImageName = 'childMarkdownRemark___frontmatter___desktopImage___name',
  ChildMarkdownRemarkFrontmatterDesktopImageRelativeDirectory = 'childMarkdownRemark___frontmatter___desktopImage___relativeDirectory',
  ChildMarkdownRemarkFrontmatterDesktopImageDev = 'childMarkdownRemark___frontmatter___desktopImage___dev',
  ChildMarkdownRemarkFrontmatterDesktopImageMode = 'childMarkdownRemark___frontmatter___desktopImage___mode',
  ChildMarkdownRemarkFrontmatterDesktopImageNlink = 'childMarkdownRemark___frontmatter___desktopImage___nlink',
  ChildMarkdownRemarkFrontmatterDesktopImageUid = 'childMarkdownRemark___frontmatter___desktopImage___uid',
  ChildMarkdownRemarkFrontmatterDesktopImageGid = 'childMarkdownRemark___frontmatter___desktopImage___gid',
  ChildMarkdownRemarkFrontmatterDesktopImageRdev = 'childMarkdownRemark___frontmatter___desktopImage___rdev',
  ChildMarkdownRemarkFrontmatterDesktopImageIno = 'childMarkdownRemark___frontmatter___desktopImage___ino',
  ChildMarkdownRemarkFrontmatterDesktopImageAtimeMs = 'childMarkdownRemark___frontmatter___desktopImage___atimeMs',
  ChildMarkdownRemarkFrontmatterDesktopImageMtimeMs = 'childMarkdownRemark___frontmatter___desktopImage___mtimeMs',
  ChildMarkdownRemarkFrontmatterDesktopImageCtimeMs = 'childMarkdownRemark___frontmatter___desktopImage___ctimeMs',
  ChildMarkdownRemarkFrontmatterDesktopImageAtime = 'childMarkdownRemark___frontmatter___desktopImage___atime',
  ChildMarkdownRemarkFrontmatterDesktopImageMtime = 'childMarkdownRemark___frontmatter___desktopImage___mtime',
  ChildMarkdownRemarkFrontmatterDesktopImageCtime = 'childMarkdownRemark___frontmatter___desktopImage___ctime',
  ChildMarkdownRemarkFrontmatterDesktopImageBirthtime = 'childMarkdownRemark___frontmatter___desktopImage___birthtime',
  ChildMarkdownRemarkFrontmatterDesktopImageBirthtimeMs = 'childMarkdownRemark___frontmatter___desktopImage___birthtimeMs',
  ChildMarkdownRemarkFrontmatterDesktopImageBlksize = 'childMarkdownRemark___frontmatter___desktopImage___blksize',
  ChildMarkdownRemarkFrontmatterDesktopImageBlocks = 'childMarkdownRemark___frontmatter___desktopImage___blocks',
  ChildMarkdownRemarkFrontmatterDesktopImagePublicUrl = 'childMarkdownRemark___frontmatter___desktopImage___publicURL',
  ChildMarkdownRemarkFrontmatterDesktopImageChildrenImageSharp = 'childMarkdownRemark___frontmatter___desktopImage___childrenImageSharp',
  ChildMarkdownRemarkFrontmatterDesktopImageChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___desktopImage___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterDesktopImageId = 'childMarkdownRemark___frontmatter___desktopImage___id',
  ChildMarkdownRemarkFrontmatterDesktopImageChildren = 'childMarkdownRemark___frontmatter___desktopImage___children',
  ChildMarkdownRemarkFrontmatterMobileImageSourceInstanceName = 'childMarkdownRemark___frontmatter___mobileImage___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterMobileImageAbsolutePath = 'childMarkdownRemark___frontmatter___mobileImage___absolutePath',
  ChildMarkdownRemarkFrontmatterMobileImageRelativePath = 'childMarkdownRemark___frontmatter___mobileImage___relativePath',
  ChildMarkdownRemarkFrontmatterMobileImageExtension = 'childMarkdownRemark___frontmatter___mobileImage___extension',
  ChildMarkdownRemarkFrontmatterMobileImageSize = 'childMarkdownRemark___frontmatter___mobileImage___size',
  ChildMarkdownRemarkFrontmatterMobileImagePrettySize = 'childMarkdownRemark___frontmatter___mobileImage___prettySize',
  ChildMarkdownRemarkFrontmatterMobileImageModifiedTime = 'childMarkdownRemark___frontmatter___mobileImage___modifiedTime',
  ChildMarkdownRemarkFrontmatterMobileImageAccessTime = 'childMarkdownRemark___frontmatter___mobileImage___accessTime',
  ChildMarkdownRemarkFrontmatterMobileImageChangeTime = 'childMarkdownRemark___frontmatter___mobileImage___changeTime',
  ChildMarkdownRemarkFrontmatterMobileImageBirthTime = 'childMarkdownRemark___frontmatter___mobileImage___birthTime',
  ChildMarkdownRemarkFrontmatterMobileImageRoot = 'childMarkdownRemark___frontmatter___mobileImage___root',
  ChildMarkdownRemarkFrontmatterMobileImageDir = 'childMarkdownRemark___frontmatter___mobileImage___dir',
  ChildMarkdownRemarkFrontmatterMobileImageBase = 'childMarkdownRemark___frontmatter___mobileImage___base',
  ChildMarkdownRemarkFrontmatterMobileImageExt = 'childMarkdownRemark___frontmatter___mobileImage___ext',
  ChildMarkdownRemarkFrontmatterMobileImageName = 'childMarkdownRemark___frontmatter___mobileImage___name',
  ChildMarkdownRemarkFrontmatterMobileImageRelativeDirectory = 'childMarkdownRemark___frontmatter___mobileImage___relativeDirectory',
  ChildMarkdownRemarkFrontmatterMobileImageDev = 'childMarkdownRemark___frontmatter___mobileImage___dev',
  ChildMarkdownRemarkFrontmatterMobileImageMode = 'childMarkdownRemark___frontmatter___mobileImage___mode',
  ChildMarkdownRemarkFrontmatterMobileImageNlink = 'childMarkdownRemark___frontmatter___mobileImage___nlink',
  ChildMarkdownRemarkFrontmatterMobileImageUid = 'childMarkdownRemark___frontmatter___mobileImage___uid',
  ChildMarkdownRemarkFrontmatterMobileImageGid = 'childMarkdownRemark___frontmatter___mobileImage___gid',
  ChildMarkdownRemarkFrontmatterMobileImageRdev = 'childMarkdownRemark___frontmatter___mobileImage___rdev',
  ChildMarkdownRemarkFrontmatterMobileImageIno = 'childMarkdownRemark___frontmatter___mobileImage___ino',
  ChildMarkdownRemarkFrontmatterMobileImageAtimeMs = 'childMarkdownRemark___frontmatter___mobileImage___atimeMs',
  ChildMarkdownRemarkFrontmatterMobileImageMtimeMs = 'childMarkdownRemark___frontmatter___mobileImage___mtimeMs',
  ChildMarkdownRemarkFrontmatterMobileImageCtimeMs = 'childMarkdownRemark___frontmatter___mobileImage___ctimeMs',
  ChildMarkdownRemarkFrontmatterMobileImageAtime = 'childMarkdownRemark___frontmatter___mobileImage___atime',
  ChildMarkdownRemarkFrontmatterMobileImageMtime = 'childMarkdownRemark___frontmatter___mobileImage___mtime',
  ChildMarkdownRemarkFrontmatterMobileImageCtime = 'childMarkdownRemark___frontmatter___mobileImage___ctime',
  ChildMarkdownRemarkFrontmatterMobileImageBirthtime = 'childMarkdownRemark___frontmatter___mobileImage___birthtime',
  ChildMarkdownRemarkFrontmatterMobileImageBirthtimeMs = 'childMarkdownRemark___frontmatter___mobileImage___birthtimeMs',
  ChildMarkdownRemarkFrontmatterMobileImageBlksize = 'childMarkdownRemark___frontmatter___mobileImage___blksize',
  ChildMarkdownRemarkFrontmatterMobileImageBlocks = 'childMarkdownRemark___frontmatter___mobileImage___blocks',
  ChildMarkdownRemarkFrontmatterMobileImagePublicUrl = 'childMarkdownRemark___frontmatter___mobileImage___publicURL',
  ChildMarkdownRemarkFrontmatterMobileImageChildrenImageSharp = 'childMarkdownRemark___frontmatter___mobileImage___childrenImageSharp',
  ChildMarkdownRemarkFrontmatterMobileImageChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___mobileImage___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterMobileImageId = 'childMarkdownRemark___frontmatter___mobileImage___id',
  ChildMarkdownRemarkFrontmatterMobileImageChildren = 'childMarkdownRemark___frontmatter___mobileImage___children',
  ChildMarkdownRemarkFrontmatterLiveUrl = 'childMarkdownRemark___frontmatter___liveUrl',
  ChildMarkdownRemarkFrontmatterGithubUrl = 'childMarkdownRemark___frontmatter___githubUrl',
  ChildMarkdownRemarkFrontmatterSortIndex = 'childMarkdownRemark___frontmatter___sortIndex',
  ChildMarkdownRemarkFrontmatterRelatedSkills = 'childMarkdownRemark___frontmatter___related_skills',
  ChildMarkdownRemarkFrontmatterIconSourceInstanceName = 'childMarkdownRemark___frontmatter___icon___sourceInstanceName',
  ChildMarkdownRemarkFrontmatterIconAbsolutePath = 'childMarkdownRemark___frontmatter___icon___absolutePath',
  ChildMarkdownRemarkFrontmatterIconRelativePath = 'childMarkdownRemark___frontmatter___icon___relativePath',
  ChildMarkdownRemarkFrontmatterIconExtension = 'childMarkdownRemark___frontmatter___icon___extension',
  ChildMarkdownRemarkFrontmatterIconSize = 'childMarkdownRemark___frontmatter___icon___size',
  ChildMarkdownRemarkFrontmatterIconPrettySize = 'childMarkdownRemark___frontmatter___icon___prettySize',
  ChildMarkdownRemarkFrontmatterIconModifiedTime = 'childMarkdownRemark___frontmatter___icon___modifiedTime',
  ChildMarkdownRemarkFrontmatterIconAccessTime = 'childMarkdownRemark___frontmatter___icon___accessTime',
  ChildMarkdownRemarkFrontmatterIconChangeTime = 'childMarkdownRemark___frontmatter___icon___changeTime',
  ChildMarkdownRemarkFrontmatterIconBirthTime = 'childMarkdownRemark___frontmatter___icon___birthTime',
  ChildMarkdownRemarkFrontmatterIconRoot = 'childMarkdownRemark___frontmatter___icon___root',
  ChildMarkdownRemarkFrontmatterIconDir = 'childMarkdownRemark___frontmatter___icon___dir',
  ChildMarkdownRemarkFrontmatterIconBase = 'childMarkdownRemark___frontmatter___icon___base',
  ChildMarkdownRemarkFrontmatterIconExt = 'childMarkdownRemark___frontmatter___icon___ext',
  ChildMarkdownRemarkFrontmatterIconName = 'childMarkdownRemark___frontmatter___icon___name',
  ChildMarkdownRemarkFrontmatterIconRelativeDirectory = 'childMarkdownRemark___frontmatter___icon___relativeDirectory',
  ChildMarkdownRemarkFrontmatterIconDev = 'childMarkdownRemark___frontmatter___icon___dev',
  ChildMarkdownRemarkFrontmatterIconMode = 'childMarkdownRemark___frontmatter___icon___mode',
  ChildMarkdownRemarkFrontmatterIconNlink = 'childMarkdownRemark___frontmatter___icon___nlink',
  ChildMarkdownRemarkFrontmatterIconUid = 'childMarkdownRemark___frontmatter___icon___uid',
  ChildMarkdownRemarkFrontmatterIconGid = 'childMarkdownRemark___frontmatter___icon___gid',
  ChildMarkdownRemarkFrontmatterIconRdev = 'childMarkdownRemark___frontmatter___icon___rdev',
  ChildMarkdownRemarkFrontmatterIconIno = 'childMarkdownRemark___frontmatter___icon___ino',
  ChildMarkdownRemarkFrontmatterIconAtimeMs = 'childMarkdownRemark___frontmatter___icon___atimeMs',
  ChildMarkdownRemarkFrontmatterIconMtimeMs = 'childMarkdownRemark___frontmatter___icon___mtimeMs',
  ChildMarkdownRemarkFrontmatterIconCtimeMs = 'childMarkdownRemark___frontmatter___icon___ctimeMs',
  ChildMarkdownRemarkFrontmatterIconAtime = 'childMarkdownRemark___frontmatter___icon___atime',
  ChildMarkdownRemarkFrontmatterIconMtime = 'childMarkdownRemark___frontmatter___icon___mtime',
  ChildMarkdownRemarkFrontmatterIconCtime = 'childMarkdownRemark___frontmatter___icon___ctime',
  ChildMarkdownRemarkFrontmatterIconBirthtime = 'childMarkdownRemark___frontmatter___icon___birthtime',
  ChildMarkdownRemarkFrontmatterIconBirthtimeMs = 'childMarkdownRemark___frontmatter___icon___birthtimeMs',
  ChildMarkdownRemarkFrontmatterIconBlksize = 'childMarkdownRemark___frontmatter___icon___blksize',
  ChildMarkdownRemarkFrontmatterIconBlocks = 'childMarkdownRemark___frontmatter___icon___blocks',
  ChildMarkdownRemarkFrontmatterIconPublicUrl = 'childMarkdownRemark___frontmatter___icon___publicURL',
  ChildMarkdownRemarkFrontmatterIconChildrenImageSharp = 'childMarkdownRemark___frontmatter___icon___childrenImageSharp',
  ChildMarkdownRemarkFrontmatterIconChildrenMarkdownRemark = 'childMarkdownRemark___frontmatter___icon___childrenMarkdownRemark',
  ChildMarkdownRemarkFrontmatterIconId = 'childMarkdownRemark___frontmatter___icon___id',
  ChildMarkdownRemarkFrontmatterIconChildren = 'childMarkdownRemark___frontmatter___icon___children',
  ChildMarkdownRemarkFrontmatterBrandColor = 'childMarkdownRemark___frontmatter___brandColor',
  ChildMarkdownRemarkFrontmatterTags = 'childMarkdownRemark___frontmatter___tags',
  ChildMarkdownRemarkExcerpt = 'childMarkdownRemark___excerpt',
  ChildMarkdownRemarkRawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  ChildMarkdownRemarkFileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  ChildMarkdownRemarkHtml = 'childMarkdownRemark___html',
  ChildMarkdownRemarkHtmlAst = 'childMarkdownRemark___htmlAst',
  ChildMarkdownRemarkExcerptAst = 'childMarkdownRemark___excerptAst',
  ChildMarkdownRemarkHeadings = 'childMarkdownRemark___headings',
  ChildMarkdownRemarkHeadingsId = 'childMarkdownRemark___headings___id',
  ChildMarkdownRemarkHeadingsValue = 'childMarkdownRemark___headings___value',
  ChildMarkdownRemarkHeadingsDepth = 'childMarkdownRemark___headings___depth',
  ChildMarkdownRemarkTimeToRead = 'childMarkdownRemark___timeToRead',
  ChildMarkdownRemarkTableOfContents = 'childMarkdownRemark___tableOfContents',
  ChildMarkdownRemarkWordCountParagraphs = 'childMarkdownRemark___wordCount___paragraphs',
  ChildMarkdownRemarkWordCountSentences = 'childMarkdownRemark___wordCount___sentences',
  ChildMarkdownRemarkWordCountWords = 'childMarkdownRemark___wordCount___words',
  ChildMarkdownRemarkParentId = 'childMarkdownRemark___parent___id',
  ChildMarkdownRemarkParentParentId = 'childMarkdownRemark___parent___parent___id',
  ChildMarkdownRemarkParentParentChildren = 'childMarkdownRemark___parent___parent___children',
  ChildMarkdownRemarkParentChildren = 'childMarkdownRemark___parent___children',
  ChildMarkdownRemarkParentChildrenId = 'childMarkdownRemark___parent___children___id',
  ChildMarkdownRemarkParentChildrenChildren = 'childMarkdownRemark___parent___children___children',
  ChildMarkdownRemarkParentInternalContent = 'childMarkdownRemark___parent___internal___content',
  ChildMarkdownRemarkParentInternalContentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  ChildMarkdownRemarkParentInternalDescription = 'childMarkdownRemark___parent___internal___description',
  ChildMarkdownRemarkParentInternalFieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  ChildMarkdownRemarkParentInternalIgnoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  ChildMarkdownRemarkParentInternalMediaType = 'childMarkdownRemark___parent___internal___mediaType',
  ChildMarkdownRemarkParentInternalOwner = 'childMarkdownRemark___parent___internal___owner',
  ChildMarkdownRemarkParentInternalType = 'childMarkdownRemark___parent___internal___type',
  ChildMarkdownRemarkChildren = 'childMarkdownRemark___children',
  ChildMarkdownRemarkChildrenId = 'childMarkdownRemark___children___id',
  ChildMarkdownRemarkChildrenParentId = 'childMarkdownRemark___children___parent___id',
  ChildMarkdownRemarkChildrenParentChildren = 'childMarkdownRemark___children___parent___children',
  ChildMarkdownRemarkChildrenChildren = 'childMarkdownRemark___children___children',
  ChildMarkdownRemarkChildrenChildrenId = 'childMarkdownRemark___children___children___id',
  ChildMarkdownRemarkChildrenChildrenChildren = 'childMarkdownRemark___children___children___children',
  ChildMarkdownRemarkChildrenInternalContent = 'childMarkdownRemark___children___internal___content',
  ChildMarkdownRemarkChildrenInternalContentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  ChildMarkdownRemarkChildrenInternalDescription = 'childMarkdownRemark___children___internal___description',
  ChildMarkdownRemarkChildrenInternalFieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  ChildMarkdownRemarkChildrenInternalIgnoreType = 'childMarkdownRemark___children___internal___ignoreType',
  ChildMarkdownRemarkChildrenInternalMediaType = 'childMarkdownRemark___children___internal___mediaType',
  ChildMarkdownRemarkChildrenInternalOwner = 'childMarkdownRemark___children___internal___owner',
  ChildMarkdownRemarkChildrenInternalType = 'childMarkdownRemark___children___internal___type',
  ChildMarkdownRemarkInternalContent = 'childMarkdownRemark___internal___content',
  ChildMarkdownRemarkInternalContentDigest = 'childMarkdownRemark___internal___contentDigest',
  ChildMarkdownRemarkInternalDescription = 'childMarkdownRemark___internal___description',
  ChildMarkdownRemarkInternalFieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  ChildMarkdownRemarkInternalIgnoreType = 'childMarkdownRemark___internal___ignoreType',
  ChildMarkdownRemarkInternalMediaType = 'childMarkdownRemark___internal___mediaType',
  ChildMarkdownRemarkInternalOwner = 'childMarkdownRemark___internal___owner',
  ChildMarkdownRemarkInternalType = 'childMarkdownRemark___internal___type',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export enum ImageCropFocus {
  Center = 'CENTER',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  East = 'EAST',
  Southeast = 'SOUTHEAST',
  South = 'SOUTH',
  Southwest = 'SOUTHWEST',
  West = 'WEST',
  Northwest = 'NORTHWEST',
  Entropy = 'ENTROPY',
  Attention = 'ATTENTION'
}

export enum ImageFit {
  Cover = 'COVER',
  Contain = 'CONTAIN',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  NoChange = 'NO_CHANGE',
  Auto = 'AUTO',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP',
  Avif = 'AVIF'
}

export enum ImageLayout {
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH',
  Constrained = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DominantColor = 'DOMINANT_COLOR',
  TracedSvg = 'TRACED_SVG',
  Blurred = 'BLURRED',
  None = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  FixedBase64 = 'fixed___base64',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedWidth = 'fixed___width',
  FixedHeight = 'fixed___height',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedOriginalName = 'fixed___originalName',
  FluidBase64 = 'fluid___base64',
  FluidTracedSvg = 'fluid___tracedSVG',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSizes = 'fluid___sizes',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidPresentationHeight = 'fluid___presentationHeight',
  GatsbyImageData = 'gatsbyImageData',
  OriginalWidth = 'original___width',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width',
  ResizeHeight = 'resize___height',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeOriginalName = 'resize___originalName',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  Plain = 'PLAIN',
  Html = 'HTML',
  Markdown = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export enum MarkdownRemarkFieldsEnum {
  Id = 'id',
  FrontmatterTitle = 'frontmatter___title',
  FrontmatterLogoImageSourceInstanceName = 'frontmatter___logoImage___sourceInstanceName',
  FrontmatterLogoImageAbsolutePath = 'frontmatter___logoImage___absolutePath',
  FrontmatterLogoImageRelativePath = 'frontmatter___logoImage___relativePath',
  FrontmatterLogoImageExtension = 'frontmatter___logoImage___extension',
  FrontmatterLogoImageSize = 'frontmatter___logoImage___size',
  FrontmatterLogoImagePrettySize = 'frontmatter___logoImage___prettySize',
  FrontmatterLogoImageModifiedTime = 'frontmatter___logoImage___modifiedTime',
  FrontmatterLogoImageAccessTime = 'frontmatter___logoImage___accessTime',
  FrontmatterLogoImageChangeTime = 'frontmatter___logoImage___changeTime',
  FrontmatterLogoImageBirthTime = 'frontmatter___logoImage___birthTime',
  FrontmatterLogoImageRoot = 'frontmatter___logoImage___root',
  FrontmatterLogoImageDir = 'frontmatter___logoImage___dir',
  FrontmatterLogoImageBase = 'frontmatter___logoImage___base',
  FrontmatterLogoImageExt = 'frontmatter___logoImage___ext',
  FrontmatterLogoImageName = 'frontmatter___logoImage___name',
  FrontmatterLogoImageRelativeDirectory = 'frontmatter___logoImage___relativeDirectory',
  FrontmatterLogoImageDev = 'frontmatter___logoImage___dev',
  FrontmatterLogoImageMode = 'frontmatter___logoImage___mode',
  FrontmatterLogoImageNlink = 'frontmatter___logoImage___nlink',
  FrontmatterLogoImageUid = 'frontmatter___logoImage___uid',
  FrontmatterLogoImageGid = 'frontmatter___logoImage___gid',
  FrontmatterLogoImageRdev = 'frontmatter___logoImage___rdev',
  FrontmatterLogoImageIno = 'frontmatter___logoImage___ino',
  FrontmatterLogoImageAtimeMs = 'frontmatter___logoImage___atimeMs',
  FrontmatterLogoImageMtimeMs = 'frontmatter___logoImage___mtimeMs',
  FrontmatterLogoImageCtimeMs = 'frontmatter___logoImage___ctimeMs',
  FrontmatterLogoImageAtime = 'frontmatter___logoImage___atime',
  FrontmatterLogoImageMtime = 'frontmatter___logoImage___mtime',
  FrontmatterLogoImageCtime = 'frontmatter___logoImage___ctime',
  FrontmatterLogoImageBirthtime = 'frontmatter___logoImage___birthtime',
  FrontmatterLogoImageBirthtimeMs = 'frontmatter___logoImage___birthtimeMs',
  FrontmatterLogoImageBlksize = 'frontmatter___logoImage___blksize',
  FrontmatterLogoImageBlocks = 'frontmatter___logoImage___blocks',
  FrontmatterLogoImagePublicUrl = 'frontmatter___logoImage___publicURL',
  FrontmatterLogoImageChildrenImageSharp = 'frontmatter___logoImage___childrenImageSharp',
  FrontmatterLogoImageChildrenImageSharpGatsbyImageData = 'frontmatter___logoImage___childrenImageSharp___gatsbyImageData',
  FrontmatterLogoImageChildrenImageSharpId = 'frontmatter___logoImage___childrenImageSharp___id',
  FrontmatterLogoImageChildrenImageSharpChildren = 'frontmatter___logoImage___childrenImageSharp___children',
  FrontmatterLogoImageChildImageSharpGatsbyImageData = 'frontmatter___logoImage___childImageSharp___gatsbyImageData',
  FrontmatterLogoImageChildImageSharpId = 'frontmatter___logoImage___childImageSharp___id',
  FrontmatterLogoImageChildImageSharpChildren = 'frontmatter___logoImage___childImageSharp___children',
  FrontmatterLogoImageChildrenMarkdownRemark = 'frontmatter___logoImage___childrenMarkdownRemark',
  FrontmatterLogoImageChildrenMarkdownRemarkId = 'frontmatter___logoImage___childrenMarkdownRemark___id',
  FrontmatterLogoImageChildrenMarkdownRemarkExcerpt = 'frontmatter___logoImage___childrenMarkdownRemark___excerpt',
  FrontmatterLogoImageChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___logoImage___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterLogoImageChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___logoImage___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterLogoImageChildrenMarkdownRemarkHtml = 'frontmatter___logoImage___childrenMarkdownRemark___html',
  FrontmatterLogoImageChildrenMarkdownRemarkHtmlAst = 'frontmatter___logoImage___childrenMarkdownRemark___htmlAst',
  FrontmatterLogoImageChildrenMarkdownRemarkExcerptAst = 'frontmatter___logoImage___childrenMarkdownRemark___excerptAst',
  FrontmatterLogoImageChildrenMarkdownRemarkHeadings = 'frontmatter___logoImage___childrenMarkdownRemark___headings',
  FrontmatterLogoImageChildrenMarkdownRemarkTimeToRead = 'frontmatter___logoImage___childrenMarkdownRemark___timeToRead',
  FrontmatterLogoImageChildrenMarkdownRemarkTableOfContents = 'frontmatter___logoImage___childrenMarkdownRemark___tableOfContents',
  FrontmatterLogoImageChildrenMarkdownRemarkChildren = 'frontmatter___logoImage___childrenMarkdownRemark___children',
  FrontmatterLogoImageChildMarkdownRemarkId = 'frontmatter___logoImage___childMarkdownRemark___id',
  FrontmatterLogoImageChildMarkdownRemarkExcerpt = 'frontmatter___logoImage___childMarkdownRemark___excerpt',
  FrontmatterLogoImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___logoImage___childMarkdownRemark___rawMarkdownBody',
  FrontmatterLogoImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___logoImage___childMarkdownRemark___fileAbsolutePath',
  FrontmatterLogoImageChildMarkdownRemarkHtml = 'frontmatter___logoImage___childMarkdownRemark___html',
  FrontmatterLogoImageChildMarkdownRemarkHtmlAst = 'frontmatter___logoImage___childMarkdownRemark___htmlAst',
  FrontmatterLogoImageChildMarkdownRemarkExcerptAst = 'frontmatter___logoImage___childMarkdownRemark___excerptAst',
  FrontmatterLogoImageChildMarkdownRemarkHeadings = 'frontmatter___logoImage___childMarkdownRemark___headings',
  FrontmatterLogoImageChildMarkdownRemarkTimeToRead = 'frontmatter___logoImage___childMarkdownRemark___timeToRead',
  FrontmatterLogoImageChildMarkdownRemarkTableOfContents = 'frontmatter___logoImage___childMarkdownRemark___tableOfContents',
  FrontmatterLogoImageChildMarkdownRemarkChildren = 'frontmatter___logoImage___childMarkdownRemark___children',
  FrontmatterLogoImageId = 'frontmatter___logoImage___id',
  FrontmatterLogoImageParentId = 'frontmatter___logoImage___parent___id',
  FrontmatterLogoImageParentChildren = 'frontmatter___logoImage___parent___children',
  FrontmatterLogoImageChildren = 'frontmatter___logoImage___children',
  FrontmatterLogoImageChildrenId = 'frontmatter___logoImage___children___id',
  FrontmatterLogoImageChildrenChildren = 'frontmatter___logoImage___children___children',
  FrontmatterLogoImageInternalContent = 'frontmatter___logoImage___internal___content',
  FrontmatterLogoImageInternalContentDigest = 'frontmatter___logoImage___internal___contentDigest',
  FrontmatterLogoImageInternalDescription = 'frontmatter___logoImage___internal___description',
  FrontmatterLogoImageInternalFieldOwners = 'frontmatter___logoImage___internal___fieldOwners',
  FrontmatterLogoImageInternalIgnoreType = 'frontmatter___logoImage___internal___ignoreType',
  FrontmatterLogoImageInternalMediaType = 'frontmatter___logoImage___internal___mediaType',
  FrontmatterLogoImageInternalOwner = 'frontmatter___logoImage___internal___owner',
  FrontmatterLogoImageInternalType = 'frontmatter___logoImage___internal___type',
  FrontmatterTechnologies = 'frontmatter___technologies',
  FrontmatterDesktopImageSourceInstanceName = 'frontmatter___desktopImage___sourceInstanceName',
  FrontmatterDesktopImageAbsolutePath = 'frontmatter___desktopImage___absolutePath',
  FrontmatterDesktopImageRelativePath = 'frontmatter___desktopImage___relativePath',
  FrontmatterDesktopImageExtension = 'frontmatter___desktopImage___extension',
  FrontmatterDesktopImageSize = 'frontmatter___desktopImage___size',
  FrontmatterDesktopImagePrettySize = 'frontmatter___desktopImage___prettySize',
  FrontmatterDesktopImageModifiedTime = 'frontmatter___desktopImage___modifiedTime',
  FrontmatterDesktopImageAccessTime = 'frontmatter___desktopImage___accessTime',
  FrontmatterDesktopImageChangeTime = 'frontmatter___desktopImage___changeTime',
  FrontmatterDesktopImageBirthTime = 'frontmatter___desktopImage___birthTime',
  FrontmatterDesktopImageRoot = 'frontmatter___desktopImage___root',
  FrontmatterDesktopImageDir = 'frontmatter___desktopImage___dir',
  FrontmatterDesktopImageBase = 'frontmatter___desktopImage___base',
  FrontmatterDesktopImageExt = 'frontmatter___desktopImage___ext',
  FrontmatterDesktopImageName = 'frontmatter___desktopImage___name',
  FrontmatterDesktopImageRelativeDirectory = 'frontmatter___desktopImage___relativeDirectory',
  FrontmatterDesktopImageDev = 'frontmatter___desktopImage___dev',
  FrontmatterDesktopImageMode = 'frontmatter___desktopImage___mode',
  FrontmatterDesktopImageNlink = 'frontmatter___desktopImage___nlink',
  FrontmatterDesktopImageUid = 'frontmatter___desktopImage___uid',
  FrontmatterDesktopImageGid = 'frontmatter___desktopImage___gid',
  FrontmatterDesktopImageRdev = 'frontmatter___desktopImage___rdev',
  FrontmatterDesktopImageIno = 'frontmatter___desktopImage___ino',
  FrontmatterDesktopImageAtimeMs = 'frontmatter___desktopImage___atimeMs',
  FrontmatterDesktopImageMtimeMs = 'frontmatter___desktopImage___mtimeMs',
  FrontmatterDesktopImageCtimeMs = 'frontmatter___desktopImage___ctimeMs',
  FrontmatterDesktopImageAtime = 'frontmatter___desktopImage___atime',
  FrontmatterDesktopImageMtime = 'frontmatter___desktopImage___mtime',
  FrontmatterDesktopImageCtime = 'frontmatter___desktopImage___ctime',
  FrontmatterDesktopImageBirthtime = 'frontmatter___desktopImage___birthtime',
  FrontmatterDesktopImageBirthtimeMs = 'frontmatter___desktopImage___birthtimeMs',
  FrontmatterDesktopImageBlksize = 'frontmatter___desktopImage___blksize',
  FrontmatterDesktopImageBlocks = 'frontmatter___desktopImage___blocks',
  FrontmatterDesktopImagePublicUrl = 'frontmatter___desktopImage___publicURL',
  FrontmatterDesktopImageChildrenImageSharp = 'frontmatter___desktopImage___childrenImageSharp',
  FrontmatterDesktopImageChildrenImageSharpGatsbyImageData = 'frontmatter___desktopImage___childrenImageSharp___gatsbyImageData',
  FrontmatterDesktopImageChildrenImageSharpId = 'frontmatter___desktopImage___childrenImageSharp___id',
  FrontmatterDesktopImageChildrenImageSharpChildren = 'frontmatter___desktopImage___childrenImageSharp___children',
  FrontmatterDesktopImageChildImageSharpGatsbyImageData = 'frontmatter___desktopImage___childImageSharp___gatsbyImageData',
  FrontmatterDesktopImageChildImageSharpId = 'frontmatter___desktopImage___childImageSharp___id',
  FrontmatterDesktopImageChildImageSharpChildren = 'frontmatter___desktopImage___childImageSharp___children',
  FrontmatterDesktopImageChildrenMarkdownRemark = 'frontmatter___desktopImage___childrenMarkdownRemark',
  FrontmatterDesktopImageChildrenMarkdownRemarkId = 'frontmatter___desktopImage___childrenMarkdownRemark___id',
  FrontmatterDesktopImageChildrenMarkdownRemarkExcerpt = 'frontmatter___desktopImage___childrenMarkdownRemark___excerpt',
  FrontmatterDesktopImageChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___desktopImage___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterDesktopImageChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___desktopImage___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterDesktopImageChildrenMarkdownRemarkHtml = 'frontmatter___desktopImage___childrenMarkdownRemark___html',
  FrontmatterDesktopImageChildrenMarkdownRemarkHtmlAst = 'frontmatter___desktopImage___childrenMarkdownRemark___htmlAst',
  FrontmatterDesktopImageChildrenMarkdownRemarkExcerptAst = 'frontmatter___desktopImage___childrenMarkdownRemark___excerptAst',
  FrontmatterDesktopImageChildrenMarkdownRemarkHeadings = 'frontmatter___desktopImage___childrenMarkdownRemark___headings',
  FrontmatterDesktopImageChildrenMarkdownRemarkTimeToRead = 'frontmatter___desktopImage___childrenMarkdownRemark___timeToRead',
  FrontmatterDesktopImageChildrenMarkdownRemarkTableOfContents = 'frontmatter___desktopImage___childrenMarkdownRemark___tableOfContents',
  FrontmatterDesktopImageChildrenMarkdownRemarkChildren = 'frontmatter___desktopImage___childrenMarkdownRemark___children',
  FrontmatterDesktopImageChildMarkdownRemarkId = 'frontmatter___desktopImage___childMarkdownRemark___id',
  FrontmatterDesktopImageChildMarkdownRemarkExcerpt = 'frontmatter___desktopImage___childMarkdownRemark___excerpt',
  FrontmatterDesktopImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___desktopImage___childMarkdownRemark___rawMarkdownBody',
  FrontmatterDesktopImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___desktopImage___childMarkdownRemark___fileAbsolutePath',
  FrontmatterDesktopImageChildMarkdownRemarkHtml = 'frontmatter___desktopImage___childMarkdownRemark___html',
  FrontmatterDesktopImageChildMarkdownRemarkHtmlAst = 'frontmatter___desktopImage___childMarkdownRemark___htmlAst',
  FrontmatterDesktopImageChildMarkdownRemarkExcerptAst = 'frontmatter___desktopImage___childMarkdownRemark___excerptAst',
  FrontmatterDesktopImageChildMarkdownRemarkHeadings = 'frontmatter___desktopImage___childMarkdownRemark___headings',
  FrontmatterDesktopImageChildMarkdownRemarkTimeToRead = 'frontmatter___desktopImage___childMarkdownRemark___timeToRead',
  FrontmatterDesktopImageChildMarkdownRemarkTableOfContents = 'frontmatter___desktopImage___childMarkdownRemark___tableOfContents',
  FrontmatterDesktopImageChildMarkdownRemarkChildren = 'frontmatter___desktopImage___childMarkdownRemark___children',
  FrontmatterDesktopImageId = 'frontmatter___desktopImage___id',
  FrontmatterDesktopImageParentId = 'frontmatter___desktopImage___parent___id',
  FrontmatterDesktopImageParentChildren = 'frontmatter___desktopImage___parent___children',
  FrontmatterDesktopImageChildren = 'frontmatter___desktopImage___children',
  FrontmatterDesktopImageChildrenId = 'frontmatter___desktopImage___children___id',
  FrontmatterDesktopImageChildrenChildren = 'frontmatter___desktopImage___children___children',
  FrontmatterDesktopImageInternalContent = 'frontmatter___desktopImage___internal___content',
  FrontmatterDesktopImageInternalContentDigest = 'frontmatter___desktopImage___internal___contentDigest',
  FrontmatterDesktopImageInternalDescription = 'frontmatter___desktopImage___internal___description',
  FrontmatterDesktopImageInternalFieldOwners = 'frontmatter___desktopImage___internal___fieldOwners',
  FrontmatterDesktopImageInternalIgnoreType = 'frontmatter___desktopImage___internal___ignoreType',
  FrontmatterDesktopImageInternalMediaType = 'frontmatter___desktopImage___internal___mediaType',
  FrontmatterDesktopImageInternalOwner = 'frontmatter___desktopImage___internal___owner',
  FrontmatterDesktopImageInternalType = 'frontmatter___desktopImage___internal___type',
  FrontmatterMobileImageSourceInstanceName = 'frontmatter___mobileImage___sourceInstanceName',
  FrontmatterMobileImageAbsolutePath = 'frontmatter___mobileImage___absolutePath',
  FrontmatterMobileImageRelativePath = 'frontmatter___mobileImage___relativePath',
  FrontmatterMobileImageExtension = 'frontmatter___mobileImage___extension',
  FrontmatterMobileImageSize = 'frontmatter___mobileImage___size',
  FrontmatterMobileImagePrettySize = 'frontmatter___mobileImage___prettySize',
  FrontmatterMobileImageModifiedTime = 'frontmatter___mobileImage___modifiedTime',
  FrontmatterMobileImageAccessTime = 'frontmatter___mobileImage___accessTime',
  FrontmatterMobileImageChangeTime = 'frontmatter___mobileImage___changeTime',
  FrontmatterMobileImageBirthTime = 'frontmatter___mobileImage___birthTime',
  FrontmatterMobileImageRoot = 'frontmatter___mobileImage___root',
  FrontmatterMobileImageDir = 'frontmatter___mobileImage___dir',
  FrontmatterMobileImageBase = 'frontmatter___mobileImage___base',
  FrontmatterMobileImageExt = 'frontmatter___mobileImage___ext',
  FrontmatterMobileImageName = 'frontmatter___mobileImage___name',
  FrontmatterMobileImageRelativeDirectory = 'frontmatter___mobileImage___relativeDirectory',
  FrontmatterMobileImageDev = 'frontmatter___mobileImage___dev',
  FrontmatterMobileImageMode = 'frontmatter___mobileImage___mode',
  FrontmatterMobileImageNlink = 'frontmatter___mobileImage___nlink',
  FrontmatterMobileImageUid = 'frontmatter___mobileImage___uid',
  FrontmatterMobileImageGid = 'frontmatter___mobileImage___gid',
  FrontmatterMobileImageRdev = 'frontmatter___mobileImage___rdev',
  FrontmatterMobileImageIno = 'frontmatter___mobileImage___ino',
  FrontmatterMobileImageAtimeMs = 'frontmatter___mobileImage___atimeMs',
  FrontmatterMobileImageMtimeMs = 'frontmatter___mobileImage___mtimeMs',
  FrontmatterMobileImageCtimeMs = 'frontmatter___mobileImage___ctimeMs',
  FrontmatterMobileImageAtime = 'frontmatter___mobileImage___atime',
  FrontmatterMobileImageMtime = 'frontmatter___mobileImage___mtime',
  FrontmatterMobileImageCtime = 'frontmatter___mobileImage___ctime',
  FrontmatterMobileImageBirthtime = 'frontmatter___mobileImage___birthtime',
  FrontmatterMobileImageBirthtimeMs = 'frontmatter___mobileImage___birthtimeMs',
  FrontmatterMobileImageBlksize = 'frontmatter___mobileImage___blksize',
  FrontmatterMobileImageBlocks = 'frontmatter___mobileImage___blocks',
  FrontmatterMobileImagePublicUrl = 'frontmatter___mobileImage___publicURL',
  FrontmatterMobileImageChildrenImageSharp = 'frontmatter___mobileImage___childrenImageSharp',
  FrontmatterMobileImageChildrenImageSharpGatsbyImageData = 'frontmatter___mobileImage___childrenImageSharp___gatsbyImageData',
  FrontmatterMobileImageChildrenImageSharpId = 'frontmatter___mobileImage___childrenImageSharp___id',
  FrontmatterMobileImageChildrenImageSharpChildren = 'frontmatter___mobileImage___childrenImageSharp___children',
  FrontmatterMobileImageChildImageSharpGatsbyImageData = 'frontmatter___mobileImage___childImageSharp___gatsbyImageData',
  FrontmatterMobileImageChildImageSharpId = 'frontmatter___mobileImage___childImageSharp___id',
  FrontmatterMobileImageChildImageSharpChildren = 'frontmatter___mobileImage___childImageSharp___children',
  FrontmatterMobileImageChildrenMarkdownRemark = 'frontmatter___mobileImage___childrenMarkdownRemark',
  FrontmatterMobileImageChildrenMarkdownRemarkId = 'frontmatter___mobileImage___childrenMarkdownRemark___id',
  FrontmatterMobileImageChildrenMarkdownRemarkExcerpt = 'frontmatter___mobileImage___childrenMarkdownRemark___excerpt',
  FrontmatterMobileImageChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___mobileImage___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterMobileImageChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___mobileImage___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterMobileImageChildrenMarkdownRemarkHtml = 'frontmatter___mobileImage___childrenMarkdownRemark___html',
  FrontmatterMobileImageChildrenMarkdownRemarkHtmlAst = 'frontmatter___mobileImage___childrenMarkdownRemark___htmlAst',
  FrontmatterMobileImageChildrenMarkdownRemarkExcerptAst = 'frontmatter___mobileImage___childrenMarkdownRemark___excerptAst',
  FrontmatterMobileImageChildrenMarkdownRemarkHeadings = 'frontmatter___mobileImage___childrenMarkdownRemark___headings',
  FrontmatterMobileImageChildrenMarkdownRemarkTimeToRead = 'frontmatter___mobileImage___childrenMarkdownRemark___timeToRead',
  FrontmatterMobileImageChildrenMarkdownRemarkTableOfContents = 'frontmatter___mobileImage___childrenMarkdownRemark___tableOfContents',
  FrontmatterMobileImageChildrenMarkdownRemarkChildren = 'frontmatter___mobileImage___childrenMarkdownRemark___children',
  FrontmatterMobileImageChildMarkdownRemarkId = 'frontmatter___mobileImage___childMarkdownRemark___id',
  FrontmatterMobileImageChildMarkdownRemarkExcerpt = 'frontmatter___mobileImage___childMarkdownRemark___excerpt',
  FrontmatterMobileImageChildMarkdownRemarkRawMarkdownBody = 'frontmatter___mobileImage___childMarkdownRemark___rawMarkdownBody',
  FrontmatterMobileImageChildMarkdownRemarkFileAbsolutePath = 'frontmatter___mobileImage___childMarkdownRemark___fileAbsolutePath',
  FrontmatterMobileImageChildMarkdownRemarkHtml = 'frontmatter___mobileImage___childMarkdownRemark___html',
  FrontmatterMobileImageChildMarkdownRemarkHtmlAst = 'frontmatter___mobileImage___childMarkdownRemark___htmlAst',
  FrontmatterMobileImageChildMarkdownRemarkExcerptAst = 'frontmatter___mobileImage___childMarkdownRemark___excerptAst',
  FrontmatterMobileImageChildMarkdownRemarkHeadings = 'frontmatter___mobileImage___childMarkdownRemark___headings',
  FrontmatterMobileImageChildMarkdownRemarkTimeToRead = 'frontmatter___mobileImage___childMarkdownRemark___timeToRead',
  FrontmatterMobileImageChildMarkdownRemarkTableOfContents = 'frontmatter___mobileImage___childMarkdownRemark___tableOfContents',
  FrontmatterMobileImageChildMarkdownRemarkChildren = 'frontmatter___mobileImage___childMarkdownRemark___children',
  FrontmatterMobileImageId = 'frontmatter___mobileImage___id',
  FrontmatterMobileImageParentId = 'frontmatter___mobileImage___parent___id',
  FrontmatterMobileImageParentChildren = 'frontmatter___mobileImage___parent___children',
  FrontmatterMobileImageChildren = 'frontmatter___mobileImage___children',
  FrontmatterMobileImageChildrenId = 'frontmatter___mobileImage___children___id',
  FrontmatterMobileImageChildrenChildren = 'frontmatter___mobileImage___children___children',
  FrontmatterMobileImageInternalContent = 'frontmatter___mobileImage___internal___content',
  FrontmatterMobileImageInternalContentDigest = 'frontmatter___mobileImage___internal___contentDigest',
  FrontmatterMobileImageInternalDescription = 'frontmatter___mobileImage___internal___description',
  FrontmatterMobileImageInternalFieldOwners = 'frontmatter___mobileImage___internal___fieldOwners',
  FrontmatterMobileImageInternalIgnoreType = 'frontmatter___mobileImage___internal___ignoreType',
  FrontmatterMobileImageInternalMediaType = 'frontmatter___mobileImage___internal___mediaType',
  FrontmatterMobileImageInternalOwner = 'frontmatter___mobileImage___internal___owner',
  FrontmatterMobileImageInternalType = 'frontmatter___mobileImage___internal___type',
  FrontmatterLiveUrl = 'frontmatter___liveUrl',
  FrontmatterGithubUrl = 'frontmatter___githubUrl',
  FrontmatterSortIndex = 'frontmatter___sortIndex',
  FrontmatterRelatedSkills = 'frontmatter___related_skills',
  FrontmatterIconSourceInstanceName = 'frontmatter___icon___sourceInstanceName',
  FrontmatterIconAbsolutePath = 'frontmatter___icon___absolutePath',
  FrontmatterIconRelativePath = 'frontmatter___icon___relativePath',
  FrontmatterIconExtension = 'frontmatter___icon___extension',
  FrontmatterIconSize = 'frontmatter___icon___size',
  FrontmatterIconPrettySize = 'frontmatter___icon___prettySize',
  FrontmatterIconModifiedTime = 'frontmatter___icon___modifiedTime',
  FrontmatterIconAccessTime = 'frontmatter___icon___accessTime',
  FrontmatterIconChangeTime = 'frontmatter___icon___changeTime',
  FrontmatterIconBirthTime = 'frontmatter___icon___birthTime',
  FrontmatterIconRoot = 'frontmatter___icon___root',
  FrontmatterIconDir = 'frontmatter___icon___dir',
  FrontmatterIconBase = 'frontmatter___icon___base',
  FrontmatterIconExt = 'frontmatter___icon___ext',
  FrontmatterIconName = 'frontmatter___icon___name',
  FrontmatterIconRelativeDirectory = 'frontmatter___icon___relativeDirectory',
  FrontmatterIconDev = 'frontmatter___icon___dev',
  FrontmatterIconMode = 'frontmatter___icon___mode',
  FrontmatterIconNlink = 'frontmatter___icon___nlink',
  FrontmatterIconUid = 'frontmatter___icon___uid',
  FrontmatterIconGid = 'frontmatter___icon___gid',
  FrontmatterIconRdev = 'frontmatter___icon___rdev',
  FrontmatterIconIno = 'frontmatter___icon___ino',
  FrontmatterIconAtimeMs = 'frontmatter___icon___atimeMs',
  FrontmatterIconMtimeMs = 'frontmatter___icon___mtimeMs',
  FrontmatterIconCtimeMs = 'frontmatter___icon___ctimeMs',
  FrontmatterIconAtime = 'frontmatter___icon___atime',
  FrontmatterIconMtime = 'frontmatter___icon___mtime',
  FrontmatterIconCtime = 'frontmatter___icon___ctime',
  FrontmatterIconBirthtime = 'frontmatter___icon___birthtime',
  FrontmatterIconBirthtimeMs = 'frontmatter___icon___birthtimeMs',
  FrontmatterIconBlksize = 'frontmatter___icon___blksize',
  FrontmatterIconBlocks = 'frontmatter___icon___blocks',
  FrontmatterIconPublicUrl = 'frontmatter___icon___publicURL',
  FrontmatterIconChildrenImageSharp = 'frontmatter___icon___childrenImageSharp',
  FrontmatterIconChildrenImageSharpGatsbyImageData = 'frontmatter___icon___childrenImageSharp___gatsbyImageData',
  FrontmatterIconChildrenImageSharpId = 'frontmatter___icon___childrenImageSharp___id',
  FrontmatterIconChildrenImageSharpChildren = 'frontmatter___icon___childrenImageSharp___children',
  FrontmatterIconChildImageSharpGatsbyImageData = 'frontmatter___icon___childImageSharp___gatsbyImageData',
  FrontmatterIconChildImageSharpId = 'frontmatter___icon___childImageSharp___id',
  FrontmatterIconChildImageSharpChildren = 'frontmatter___icon___childImageSharp___children',
  FrontmatterIconChildrenMarkdownRemark = 'frontmatter___icon___childrenMarkdownRemark',
  FrontmatterIconChildrenMarkdownRemarkId = 'frontmatter___icon___childrenMarkdownRemark___id',
  FrontmatterIconChildrenMarkdownRemarkExcerpt = 'frontmatter___icon___childrenMarkdownRemark___excerpt',
  FrontmatterIconChildrenMarkdownRemarkRawMarkdownBody = 'frontmatter___icon___childrenMarkdownRemark___rawMarkdownBody',
  FrontmatterIconChildrenMarkdownRemarkFileAbsolutePath = 'frontmatter___icon___childrenMarkdownRemark___fileAbsolutePath',
  FrontmatterIconChildrenMarkdownRemarkHtml = 'frontmatter___icon___childrenMarkdownRemark___html',
  FrontmatterIconChildrenMarkdownRemarkHtmlAst = 'frontmatter___icon___childrenMarkdownRemark___htmlAst',
  FrontmatterIconChildrenMarkdownRemarkExcerptAst = 'frontmatter___icon___childrenMarkdownRemark___excerptAst',
  FrontmatterIconChildrenMarkdownRemarkHeadings = 'frontmatter___icon___childrenMarkdownRemark___headings',
  FrontmatterIconChildrenMarkdownRemarkTimeToRead = 'frontmatter___icon___childrenMarkdownRemark___timeToRead',
  FrontmatterIconChildrenMarkdownRemarkTableOfContents = 'frontmatter___icon___childrenMarkdownRemark___tableOfContents',
  FrontmatterIconChildrenMarkdownRemarkChildren = 'frontmatter___icon___childrenMarkdownRemark___children',
  FrontmatterIconChildMarkdownRemarkId = 'frontmatter___icon___childMarkdownRemark___id',
  FrontmatterIconChildMarkdownRemarkExcerpt = 'frontmatter___icon___childMarkdownRemark___excerpt',
  FrontmatterIconChildMarkdownRemarkRawMarkdownBody = 'frontmatter___icon___childMarkdownRemark___rawMarkdownBody',
  FrontmatterIconChildMarkdownRemarkFileAbsolutePath = 'frontmatter___icon___childMarkdownRemark___fileAbsolutePath',
  FrontmatterIconChildMarkdownRemarkHtml = 'frontmatter___icon___childMarkdownRemark___html',
  FrontmatterIconChildMarkdownRemarkHtmlAst = 'frontmatter___icon___childMarkdownRemark___htmlAst',
  FrontmatterIconChildMarkdownRemarkExcerptAst = 'frontmatter___icon___childMarkdownRemark___excerptAst',
  FrontmatterIconChildMarkdownRemarkHeadings = 'frontmatter___icon___childMarkdownRemark___headings',
  FrontmatterIconChildMarkdownRemarkTimeToRead = 'frontmatter___icon___childMarkdownRemark___timeToRead',
  FrontmatterIconChildMarkdownRemarkTableOfContents = 'frontmatter___icon___childMarkdownRemark___tableOfContents',
  FrontmatterIconChildMarkdownRemarkChildren = 'frontmatter___icon___childMarkdownRemark___children',
  FrontmatterIconId = 'frontmatter___icon___id',
  FrontmatterIconParentId = 'frontmatter___icon___parent___id',
  FrontmatterIconParentChildren = 'frontmatter___icon___parent___children',
  FrontmatterIconChildren = 'frontmatter___icon___children',
  FrontmatterIconChildrenId = 'frontmatter___icon___children___id',
  FrontmatterIconChildrenChildren = 'frontmatter___icon___children___children',
  FrontmatterIconInternalContent = 'frontmatter___icon___internal___content',
  FrontmatterIconInternalContentDigest = 'frontmatter___icon___internal___contentDigest',
  FrontmatterIconInternalDescription = 'frontmatter___icon___internal___description',
  FrontmatterIconInternalFieldOwners = 'frontmatter___icon___internal___fieldOwners',
  FrontmatterIconInternalIgnoreType = 'frontmatter___icon___internal___ignoreType',
  FrontmatterIconInternalMediaType = 'frontmatter___icon___internal___mediaType',
  FrontmatterIconInternalOwner = 'frontmatter___icon___internal___owner',
  FrontmatterIconInternalType = 'frontmatter___icon___internal___type',
  FrontmatterBrandColor = 'frontmatter___brandColor',
  FrontmatterTags = 'frontmatter___tags',
  Excerpt = 'excerpt',
  RawMarkdownBody = 'rawMarkdownBody',
  FileAbsolutePath = 'fileAbsolutePath',
  Html = 'html',
  HtmlAst = 'htmlAst',
  ExcerptAst = 'excerptAst',
  Headings = 'headings',
  HeadingsId = 'headings___id',
  HeadingsValue = 'headings___value',
  HeadingsDepth = 'headings___depth',
  TimeToRead = 'timeToRead',
  TableOfContents = 'tableOfContents',
  WordCountParagraphs = 'wordCount___paragraphs',
  WordCountSentences = 'wordCount___sentences',
  WordCountWords = 'wordCount___words',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
  __typename?: 'MarkdownRemarkFrontmatter';
  title?: Maybe<Scalars['String']>;
  logoImage?: Maybe<File>;
  technologies?: Maybe<Array<Maybe<Scalars['String']>>>;
  desktopImage?: Maybe<File>;
  mobileImage?: Maybe<File>;
  liveUrl?: Maybe<Scalars['String']>;
  githubUrl?: Maybe<Scalars['String']>;
  sortIndex?: Maybe<Scalars['Int']>;
  related_skills?: Maybe<Array<Maybe<Scalars['String']>>>;
  icon?: Maybe<File>;
  brandColor?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  logoImage?: Maybe<FileFilterInput>;
  technologies?: Maybe<StringQueryOperatorInput>;
  desktopImage?: Maybe<FileFilterInput>;
  mobileImage?: Maybe<FileFilterInput>;
  liveUrl?: Maybe<StringQueryOperatorInput>;
  githubUrl?: Maybe<StringQueryOperatorInput>;
  sortIndex?: Maybe<IntQueryOperatorInput>;
  related_skills?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<FileFilterInput>;
  brandColor?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyWhite = 'TURNPOLICY_WHITE',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  BuildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  SiteMetadataTitle = 'siteMetadata___title',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataAuthor = 'siteMetadata___author',
  Port = 'port',
  Host = 'host',
  FlagsTheFlag = 'flags___THE_FLAG',
  FlagsDevSsr = 'flags___DEV_SSR',
  Polyfill = 'polyfill',
  PathPrefix = 'pathPrefix',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFlags = {
  __typename?: 'SiteFlags';
  THE_FLAG?: Maybe<Scalars['Boolean']>;
  DEV_SSR?: Maybe<Scalars['Boolean']>;
};

export type SiteFlagsFilterInput = {
  THE_FLAG?: Maybe<BooleanQueryOperatorInput>;
  DEV_SSR?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  FunctionRoute = 'functionRoute',
  PluginName = 'pluginName',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  RelativeCompiledFilePath = 'relativeCompiledFilePath',
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type'
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Path = 'path',
  Component = 'component',
  InternalComponentName = 'internalComponentName',
  ComponentChunkName = 'componentChunkName',
  MatchPath = 'matchPath',
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorVersion = 'pluginCreator___version',
  PluginCreatorPluginOptionsBase64Width = 'pluginCreator___pluginOptions___base64Width',
  PluginCreatorPluginOptionsStripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  PluginCreatorPluginOptionsDefaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  PluginCreatorPluginOptionsFailOnError = 'pluginCreator___pluginOptions___failOnError',
  PluginCreatorPluginOptionsName = 'pluginCreator___pluginOptions___name',
  PluginCreatorPluginOptionsPath = 'pluginCreator___pluginOptions___path',
  PluginCreatorPluginOptionsShortName = 'pluginCreator___pluginOptions___short_name',
  PluginCreatorPluginOptionsStartUrl = 'pluginCreator___pluginOptions___start_url',
  PluginCreatorPluginOptionsBackgroundColor = 'pluginCreator___pluginOptions___background_color',
  PluginCreatorPluginOptionsThemeColor = 'pluginCreator___pluginOptions___theme_color',
  PluginCreatorPluginOptionsDisplay = 'pluginCreator___pluginOptions___display',
  PluginCreatorPluginOptionsIcon = 'pluginCreator___pluginOptions___icon',
  PluginCreatorPluginOptionsLegacy = 'pluginCreator___pluginOptions___legacy',
  PluginCreatorPluginOptionsThemeColorInHead = 'pluginCreator___pluginOptions___theme_color_in_head',
  PluginCreatorPluginOptionsCacheBustingMode = 'pluginCreator___pluginOptions___cache_busting_mode',
  PluginCreatorPluginOptionsCrossOrigin = 'pluginCreator___pluginOptions___crossOrigin',
  PluginCreatorPluginOptionsIncludeFavicon = 'pluginCreator___pluginOptions___include_favicon',
  PluginCreatorPluginOptionsCacheDigest = 'pluginCreator___pluginOptions___cacheDigest',
  PluginCreatorPluginOptionsDisplayName = 'pluginCreator___pluginOptions___displayName',
  PluginCreatorPluginOptionsFileName = 'pluginCreator___pluginOptions___fileName',
  PluginCreatorPluginOptionsMinify = 'pluginCreator___pluginOptions___minify',
  PluginCreatorPluginOptionsNamespace = 'pluginCreator___pluginOptions___namespace',
  PluginCreatorPluginOptionsTranspileTemplateLiterals = 'pluginCreator___pluginOptions___transpileTemplateLiterals',
  PluginCreatorPluginOptionsPure = 'pluginCreator___pluginOptions___pure',
  PluginCreatorPluginOptionsIsTsx = 'pluginCreator___pluginOptions___isTSX',
  PluginCreatorPluginOptionsJsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  PluginCreatorPluginOptionsAllExtensions = 'pluginCreator___pluginOptions___allExtensions',
  PluginCreatorPluginOptionsPathCheck = 'pluginCreator___pluginOptions___pathCheck',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPackageJsonName = 'pluginCreator___packageJson___name',
  PluginCreatorPackageJsonDescription = 'pluginCreator___packageJson___description',
  PluginCreatorPackageJsonVersion = 'pluginCreator___packageJson___version',
  PluginCreatorPackageJsonMain = 'pluginCreator___packageJson___main',
  PluginCreatorPackageJsonLicense = 'pluginCreator___packageJson___license',
  PluginCreatorPackageJsonDependencies = 'pluginCreator___packageJson___dependencies',
  PluginCreatorPackageJsonDependenciesName = 'pluginCreator___packageJson___dependencies___name',
  PluginCreatorPackageJsonDependenciesVersion = 'pluginCreator___packageJson___dependencies___version',
  PluginCreatorPackageJsonDevDependencies = 'pluginCreator___packageJson___devDependencies',
  PluginCreatorPackageJsonDevDependenciesName = 'pluginCreator___packageJson___devDependencies___name',
  PluginCreatorPackageJsonDevDependenciesVersion = 'pluginCreator___packageJson___devDependencies___version',
  PluginCreatorPackageJsonPeerDependencies = 'pluginCreator___packageJson___peerDependencies',
  PluginCreatorPackageJsonPeerDependenciesName = 'pluginCreator___packageJson___peerDependencies___name',
  PluginCreatorPackageJsonPeerDependenciesVersion = 'pluginCreator___packageJson___peerDependencies___version',
  PluginCreatorPackageJsonKeywords = 'pluginCreator___packageJson___keywords',
  PluginCreatorId = 'pluginCreatorId'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  Id = 'id',
  ParentId = 'parent___id',
  ParentParentId = 'parent___parent___id',
  ParentParentParentId = 'parent___parent___parent___id',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  Children = 'children',
  ChildrenId = 'children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentParentId = 'children___parent___parent___id',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenChildren = 'children___children',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Resolve = 'resolve',
  Name = 'name',
  Version = 'version',
  PluginOptionsBase64Width = 'pluginOptions___base64Width',
  PluginOptionsStripMetadata = 'pluginOptions___stripMetadata',
  PluginOptionsDefaultQuality = 'pluginOptions___defaultQuality',
  PluginOptionsFailOnError = 'pluginOptions___failOnError',
  PluginOptionsName = 'pluginOptions___name',
  PluginOptionsPath = 'pluginOptions___path',
  PluginOptionsShortName = 'pluginOptions___short_name',
  PluginOptionsStartUrl = 'pluginOptions___start_url',
  PluginOptionsBackgroundColor = 'pluginOptions___background_color',
  PluginOptionsThemeColor = 'pluginOptions___theme_color',
  PluginOptionsDisplay = 'pluginOptions___display',
  PluginOptionsIcon = 'pluginOptions___icon',
  PluginOptionsLegacy = 'pluginOptions___legacy',
  PluginOptionsThemeColorInHead = 'pluginOptions___theme_color_in_head',
  PluginOptionsCacheBustingMode = 'pluginOptions___cache_busting_mode',
  PluginOptionsCrossOrigin = 'pluginOptions___crossOrigin',
  PluginOptionsIncludeFavicon = 'pluginOptions___include_favicon',
  PluginOptionsCacheDigest = 'pluginOptions___cacheDigest',
  PluginOptionsDisplayName = 'pluginOptions___displayName',
  PluginOptionsFileName = 'pluginOptions___fileName',
  PluginOptionsMinify = 'pluginOptions___minify',
  PluginOptionsNamespace = 'pluginOptions___namespace',
  PluginOptionsTranspileTemplateLiterals = 'pluginOptions___transpileTemplateLiterals',
  PluginOptionsPure = 'pluginOptions___pure',
  PluginOptionsIsTsx = 'pluginOptions___isTSX',
  PluginOptionsJsxPragma = 'pluginOptions___jsxPragma',
  PluginOptionsAllExtensions = 'pluginOptions___allExtensions',
  PluginOptionsPathCheck = 'pluginOptions___pathCheck',
  NodeApIs = 'nodeAPIs',
  BrowserApIs = 'browserAPIs',
  SsrApIs = 'ssrAPIs',
  PluginFilepath = 'pluginFilepath',
  PackageJsonName = 'packageJson___name',
  PackageJsonDescription = 'packageJson___description',
  PackageJsonVersion = 'packageJson___version',
  PackageJsonMain = 'packageJson___main',
  PackageJsonLicense = 'packageJson___license',
  PackageJsonDependencies = 'packageJson___dependencies',
  PackageJsonDependenciesName = 'packageJson___dependencies___name',
  PackageJsonDependenciesVersion = 'packageJson___dependencies___version',
  PackageJsonDevDependencies = 'packageJson___devDependencies',
  PackageJsonDevDependenciesName = 'packageJson___devDependencies___name',
  PackageJsonDevDependenciesVersion = 'packageJson___devDependencies___version',
  PackageJsonPeerDependencies = 'packageJson___peerDependencies',
  PackageJsonPeerDependenciesName = 'packageJson___peerDependencies___name',
  PackageJsonPeerDependenciesVersion = 'packageJson___peerDependencies___version',
  PackageJsonKeywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  background_color?: Maybe<Scalars['String']>;
  theme_color?: Maybe<Scalars['String']>;
  display?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  minify?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  background_color?: Maybe<StringQueryOperatorInput>;
  theme_color?: Maybe<StringQueryOperatorInput>;
  display?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type GatsbyImageSharpFixedFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebpFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFixed_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>
);

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFixed' }
  & Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>
);

export type GatsbyImageSharpFluidFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = (
  { __typename?: 'ImageSharpFluid' }
  & { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] }
);

export type GatsbyImageSharpFluid_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebpFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type GatsbyImageSharpFluid_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>
);

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = (
  { __typename?: 'ImageSharpFluid' }
  & Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>
);

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>
    )> }
  )> }
);

export type ProjectsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProjectsQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'id' | 'excerpt'>
        & { frontmatter?: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'technologies' | 'liveUrl' | 'githubUrl'>
          & { logoImage?: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp?: Maybe<(
              { __typename?: 'ImageSharp' }
              & Pick<ImageSharp, 'gatsbyImageData'>
            )> }
          )>, desktopImage?: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp?: Maybe<(
              { __typename?: 'ImageSharp' }
              & Pick<ImageSharp, 'gatsbyImageData'>
            )> }
          )>, mobileImage?: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp?: Maybe<(
              { __typename?: 'ImageSharp' }
              & Pick<ImageSharp, 'gatsbyImageData'>
            )> }
          )> }
        )> }
      ) }
    )> }
  ) }
);

export type SkillsQueryVariables = Exact<{ [key: string]: never; }>;


export type SkillsQuery = (
  { __typename?: 'Query' }
  & { allMarkdownRemark: (
    { __typename?: 'MarkdownRemarkConnection' }
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & Pick<MarkdownRemark, 'id' | 'excerpt'>
        & { frontmatter?: Maybe<(
          { __typename?: 'MarkdownRemarkFrontmatter' }
          & Pick<MarkdownRemarkFrontmatter, 'title' | 'related_skills' | 'brandColor' | 'tags'>
          & { icon?: Maybe<(
            { __typename?: 'File' }
            & { childImageSharp?: Maybe<(
              { __typename?: 'ImageSharp' }
              & Pick<ImageSharp, 'gatsbyImageData'>
            )> }
          )> }
        )> }
      ) }
    )> }
  ) }
);
