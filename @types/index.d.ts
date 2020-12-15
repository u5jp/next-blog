type sys = {
  sys:{}
}

type blog =
  {
    fields: fields,
    sys: sys
  }

//カテゴリー抜きの定義
type fieldsWithoutCategories= {
    body:{}
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

type fields = fieldsWithoutCategories & categories

type category = {
    fields:categoryField,
    sys: {
      id: string;
    }
}

type categoryField = {
    category: string;
    slug: string;
}


type categories = {
  categories:category[]
}

type className = {
  className?: string
}

type index = {
  index:number
}
