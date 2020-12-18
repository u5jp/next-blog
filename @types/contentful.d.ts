interface Entry<T> {
    sys: import("contentful").Sys;
    fields: T;
    toPlainObject(): object;
    update(): Promise<Entry<T>>;
}

interface IBlogsFields {
  /** Title */
  title?: string | undefined;

  /** Subtitle */
  subtitle?: string | undefined;

  /** Date */
  date?: string | undefined;

  /** Thumbnail */
  thumbnail?: import("contentful").Asset | undefined;

  /** Body */
  body?: import("@contentful/rich-text-types").Document | undefined;

  /** Categories */
  categories?: ICategories[] | undefined;

  /** Slug */
  slug?: string | undefined;
}

interface IBlogs extends Entry<IBlogsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogs";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

interface ICategoriesFields {
  /** slug */
  slug?: string | undefined;

  /** Category */
  category?: string | undefined;
}

interface ICategories extends Entry<ICategoriesFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "categories";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

type CONTENT_TYPE = "blogs" | "categories" ;

type LOCALE_CODE = "en-US";

type CONTENTFUL_DEFAULT_LOCALE_CODE = "en-US";

type BODY = Pick<IBlogsFields, 'body'>

type SLUG = Pick<IBlogsFields, 'slug'>
