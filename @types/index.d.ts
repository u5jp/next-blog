type blog ={
    fields: blogField,
    sys: sys
}

type category = {
    fields:categoryField,
    sys:sys
}

type sys = {
  id: string;
}

type blogField = blogFieldWithoutCategories & categories


type blogFieldWithoutCategories= {
    body:object
    title: string;
    subtitle: string;
    date: string;
    slug: string;
    thumbnail: {
      fields: {
        file: {
          url: string;
        },
        title: string;
      }
    };
}

type categories = {
  categories:category[]
}

type categoryField = {
    category: string;
    slug: string;
}

type className = {
  className?: string
}

type index = {
  index:number
}
